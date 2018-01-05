export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'

export const addDeck = (title) => ({
  type: ADD_DECK,
  payload: title
})

export const addCard = (deckInfo) => ({
  type: ADD_CARD,
  payload: deckInfo
})
