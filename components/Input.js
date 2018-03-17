import React from 'react'
import {StyleSheet, TextInput} from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 3,
    padding: 5,
  },
})

const Input = props => <TextInput {...props} style={[styles.input, props.style]} />

Input.propTypes = {
  style: PropTypes.number,
}

export default Input
