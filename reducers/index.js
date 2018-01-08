import {
  GET_DECKS,
  GET_DECK,
  ADD_DECK,
  ADD_CARD
} from '../actions'
import { omit } from '../utils/helpers'

export const addDeck = (state, title) => ({
  ...state,
  [title]: {
    title,
    questions: [],
  }
})

export const addCard = (state, { title, question, answer }) => ({
  ...omit(title, state),
  [title]: Object.assign({}, state[title], {
    questions: [...state[title].questions, {
      question: question,
      answer: answer,
    }]
  })
})

export default decks = (state = {}, { type, payload }) => {
  switch (type) {

    case GET_DECKS:
      return payload

    case GET_DECK:
      return state[payload]

    case ADD_DECK:
      if (!payload || payload === '' || state[payload])
        return state

      return addDeck(state, payload)

    case ADD_CARD:
      if (!state[payload.title])
        return state

      return addCard(state, payload)

    default:
      return state
  }
}
