import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Colors from '../theme/colors';

type ButtonProps = {
  onPress?: any;
  style?: any;
  title: string;
  disabled?: boolean;
  loading?: boolean;
};

const Button = (props: ButtonProps) => {
  const {onPress, style, title, disabled, loading} = props;
  return (
    <TouchableOpacity
      style={[styles.buttonSave, style && style]}
      disabled={disabled}
      onPress={onPress}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text style={styles.buttonSaveText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonSave: {
    backgroundColor: Colors.gray,
    width: 300,
    height: 56,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonSaveText: {
    fontFamily: 'Avenir Next',
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
  },
});
