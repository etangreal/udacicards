import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { black, gray } from '../utils/colors'

export default function DeckListItem({ deck, navigation }) {
  const count = deck.questions.length
  const cards = count === 1 ? 'card' : 'cards'

  return (
    <View key={deck.title} style={styles.listItem}>
      <TouchableOpacity
        style={styles.listItemButton}
        onPress={() => navigation.navigate('DeckView', {deck})}>

        <Text style={styles.title}> {deck.title} </Text>
        <Text style={styles.cards}> {`${count} ${cards}`} </Text>
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
