/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Router from './navigation/Navigation'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset'
import gql from "graphql-tag";
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import createAppStore from './lib/store'

const { persistor, store } = createAppStore()


const client = new ApolloClient({
  link: new HttpLink({ uri: "https://api.graphcms.com/simple/v1/swapi" }),
  cache: new InMemoryCache(),
})
export default class App extends Component {

  constructor(props){
    super(props)
  }

  render() {
    return (
      <StoreProvider store={store}>
        <ApolloProvider client={client}>
          <PaperProvider>
            <Router/>
          </PaperProvider>
        </ApolloProvider>
      </StoreProvider>
      
    );
  }
}
