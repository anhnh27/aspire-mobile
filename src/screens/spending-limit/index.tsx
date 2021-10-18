import * as React from 'react';
import {View, Text, TouchableOpacity, Image, Alert} from 'react-native';
import STRINGS from '../../assets/strings';
import styles from './styles';
import {useHeaderHeight} from '@react-navigation/elements';
import Icon from '../../components/Icon';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import SetLimitInput from '../../components/SetLimitInput';
import {useDispatch, useSelector} from 'react-redux';
import {setWeeklyLimitRequest} from '../../store/reducers/card-info/actions';
import Button from '../../components/Button';

type SpendingLimitScreenProps = {};

type AmountButtonProps = {
  label: string;
  onPress?: any;
};

const AmountButton = (props: AmountButtonProps) => {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.amountButtonText}>{props.label}</Text>
    </TouchableOpacity>
  );
};

const amountButtonList = [
  {label: STRINGS.amount5000, value: 5000},
  {label: STRINGS.amount10000, value: 10000},
  {label: STRINGS.amount15000, value: 15000},
];

const SpendingLimitScreen: React.FC = (_props: SpendingLimitScreenProps) => {
  const dispatch = useDispatch();
  const cardInfo = useSelector(state => state.cardInfo);
  const headerHeight = useHeaderHeight();
  const {bottom} = useSafeAreaInsets();
  const [limitAmount, setLimitAmount] = React.useState(0);

  const onSavePress = () => {
    dispatch(setWeeklyLimitRequest(limitAmount));
  };

  const onAmountButtonPress = (amount: number) => () => {
    setLimitAmount(amount);
  };

  return (
    <View style={styles.container}>
      <Icon
        iconName={'Logo'}
        style={[styles.logo, {marginTop: headerHeight / 2}]}
      />
      <Text style={styles.screenTitle}>{STRINGS.spending_limit_title}</Text>
      <View style={styles.whiteBGView}>
        <View style={[styles.setWeelyLabelContainer, styles.row]}>
          <Image
            source={require('../../assets/images/note.png')}
            style={styles.setWeeklyLogo}
          />
          <Text style={styles.setWeeklyText}>{STRINGS.set_limit_desc}</Text>
        </View>
        <SetLimitInput
          style={styles.limitInputContainer}
          onChangeText={(text: string) => setLimitAmount(parseFloat(text))}
        />
        <Text style={styles.note}>{STRINGS.spending_note}</Text>
        <View style={[styles.row, styles.buttonsContainer]}>
          {amountButtonList.map((item, index) => {
            return (
              <AmountButton
                key={index}
                label={item.label}
                onPress={onAmountButtonPress(item.value)}
              />
            );
          })}
        </View>
        <Button
          style={[
            styles.buttonSave,
            {bottom: bottom + 12},
            limitAmount > 0 && styles.buttonSaveEnabled,
          ]}
          onPress={onSavePress}
          title={STRINGS.save}
          disabled={limitAmount === 0 || !limitAmount}
          loading={cardInfo.pending}
        />
      </View>
    </View>
  );
};

export default SpendingLimitScreen;
