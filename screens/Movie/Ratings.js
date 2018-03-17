import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import PropTypes from 'prop-types'

import {getNumberFromRatingValue} from '../../utils'

const getColorForRating = rating => {
  if (rating > 70) return 'green'
  if (rating > 50) return 'yellow'
  return 'red'
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  ratingBar: {
    flexDirection: 'row',
    height: 20,
    marginVertical: 10,
  },
})

const Rating = props => {
  const rating = getNumberFromRatingValue(props.Source, props.Value)
  const backgroundColor = getColorForRating(rating)
  return (
    <View>
      <Text>{props.Source} ({props.Value}):</Text>
      {!isNaN(rating) && (
        <View style={styles.ratingBar}>
          <View style={{flex: rating, backgroundColor}} />
          <View style={{flex: 100 - rating}} />
        </View>
      )}
    </View>
  )
}

Rating.propTypes = {
  Source: PropTypes.string,
  Value: PropTypes.string,
}

const Ratings = props => (
  <View style={styles.container}>
    {props.ratings.map((rating, key) => <Rating key={key} {...rating} />)}
  </View>
)

Ratings.propTypes = {
  ratings: PropTypes.arrayOf(
    PropTypes.shape({
      Source: PropTypes.string,
      Value: PropTypes.string,
    })
  ),
}

export default Ratings
