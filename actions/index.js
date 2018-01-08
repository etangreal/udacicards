import * as cardsAPI from '../utils/cardsAPI'

// ------------------------------------------------------------------------------------------------
// DECLARATIONS
// ------------------------------------------------------------------------------------------------

export const GET_DECKS = 'GET_DECKS'
export const GET_DECK = 'GET_DECK'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'

// ------------------------------------------------------------------------------------------------
// DECKS / CARDS
// ------------------------------------------------------------------------------------------------

export const getDecks = () => dispatch =>
  cardsAPI
    .getDecks()
    .then(decks => dispatch({
      type: GET_DECKS,
      payload: decks
    }))

export const getDeck = title => ({
  type: GET_DECK,
  payload: title
})

export const addDeck = title => dispatch =>
  cardsAPI
    .addDeck(title)
    .then(() => dispatch({
      type: ADD_DECK,
      payload: title
    }))

export const addCard = cardInfo => dispatch =>
  cardsAPI
    .addCard(cardInfo)
    .then(() => dispatch({
      type: ADD_CARD,
      payload: cardInfo
    }))

// ------------------------------------------------------------------------------------------------
// END
// ------------------------------------------------------------------------------------------------
