import React from 'react';
import {
  View,
  Text,
} from 'react-native'
import {
  TabNavigator,
  StackNavigator,
} from 'react-navigation'
import DeckList from './Deck.List'
import DeckView from './Deck.View'
import CardAdd from './Card.Add'
import DeckAdd from './Deck.Add'
import Quiz from './Quiz'
import { white, gray, black } from '../utils/colors'

const TabNav = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'DECKS'
    }
  },
  DeckAdd: {
    screen: DeckAdd,
    navigationOptions: {
      tabBarLabel: 'NEW DECK'
    }
  }
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    inactiveTintColor: gray,
    activeTintColor: black,
    style: {
      height: 56,
      backgroundColor: white,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

export const Nav = StackNavigator({
  Home: {
    screen: TabNav,
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: black
      }
    }
  },
  CardAdd: {
    screen: CardAdd,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: black
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: black
      }
    }
  },
})
