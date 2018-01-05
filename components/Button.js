import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { white, black } from '../utils/colors'

export default Button = ({ onPress, children, styleButton, styleText }) => {
  return (
    <TouchableOpacity
      style={[styles.button, styleButton]}
      onPress={onPress}>

      <Text style={[styles.buttonText, styleText]}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: white,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
  },
  buttonText: {
    color: black,
    fontSize: 22,
    textAlign: 'center'
  }
})
