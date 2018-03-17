import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import PropTypes from 'prop-types'

import {getMovie} from '../../api'

import Movie from './Movie.js'

export default class MovieWrapper extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  }

  state = {
    movie: null,
  }

  componentDidMount() {
    getMovie(this.props.id).then(movie=> this.setState({movie}))
  }

  render() {
    return this.state.movie ? <Movie {...this.state.movie} /> : <Text>Loading...</Text>
  }
}
