import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
} from 'react-native';
import UdaciStatusBar from './components/UdaciStatusBar'
import { TabNav } from './components/Nav'
import { black } from './utils/colors'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.app}>
        <UdaciStatusBar backgroundColor={black} barStyle="light-content" />
        <TabNav />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
