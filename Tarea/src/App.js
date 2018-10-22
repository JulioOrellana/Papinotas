/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Router from './navigation/Navigation'
import { ApolloClient} from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { ApolloLink } from 'apollo-link'
import { ApolloProvider } from 'react-apollo'
import { withClientState } from 'apollo-link-state'
import gql from "graphql-tag";

const cache = new InMemoryCache()
const stateLink = withClientState({
  cache,
  defaults: {
    testing: {
      __typename: 'testing',
      name: '',
      age: 0
    }
  }
})
const client = new ApolloClient({
  cache,
  link: ApolloLink.from([
    stateLink,
    new HttpLink({ uri: 'https://graphiql.graphcms.com/simple/v1/swapi' })
  ])
})



export default class App extends Component {

  constructor(props){
    super(props)

    client.onResetStore(stateLink.writeDefaults)
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <Router/>
      </ApolloProvider>
    );
  }
}
