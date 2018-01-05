import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import Button from './Button'
import { white, gray, black } from '../utils/colors'

export default function DeckView({ navigation }) {
  const deck = navigation.state.params.deck;
  const count = deck.questions.length;
  const enabled = { color: !count ? gray : black }

  const addCard = () => navigation.navigate('CardAdd', {deck})
  const startQuiz = () => count && navigation.navigate('Quiz', {deck})

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.title}> {deck.title} </Text>
        <Text style={styles.cards}> {count} cards </Text>
      </View>
      <View style={styles.buttons}>
        <Button onPress={addCard}> Add Card </Button>
        <Button onPress={startQuiz} styleText={enabled}> Start Quiz </Button>
      </View>
    </View>
  )
}

DeckView.navigationOptions = ({ navigation }) => {
  return {
    title: navigation.state.params.deck.title
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
})
