import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  StyleSheet
} from 'react-native'
import { addDeck } from '../actions'
import Button from './Button'
import { white, gray } from '../utils/colors'

class DeckAdd extends PureComponent {
  state = {
    title: ''
  }

  submit = () => {
    if (this.state.title !== '')
      this.props.addDeck(this.state.title)
        .then(() => {
          this.props.navDeck(this.state.title)
          this.setState({title: ''})
        })
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Text style={styles.question}> What is the title of your new deck? </Text>
        <TextInput
          style={styles.title}
          onChangeText={(title) => this.setState({title})}
          value={this.state.title} />
        <Button onPress={this.submit}> Create Deck </Button>
      </KeyboardAvoidingView>
    )
  }
}

function mapDispatchToProps(dispatch, { navigation }) {
  return {
    addDeck: (title) => dispatch(addDeck(title)),
    navDeck: (title) => {
      navigation.goBack()
      navigation.navigate('DeckView', {deck: {title}})
    }
  }
}

export default connect(null, mapDispatchToProps)(DeckAdd)

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
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: gray,
  }
})
