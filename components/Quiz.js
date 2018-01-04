import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import { white } from '../utils/colors'

export default function Quiz(props) {
  return (
    <View style={styles.container}>
      <Text> Quiz </Text>
    </View>
  )
}

Quiz.navigationOptions = (props) => {
  return {
    title: 'Quiz'
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white
  },
})
