import React, { PureComponent } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native'
import Button from './Button'
import { white, gray } from '../utils/colors'

export default class DeckAdd extends PureComponent {
  state = {
    title: ''
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.question}> What is the title of your new deck? </Text>
        <TextInput
          style={styles.title}
          onChangeText={(title) => this.setState({title})}
          value={this.state.title} />
        <Button> Submit </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  question: {
    fontSize: 22
  },
  title: {
    height: 40,
    width: 220,
    textAlign: 'center',
    margin: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: gray,
  }
})
