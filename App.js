import React, { Component } from 'react'
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
} from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import UdaciStatusBar from './components/UdaciStatusBar'
import { Nav } from './components/Nav'
import reducer from './reducers'
import { black } from './utils/colors'

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.app}>
          <UdaciStatusBar backgroundColor={black} barStyle="light-content" />
          <Nav />
        </View>
      </Provider>
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
