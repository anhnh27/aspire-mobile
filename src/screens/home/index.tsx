import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';

type HomeScreenProps = {};

const HomeScreen: React.FC = (props: HomeScreenProps) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});
