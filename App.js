import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import {Constants} from 'expo'
import {createStackNavigator} from 'react-navigation'

import Movie from './screens/Movie'
import Search from './screens/Search'

const MainStack = createStackNavigator({
  Search: {screen: Search},
  Movie: {screen: Movie},
})

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MainStack />
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
