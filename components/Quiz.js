import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  Animated,
  StyleSheet
} from 'react-native'
import Button from './Button'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'
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
  onInCorrect,
  animatedStyle,
}) => {
  return (
    <View style={styles.questionContainer}>
      <Animated.View style={[styles.qna, animatedStyle]}>
        <Text style={styles.qnaText}> {showAnswer ? answer : question} </Text>
        <Button onPress={onFlip} styleText={styles.qnaButtonText}> {showAnswer ? 'Show Question' : 'Show Answer'} </Button>
      </Animated.View>
      <View style={styles.buttons}>
        <Button onPress={onCorrect}> Correct </Button>
        <Button onPress={onInCorrect}> Incorrect </Button>
      </View>
    </View>
  )
}

const Score = ({ correct = 0, total = 0, onRestart, onBack }) => (
  <View style={styles.container}>
    <View style={styles.results}>
      <Text style={{fontSize: 25}}> Score: {correct} / {total} </Text>
    </View>
    <View style={styles.buttons}>
        <Button onPress={onRestart}> Restart Quiz </Button>
        <Button onPress={onBack}> Back to Deck </Button>
    </View>
  </View>
)

class Quiz extends PureComponent {
  state = {
    isFinish: false,
    showAnswer: false,
    position: 0,
    correct: 0
  }

  componentWillMount() {
    this.animatedValue = new Animated.Value(0)
    this.animatedInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 90],
      outputRange: ['0deg', '90deg']
    })
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

  finish = () => {
    clearLocalNotification()
      .then(setLocalNotification)
  }

  onCorrect = () => this.increment(1)

  onInCorrect = () => this.increment(0)

  onRestart = () => {
    this.setState({
      isFinish: false,
      showAnswer: false,
      position: 0,
      correct: 0
    })
  }

  onFlip = () => {
    Animated
      .timing(this.animatedValue, {
        toValue: 90,
        duration: 200
      })
      .start(() => this.setState({
        showAnswer: !this.state.showAnswer
      }, Animated
      .timing(this.animatedValue, {
        toValue: 0,
        duration: 200
      }).start()))
  }

  render() {
    const QnA = this.props.questions[this.state.position];
    const animatedStyle = {
      transform: [
        { rotateY: this.animatedInterpolate }
      ]
    }

    if (this.state.isFinish)
      return <Score
        correct={this.state.correct}
        total={this.props.count}
        onRestart={this.onRestart}
        onBack={this.props.goBack} />

    return (
      <View style={styles.container}>
        <QuizNumber
          position={this.state.position + 1}
          count={this.props.count} />
        <Question
          question={QnA.question}
          answer={QnA.answer}
          showAnswer={this.state.showAnswer}
          onFlip={this.onFlip}
          onCorrect={this.onCorrect}
          onInCorrect={this.onInCorrect}
          animatedStyle={animatedStyle} />
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

function mapDispatchToProps(dispatch, { navigation }) {
  return {
    goBack: () => navigation.goBack()
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);

const styles = StyleSheet.create({
  container: {
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
  qnaText: {
    color: black,
    fontSize: 25,
    textAlign: 'center',
  },
  qnaButtonText: {
    color: gray,
    fontSize: 20,
    textAlign: 'center',
  },
  buttons: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  results: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  }
})
