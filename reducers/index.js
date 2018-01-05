import {
  ADD_DECK,
  ADD_CARD
} from '../actions'

const mockDeckData = {
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.',
        correct: false
      }
    ],
    position: 0
  },
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces',
        correct: false
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event',
        correct: false
      }
    ],
    position: 0
  },
  Redux: {
    title: 'Redux',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.',
        correct: false
      }
    ],
    position: 0
  }
}

const omit = (omitKey, obj) => Object.keys(obj)
  .filter((key) => key !== omitKey)
  .reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {})

export default decks = (state = mockDeckData, { type, payload }) => {
  switch (type) {
    case ADD_DECK:
      if (payload === '' || state[payload])
        return state;

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
        return state;

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
