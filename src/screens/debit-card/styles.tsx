import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../theme/colors";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  mh6: {
    marginHorizontal: 6,
  },
  mt10: {
    marginTop: 10,
  },
  ml6: {
    marginLeft: 6,
  },
  ml24: {
    marginLeft: 24,
  },
  row: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  fix: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: "20%",
    width: "100%",
    backgroundColor: Colors.background,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  bottomView: {
    backgroundColor: "white",
  },
  whiteBGView: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 24,
  },
  logoContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingEnd: 24,
  },
  logo: {
    fontSize: 25,
    color: Colors.green,
  },
  screenTitleContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingStart: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    fontFamily: "Avenir Next",
  },
  balanceContainer: {
    paddingHorizontal: 24,
    marginTop: 24,
  },
  balanceTitle: {
    fontSize: 14,
    color: "white",
    fontFamily: "Avenir Next",
  },
  balanceCurrencyIcon: {
    backgroundColor: Colors.green,
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    fontFamily: "Avenir Next",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    overflow: "hidden",
  },
  balanceValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    fontFamily: "Avenir Next",
    paddingLeft: 6,
  },
  cardContainer: {
    width: "100%",
  },
  topBorderRadiusView: {
    height: 100,
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  showCardNumberContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginHorizontal: 24,
  },
  showCardIcon: {},
  showCardButton: {
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: "white",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  showCardText: {
    fontSize: 12,
    fontWeight: "bold",
    color: Colors.green,
    fontFamily: "Avenir Next",
    marginLeft: 8,
  },
  card: {
    backgroundColor: Colors.green,
    borderRadius: 8,
    padding: 24,
    marginHorizontal: 24,
  },
  cardContentRow1: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  cardContentRow2: {},
  cardContentRow3: {
    flexDirection: "row",
    marginTop: 24,
  },
  cardContentRow4: {
    flexDirection: "row",
    marginTop: 16,
  },
  cardContentRow5: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  logoWithTextIcon: {
    fontSize: 21,
    color: "white",
  },
  useName: {
    fontSize: 22,
    fontWeight: "bold",
    fontFamily: "Avenir Next",
    color: "white",
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "white",
    marginHorizontal: 2,
  },
  cardLast4Number: {
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "Avenir Next",
    color: "white",
  },
  validThruText: {
    fontSize: 13,
    fontWeight: "600",
    fontFamily: "Avenir Next",
    color: "white",
  },
  cvvText: {
    fontSize: 13,
    fontWeight: "600",
    fontFamily: "Avenir Next",
    color: "white",
  },
  visaLogo: {
    fontSize: 24,
    color: "white",
  },
  fixView: {
    backgroundColor: "white",
    width: 100,
    height: 100,
    position: "absolute",
    right: 0,
    top: 8,
  },
  actionContainer: {
    marginTop: 24,
    paddingHorizontal: 24,
  },
  actionItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginVertical: 12,
    paddingEnd: 12,
  },
  actionItemIcon: {},
  descriptionContainer: {
    marginStart: 12,
    marginEnd: 12,
  },
  actionName: {
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Avenir Next",
    color: Colors.text0,
  },
  actionDescription: {
    fontSize: 13,
    fontWeight: "300",
    fontFamily: "Avenir Next",
    color: Colors.text1,
  },
  weeklyLimitChartContainer: {
    paddingHorizontal: 24,
  },
});

export default styles;
