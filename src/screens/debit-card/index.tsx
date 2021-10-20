import * as React from "react";
import { useNavigation } from "@react-navigation/core";
import { useSelector, useDispatch } from "react-redux";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import STRINGS from "../../assets/strings";
import Icon from "../../components/Icon";
import styles from "./styles";
import { fetchCardInfoRequest } from "../../store/reducers/card-info/actions";
import { fetchUserProfileRequest } from "../../store/reducers/user-profile/actions";
import BarChart from "../../components/BarChart";
import { Switch } from "react-native-switch";
import Colors from "../../theme/colors";
import useComponentSize from "../../hooks/useComponentSize";

type DotGroupProps = {
  style?: object;
};

const DotGroup = (props: DotGroupProps) => {
  const { style } = props;
  return (
    <View style={[styles.row, style && style]}>
      <View style={styles.dot} />
      <View style={styles.dot} />
      <View style={styles.dot} />
      <View style={styles.dot} />
    </View>
  );
};

type CardNumberHidden = {
  last4Digits: string;
};

const CardNumberHidden = (props: CardNumberHidden) => {
  return (
    <>
      <DotGroup />
      <DotGroup style={styles.ml24} />
      <DotGroup style={styles.ml24} />
      <Text style={[styles.cardLast4Number, styles.ml24]}>
        {props.last4Digits}
      </Text>
    </>
  );
};

type CardNumber = {
  cardNo: string;
};

const CardNumber = (props: CardNumber) => {
  const numbers = props?.cardNo?.split(" ");

  if (!numbers) return null;

  return (
    <>
      {numbers.map((number, index) => {
        return (
          <Text
            key={index}
            style={[styles.cardLast4Number, index !== 0 && styles.ml24]}
          >
            {number}
          </Text>
        );
      })}
    </>
  );
};

type ActionItemProps = {
  source: any;
  name: string;
  description: string;
  onPress: () => void;
  withSwitch?: boolean;
  isSwitchedOn?: boolean;
};

const ActionItem = (props: ActionItemProps) => {
  const { source, name, description, onPress, withSwitch, isSwitchedOn } =
    props;
  return (
    <TouchableOpacity style={styles.actionItem} onPress={onPress}>
      <Image source={source} style={styles.actionItemIcon} />
      <View style={styles.descriptionContainer}>
        <Text style={styles.actionName}>{name}</Text>
        <Text style={styles.actionDescription}>{description}</Text>
      </View>
      {withSwitch && (
        <Switch
          containerStyle={{
            position: "absolute",
            right: 0,
          }}
          value={isSwitchedOn}
          disabled={true}
          circleSize={18}
          barHeight={22}
          circleBorderWidth={0}
          backgroundActive={Colors.green}
          backgroundInactive={Colors.text1}
          circleActiveColor={"white"}
          circleInActiveColor={"white"}
          changeValueImmediately={true}
          renderActiveText={false}
          renderInActiveText={false}
          switchWidthMultiplier={2.5}
        />
      )}
    </TouchableOpacity>
  );
};

type ShowCardButtonProps = {
  onShowCardPress: () => void;
  isShowCardNo: boolean;
};

const ShowCardButton = (props: ShowCardButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.showCardButton, styles.row]}
      onPress={props.onShowCardPress}
    >
      {props.isShowCardNo ? (
        <Image
          source={require("../../assets/images/eye-close.png")}
          style={styles.showCardIcon}
        />
      ) : (
        <Image
          source={require("../../assets/images/eye-close.png")}
          style={styles.showCardIcon}
        />
      )}
      <Text style={styles.showCardText}>{STRINGS.show_card_number}</Text>
    </TouchableOpacity>
  );
};

type DebitCardScreenProps = {};

const DebitCardScreen: React.FC<DebitCardScreenProps> = (
  _: DebitCardScreenProps
) => {
  const dispatch = useDispatch();
  const cardInfo = useSelector((state) => state.cardInfo);
  const userProfile = useSelector((state) => state.userProfile);
  const navigation = useNavigation();
  const { top } = useSafeAreaInsets();
  const [isShowCardNo, setShowCardNo] = React.useState(true);

  React.useEffect(() => {
    dispatch(fetchCardInfoRequest());
    dispatch(fetchUserProfileRequest());
  }, [dispatch]);

  const [size, onLayout] = useComponentSize();
  const onShowCardPress = () => {
    setShowCardNo(!isShowCardNo);
  };

  return (
    <View style={styles.container}>
      <View style={styles.fix}>
        <View onLayout={onLayout}>
          <View style={[styles.logoContainer, { marginTop: top }]}>
            <Icon iconName={"Logo"} style={styles.logo} />
          </View>
          <View style={styles.screenTitleContainer}>
            <Text style={styles.title}>{STRINGS.debit_card}</Text>
          </View>
          <View style={styles.balanceContainer}>
            <Text style={styles.balanceTitle}>{STRINGS.avalable_balance}</Text>
            <View style={[styles.row, styles.mt10]}>
              <Text style={styles.balanceCurrencyIcon}>{"S$"}</Text>
              <Text style={styles.balanceValue}>
                {cardInfo?.data?.balance || "--"}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={[
          styles.scrollContent,
          size && { marginTop: size.height },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.cardContainer}>
          <View style={styles.topBorderRadiusView} />
          <View style={styles.showCardNumberContainer}>
            <View style={styles.fixView} />
            <ShowCardButton
              isShowCardNo={isShowCardNo}
              onShowCardPress={onShowCardPress}
            />
          </View>
          <View style={styles.card}>
            <View style={styles.cardContentRow1}>
              <Icon iconName={"aspire-Logo"} style={styles.logoWithTextIcon} />
            </View>
            <View style={styles.cardContentRow2}>
              <Text style={styles.useName}>
                {userProfile?.data?.displayName || "--"}
              </Text>
            </View>
            <View style={styles.cardContentRow3}>
              {isShowCardNo ? (
                <CardNumber cardNo={cardInfo?.data?.cardNo} />
              ) : (
                <CardNumberHidden
                  last4Digits={cardInfo?.data?.last4Digits || "----"}
                />
              )}
            </View>
            <View style={styles.cardContentRow4}>
              <Text style={styles.validThruText}>{`Thru: ${
                cardInfo?.data?.validThru || "--"
              }`}</Text>
              <Text style={[styles.cvvText, styles.ml24]}>{"CVV: ***"}</Text>
            </View>
            <View style={styles.cardContentRow5}>
              <Icon iconName={"Visa-Logo"} style={styles.visaLogo} />
            </View>
          </View>
        </View>
        <View style={styles.whiteBGView}>
          <View style={styles.weeklyLimitChartContainer}>
            <BarChart
              currentValue={cardInfo?.data?.currentSpending || "--"}
              totalValue={cardInfo?.data?.weeklySpendingLimit || "--"}
            />
          </View>
          <View style={styles.actionContainer}>
            <ActionItem
              source={require("../../assets/images/insight.png")}
              name={STRINGS.top_up_action_name}
              description={STRINGS.top_up_action_desc}
              onPress={() => console.log("press")}
            />
            <ActionItem
              source={require("../../assets/images/Transfer-2.png")}
              name={STRINGS.spending_limit_action_name}
              description={`${STRINGS.spending_limit_action_desc} ${cardInfo?.data?.weeklySpendingLimit}`}
              onPress={() => navigation.navigate("SpendingLimit")}
              withSwitch={true}
              isSwitchedOn={true}
            />
            <ActionItem
              source={require("../../assets/images/Transfer-3.png")}
              name={STRINGS.freeze_card_action_name}
              description={STRINGS.freeze_card_action_desc}
              onPress={() => console.log("press")}
              withSwitch={true}
              isSwitchedOn={false}
            />
            <ActionItem
              source={require("../../assets/images/Transfer-1.png")}
              name={STRINGS.new_card_action_name}
              description={STRINGS.new_card_action_desc}
              onPress={() => console.log("press")}
            />
            <ActionItem
              source={require("../../assets/images/Transfer.png")}
              name={STRINGS.deactivated_action_name}
              description={STRINGS.deactivated_action_desc}
              onPress={() => console.log("press")}
            />
          </View>
          <View
            style={[styles.bottomView, size && { height: size.height * 1.5 }]}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default DebitCardScreen;
