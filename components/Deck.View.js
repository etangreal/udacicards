import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { white, gray, black } from '../utils/colors'

const Button = ({ onPress, children, style }) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}>

      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  )
}

export default function DeckView(props) {
  const deck = props.navigation.state.params.deck;

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.title}> {deck.title} </Text>
        <Text style={styles.cards}> {deck.questions.length} cards </Text>
      </View>
      <View style={styles.buttons}>
        <Button> Add Card </Button>
        <Button> Start Quiz </Button>
      </View>
    </View>
  )
}

DeckView.navigationOptions = (props) => {
  return {
    title: props.navigation.state.params.deck.title
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white
  },
  info: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: black,
    fontSize: 25
  },
  cards: {
    color: gray,
    fontSize: 20
  },
  buttons: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: white,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
  },
  buttonText: {
    color: black,
    fontSize: 22,
    textAlign: 'center'
  },
})

