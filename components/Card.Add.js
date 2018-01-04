import React, { PureComponent } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native'
import Button from './Button'
import { white, gray } from '../utils/colors'

export default class CardAdd extends PureComponent {
  state = {
    question: ''
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.qna}
          placeholder="Question ... "
          onChangeText={(question) => this.setState({question})}
          value={this.state.question} />
        <TextInput
          style={styles.qna}
          placeholder="Answer ... "
          onChangeText={(answer) => this.setState({answer})}
          value={this.state.answer} />
        <Button> Submit </Button>
      </View>
    )
  }
}

CardAdd.navigationOptions = (/* props */) => {
  return {
    title: 'Add Card'
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qna: {
    height: 40,
    width: 320,
    textAlign: 'center',
    margin: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: gray,
  }
})
