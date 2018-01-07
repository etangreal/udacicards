import mockData from '../utils/mockData'

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

export const getDecks = () => dispatch => dispatch({
  type: GET_DECKS,
  payload: mockData
})

export const getDeck = title => dispatch => dispatch({
  type: GET_DECK,
  payload: title
})

export const addDeck = title => dispatch => dispatch({
  type: ADD_DECK,
  payload: title
})

export const addCard = cardInfo => dispatch => dispatch({
  type: ADD_CARD,
  payload: cardInfo
})

// ------------------------------------------------------------------------------------------------
// END
// ------------------------------------------------------------------------------------------------
