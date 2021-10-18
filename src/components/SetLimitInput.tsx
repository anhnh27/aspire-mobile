import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import Colors from '../theme/colors';

type Props = {
  onChangeText?: any;
  value?: string;
  style?: any;
};

const SetLimitInput: React.FC<Props> = (props: Props) => {
  const {style, value, onChangeText} = props;
  return (
    <View style={[styles.container, style && style]}>
      <Text style={styles.balanceCurrencyIcon}>{'S$'}</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid={'transparent'}
        value={value}
        onChangeText={onChangeText}
        keyboardType={'decimal-pad'}
        returnKeyType={'done'}
      />
    </View>
  );
};

export default SetLimitInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.text1,
    paddingVertical: 8,
  },
  balanceCurrencyIcon: {
    backgroundColor: Colors.green,
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Avenir Next',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    overflow: 'hidden',
  },
  input: {
    flex: 1,
    marginStart: 8,
    fontSize: 16,
    fontWeight: '500',
    color: Colors.background,
    fontFamily: 'Avenir Next',
  },
});
