import {
  GET_DECKS,
  GET_DECK,
  ADD_DECK,
  ADD_CARD
} from '../actions'

const omit = (omitKey, obj) => Object.keys(obj)
  .filter((key) => key !== omitKey)
  .reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {})

export default decks = (state = {}, { type, payload }) => {
  switch (type) {

    case GET_DECKS:
      return payload

    case GET_DECK:
      return state[payload]

    case ADD_DECK:
      if (payload === '' || state[payload])
        return state

      return {
        ...state,
        [payload]: {
          title: payload,
          questions: [],
          position: 0,
        }
      }

    case ADD_CARD:
      if (!state[payload.title])
        return state

      return {
        ...omit(payload.title, state),
        [payload.title]: Object.assign({}, state[payload.title], {
          questions: [...state[payload.title].questions, {
            question: payload.question,
            answer: payload.answer,
            correct: false
          }]
        })
      }

    default:
      return state
  }
}
