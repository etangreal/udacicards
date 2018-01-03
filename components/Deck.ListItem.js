import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { black, gray } from '../utils/colors'

export default function DeckListItem({ deck }) {
  return (
    <View key={deck.title} style={styles.listItem}>
      <TouchableOpacity
        style={styles.listItemButton}
        onPress={() => console.log('ListItem clicked')}>

        <Text style={styles.title}> {deck.title} </Text>
        <Text style={styles.cards}> {deck.questions.length} cards </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    flexDirection: 'row',
  },
  listItemButton: {
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
