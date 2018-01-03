import React from 'react';
import {
  View,
  Text
} from 'react-native'

export default function DeckListItem({ deck }) {
  return (
    <View key={deck.title}>
      <Text>{deck.title}</Text>
    </View>
  )
}
