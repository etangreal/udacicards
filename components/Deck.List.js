import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import { connect } from 'react-redux'
import DeckListItem from './Deck.ListItem'

function DeckList({ decks }) {
  const list = decks.map(deck => {
    return DeckListItem({ deck })
  })

  return <View style={styles.container}>
    {list}
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
    flex: 1
  }
})

export default connect(mapStateToProps)(DeckList);
