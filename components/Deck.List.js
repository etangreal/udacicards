import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet
} from 'react-native'
import { connect } from 'react-redux'
import DeckListItem from './Deck.ListItem'
import { white } from '../utils/colors'

function DeckList({ decks, navigation, ...props }) {
  const deckList = decks.map(deck => {
    return Object.assign({}, deck, {key: deck.title})
  })

  const renderDeckListItem = ({ item: deck }) => {
    return DeckListItem({ deck, navigation })
  }

  return <View style={styles.container}>
    <FlatList
      data={deckList}
      renderItem={renderDeckListItem} />
  </View>
}

function mapStateToProps(state, props) {
  const decks = Object.values(state);

  return {
    decks
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white
  }
})

export default connect(mapStateToProps)(DeckList);
