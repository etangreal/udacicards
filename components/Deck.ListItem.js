import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import { black, gray } from '../utils/colors'

export default function DeckListItem({ deck }) {
  return (
    <View key={deck.title}>
      <Text style={styles.title}> {deck.title} </Text>
      <Text style={styles.cards}> {deck.questions.length} cards </Text>
      <Text></Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    color: black,
    fontSize: 25
  },
  cards: {
    color: gray,
    fontSize: 16
  }
})
