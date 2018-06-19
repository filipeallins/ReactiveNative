import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  ScrollView,
  Text,
  View
} from 'react-native';

import Repo from './components/Repo';

export default class App extends Component {

  state = {
    repos: [
      {
        id: 1,
        thumbnail: 'https://www.freeiconspng.com/uploads/github-icon-29.png',
        title: 'rocketseat.com.br',
        author: 'rocketseat',
      },
      {
        id: 2,
        thumbnail: 'https://www.freeiconspng.com/uploads/github-icon-29.png',
        title: 'rocketnative.com.br',
        author: 'filipelins',
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Minicurso React Native</Text>
        </View>

        <ScrollView contentContainerStyle={styles.repoList}>
          { this.state.repos.map(repo => <Repo key={repo.id} data={repo} />) }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },

  header: {
    height: (Platform.OS === 'ios') ? 70 : 50,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  repoList: {
    padding: 20,
  },
});
