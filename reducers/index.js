import {
  ADD_DECK
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

    default:
      return state
  }
}
