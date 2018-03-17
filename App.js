import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import {Constants} from 'expo'

import Movie from './screens/Movie'
import Search from './screens/Search'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Movie id="tt0816711" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});
