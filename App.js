import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import {Constants} from 'expo'

import Search from './screens/Search'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Search />
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
