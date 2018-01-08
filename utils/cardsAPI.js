import { AsyncStorage } from 'react-native'
import { omit } from '../utils/helpers'
// import mockData from './mockData'

export const UDACICARDS_STORAGE_KEY = 'UdaciCards:decks'

// ------------------------------------------------------------------------------------------------
// ASYNC-STORAGE
// ------------------------------------------------------------------------------------------------

const retrieve = () =>
  AsyncStorage
    .getItem(UDACICARDS_STORAGE_KEY)
    .then(JSON.parse)
    .then(state => state ? state : {})

const save = (state) =>
  AsyncStorage
    .setItem(UDACICARDS_STORAGE_KEY, JSON.stringify(state))

// ------------------------------------------------------------------------------------------------
// API
// ------------------------------------------------------------------------------------------------

export const getDecks = () =>
  retrieve()

export const addDeck = (title) =>
  retrieve()
    .then((state) => {
      if (!title || title === '' || state[title])
        return Promise.resolve()

      return save({
        ...state,
        [title]: {
          title,
          questions: [],
        }
      })
    })

export const addCard = ({ title, question, answer }) =>
  retrieve()
    .then(state => {
      if (!state[title])
        return Promise.resolve()

      return save({
        ...omit(title, state),
        [title]: Object.assign({}, state[title], {
          questions: [...state[title].questions, {
            question: question,
            answer: answer,
          }]
        })
      })
    })

// ------------------------------------------------------------------------------------------------
// END
// ------------------------------------------------------------------------------------------------
