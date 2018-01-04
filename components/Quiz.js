import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import Button from './Button'
import { white, gray, black } from '../utils/colors'

const QuizNumber = ({ position = 0, count = 0 }) => {
  return (
    <View>
      <Text style={styles.pageNumber}> {position} / {count} </Text>
    </View>
  )
}

const Question = ({ questions }) => {
  return (
    <View style={styles.questionContainer}>
      <View style={styles.qna}>
        <Text style={styles.question}> Question </Text>
        <Button style={styles.answer}> Answer </Button>
      </View>
      <View style={styles.buttons}>
        <Button> Correct </Button>
        <Button> Incorrect </Button>
      </View>
    </View>
  )
}

export default function Quiz({ navigation }) {
  const deck = navigation.state.params.deck;

  return (
    <View style={styles.quizContainer}>
      <QuizNumber />
      <Question />
    </View>
  )
}

Quiz.navigationOptions = (props) => {
  return {
    title: 'Quiz'
  }
}

const styles = StyleSheet.create({
  quizContainer: {
    flex: 1,
    backgroundColor: white
  },
  pageNumber: {
    margin: 5,
    fontSize: 22
  },
  questionContainer: {
    flex: 1,
  },
  qna: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  question: {
    color: black,
    fontSize: 25
  },
  answer: {
    color: gray,
    fontSize: 20
  },
  buttons: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
