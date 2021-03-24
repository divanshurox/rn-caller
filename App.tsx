import React from 'react';
import {StyleSheet, Text, View, PermissionsAndroid} from 'react-native';
import RtcEngine from 'react-native-agora';

interface Props {}

const App = ({}: Props) => {
  return (
    <View style={styles.container}>
      <Text>Hey</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
