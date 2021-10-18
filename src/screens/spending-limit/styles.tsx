import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../theme/colors';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  logo: {
    fontSize: 24,
    color: Colors.green,
    alignSelf: 'flex-end',
    paddingHorizontal: 24,
  },
  screenTitle: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Avenir Next',
    marginTop: 24,
    paddingHorizontal: 24,
  },
  whiteBGView: {
    backgroundColor: 'white',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    position: 'absolute',
    left: 0,
    top: '20%',
    bottom: 0,
    width: '100%',
  },
  setWeelyLabelContainer: {
    paddingHorizontal: 24,
    paddingTop: 28,
  },
  setWeeklyLogo: {},
  setWeeklyText: {
    fontFamily: 'Avenir Next',
    fontSize: 14,
    color: Colors.text0,
    marginStart: 8,
  },
  note: {
    fontFamily: 'Avenir Next',
    marginTop: 12,
    paddingHorizontal: 24,
    fontSize: 11,
    color: Colors.text1,
  },
  buttonContainer: {
    marginTop: 12,
    width: (width - 64) / 3,
    borderRadius: 8,
    backgroundColor: Colors.green1,
    paddingVertical: 12,
  },
  amountButtonText: {
    textAlign: 'center',
    fontFamily: 'Avenir Next',
    fontSize: 12,
    color: Colors.green,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  limitInputContainer: {
    marginHorizontal: 24,
  },
  buttonSave: {
    position: 'absolute',
  },
  buttonSaveEnabled: {
    backgroundColor: Colors.background,
  },
});

export default styles;
