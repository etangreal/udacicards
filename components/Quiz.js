import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
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

const Question = ({
  question,
  answer,
  showAnswer,
  onFlip,
  onCorrect,
  onInCorrect
}) => {
  return (
    <View style={styles.questionContainer}>
      <View style={styles.qna}>
        <Text style={styles.question}> {question} </Text>
        <Button onPress={onFlip} style={styles.answer}> {showAnswer ? answer : 'Answer'} </Button>
      </View>
      <View style={styles.buttons}>
        <Button onPress={onCorrect}> Correct </Button>
        <Button onPress={onInCorrect}> Incorrect </Button>
      </View>
    </View>
  )
}

class Quiz extends PureComponent {
  state = {
    isFinish: false,
    showAnswer: false,
    position: 0,
    correct: 0
  }

  increment = (correct) => {
    if (this.state.position < this.props.count - 1)
      this.setState({
        position: this.state.position + 1,
        correct: this.state.correct + correct,
        showAnswer: false
      })
    else if (!this.state.isFinish && this.state.position === this.props.count - 1)
      this.setState({
        isFinish: true,
        correct: this.state.correct + correct,
      }, this.finish)
  }

  onCorrect = () => this.increment(1)

  onInCorrect = () => this.increment(0)

  finish = () => {
    console.log('End of Quiz: ', this.state.correct, this.props.count)
  }

  onFlip = () => {
    this.setState({
      showAnswer: !this.state.showAnswer
    })
  }

  render() {
    const QnA = this.props.questions[this.state.position];

    return (
      <View style={styles.quizContainer}>
        <QuizNumber
          position={this.state.position + 1}
          count={this.props.count} />
        <Question
          question={QnA.question}
          answer={QnA.answer}
          showAnswer={this.state.showAnswer}
          onFlip={this.onFlip}
          onCorrect={this.onCorrect}
          onInCorrect={this.onInCorrect} />
      </View>
    )
  }
}

Quiz.navigationOptions = (/* props */) => {
  return {
    title: 'Quiz'
  }
}

function mapStateToProps(state, { navigation }) {
  const title = navigation.state.params.deck.title;
  const deck = state[title];

  return {
    questions: deck.questions,
    count: deck.questions.length,
    position: deck.position,
  }
}

export default connect(mapStateToProps)(Quiz);

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
    paddingLeft: 10,
    paddingRight: 10,
  },
  question: {
    color: black,
    fontSize: 25,
    textAlign: 'center',
  },
  answer: {
    color: gray,
    fontSize: 20,
    textAlign: 'center',
  },
  buttons: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
