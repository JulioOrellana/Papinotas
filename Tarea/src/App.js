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
      <ApolloProvider client={client}>
        <Router/>
      </ApolloProvider>
    );
  }
}
