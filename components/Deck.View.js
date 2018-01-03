import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import { white, gray, black } from '../utils/colors'

export default function DeckView(props) {
  const deck = props.navigation.state.params.deck;

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.title}> {deck.title} </Text>
        <Text style={styles.cards}> {deck.questions.length} cards </Text>
      </View>
      <View style={styles.buttons}>
        <Text> Add Card </Text>
        <Text> Start Quiz </Text>
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
  buttons: {
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
  }
})

