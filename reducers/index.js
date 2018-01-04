
const mockDeckData = {
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.',
        isCorrect: false
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
        isCorrect: false
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event',
        isCorrect: false
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
        isCorrect: false
      }
    ],
    position: 0
  }
}

export default decks = (state = mockDeckData, { type, payload }) => {
  return state
}
