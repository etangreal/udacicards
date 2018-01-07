import React, { Component } from 'react'
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
} from 'react-native'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import UdaciStatusBar from './components/UdaciStatusBar'
import { Nav } from './components/Nav'
import reducers from './reducers'
import { getDecks } from './actions'
import { black } from './utils/colors'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

export default class App extends Component {

  componentDidMount() {
    store.dispatch(getDecks())
  }

  render() {
    return (
      <Provider store={store}>
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
  }
});
