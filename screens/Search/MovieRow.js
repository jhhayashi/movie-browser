import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  title: {
    fontWeight: 'bold',
  },
  image: {
    flex: 0,
    width: 50,
    height: 50,
    marginRight: 20,
  },
  movieMetadata: {
    flex: 1,
  },
})

const Row = props => (
  <TouchableOpacity onPress={() => props.onSelect(props.id, props.Title)} style={styles.container}>
    <Image style={styles.image} source={{uri: props.Poster}} />
    <View style={styles.movieMetadata}>
      <Text style={styles.title}>{props.Title}</Text>
      <Text>{props.Year} ({props.Type})</Text>
    </View>
  </TouchableOpacity>
)

Row.propTypes = {
  id: PropTypes.string,
  Title: PropTypes.string,
  Year: PropTypes.string,
  Type: PropTypes.string,
  Poster: PropTypes.string,
}

export default Row
