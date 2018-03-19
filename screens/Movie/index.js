import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import PropTypes from 'prop-types'

import {getMovie} from '../../api'

import Movie from './Movie.js'

export default class MovieWrapper extends React.Component {
  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
      state: PropTypes.shape({
        params: PropTypes.shape({
          id: PropTypes.string,
          title: PropTypes.string,
        })
      }),
    }),
  }

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title,
  })

  state = {
    movie: null,
    id: this.props.navigation.getParam('id', null),
  }

  componentDidMount() {
    getMovie(this.state.id).then(movie=> this.setState({movie}))
  }

  render() {
    if (!this.state.id) return <Text>There was an error</Text>
    return this.state.movie
      ? <Movie {...this.state.movie} />
      : <Text>Loading...</Text>
  }
}
