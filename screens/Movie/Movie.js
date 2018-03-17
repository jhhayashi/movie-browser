import React from 'react'
import {Dimensions, Image, ScrollView, StyleSheet, Text, View} from 'react-native'
import PropTypes from 'prop-types'

import Ratings from './Ratings'

const IMG_MARGIN = 10

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: IMG_MARGIN,
    alignItems: 'stretch',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 10,
  },
  italic: {
    fontStyle: 'italic',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  year: {
    // TODO: test on long title
    marginLeft: 10,
    // move a little to get even with title
    paddingBottom: 3,
  },
})

// shorthand for creating a <View style={styles.row} />
const Row = props => <View style={styles.row}>{props.children}</View>

const Movie = props => {
  const {height, width} = Dimensions.get('window')
  const imgWidth = Math.min(height, width) - (2 * IMG_MARGIN)

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Image style={{width: imgWidth, height: imgWidth}} source={{uri: props.Poster}} />
      <Row>
        <Text style={styles.title}>{props.Title}</Text>
        <Text style={styles.year}>({props.Year})</Text>
      </Row>
      <Row>
        <Text>{props.Rated}, {props.Runtime}</Text>
      </Row>
      <Row>
        <Text style={styles.italic}>{props.Plot}</Text>
      </Row>
      <Ratings ratings={props.Ratings} />
    </ScrollView>
  )
}

Movie.propTypes = {
  Title: PropTypes.string,
  Year: PropTypes.string,
  Rated: PropTypes.string,
  Released: PropTypes.string,
  Runtime: PropTypes.string,
  Genre: PropTypes.string,
  Director: PropTypes.string,
  Writer: PropTypes.string,
  Actors: PropTypes.string,
  Plot: PropTypes.string,
  Language: PropTypes.string,
  Country: PropTypes.string,
  Awards: PropTypes.string,
  Poster: PropTypes.string,
  Ratings: PropTypes.arrayOf(
    PropTypes.shape({
      Source: PropTypes.string,
      Value: PropTypes.string,
    })
  ),
  Metascore: PropTypes.string,
  Type: PropTypes.string,
  BoxOffice: PropTypes.string,
  Production: PropTypes.string,
  Website: PropTypes.string,
}

export default Movie
