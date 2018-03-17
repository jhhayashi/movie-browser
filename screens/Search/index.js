import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import {Input} from '../../components'
import {search} from '../../api'
import {RESULTS_PER_PAGE} from '../../constants'

import MovieRow from './MovieRow'

const renderItem = ({item}) => <MovieRow {...item} />
const getKey = ({id}) => id

export default class Search extends React.Component {
  state = {
    query: '',
    results: null,
    resultCount: null,
    pagesLoaded: 0,
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query.trim() !== this.state.query.trim() && this.state.query.length > 1) {
      this.submitSearch(1)
    }
  }

  submitSearch(page) {
    search(this.state.query.trim(), page)
      .then(result => {
        // don't show results if the result is from an old query
        if (this.state.query.trim() !== result.query.trim()) return

        if (page === 1) {
          this.setState(result)
        } else {
          this.setState(
            prevState => prevState.query.trim() === result.query.trim()
              ? {results: [...prevState.results, ...result.results]}
              : null
          )
        }
      })
      .catch(() => this.setState({results: null, resultCount: null}))
  }

  fetchMore = () => {
    if (this.state.resultCount <= RESULTS_PER_PAGE * this.state.pagesLoaded) return
    
    this.submitSearch(this.state.pagesLoaded + 1)
    this.setState(prevState => ({pagesLoaded: prevState.pagesLoaded + 1}))
  }

  handleUpdateQuery = query => {
    this.setState({query, pagesLoaded: 1})
  }

  render() {
    return (
      <View style={styles.container}>
        <Input
          style={styles.input}
          placeholder="Search..."
          value={this.state.query}
          onChangeText={this.handleUpdateQuery}
        />
        {this.state.results
          ? (
            <FlatList
              data={this.state.results}
              renderItem={renderItem}
              keyExtractor={getKey}
              onEndReached={this.fetchMore}
            />
          ) : <Text>No results</Text>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    margin: 5,
  },
});
