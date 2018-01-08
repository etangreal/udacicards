import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  StyleSheet
} from 'react-native'
import { addCard } from '../actions'
import Button from './Button'
import { white, gray, black } from '../utils/colors'

class CardAdd extends PureComponent {
  state = {
    question: '',
    answer: '',
  }

  isFilled = () => {
    return (this.state.question !== '' && this.state.answer !== '')
  }

  submit = () => {
    if (!this.isFilled())
      return;

    this.props.addCard({
      title: this.props.navigation.state.params.deck.title,
      question: this.state.question,
      answer: this.state.answer
    })
    .then(() => {
      this.props.goBack()
      this.setState({
        question: '',
        answer: ''
      })
    })
  }

  render() {
    const enabled = { color : !this.isFilled() ? gray : black }

    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
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
        <Button onPress={this.submit} styleText={enabled}> Submit </Button>
      </KeyboardAvoidingView>
    )
  }
}

CardAdd.navigationOptions = (/* props */) => {
  return {
    title: 'Add Card'
  }
}

function mapDispatchToProps(dispatch, { navigation }) {
  return {
    addCard: (deckInfo) => dispatch(addCard(deckInfo)),
    goBack: () => navigation.goBack()
  }
}

export default connect(null, mapDispatchToProps)(CardAdd)

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
