
import React, { Component } from 'react'
import ApolloClient from "apollo-boost";
import { HttpLink } from 'react-apollo'
import gql from "graphql-tag";
import _ from 'lodash'

const client = new ApolloClient({
    uri:'https://graphiql.graphcms.com/relay/v1/swapi'
  });

export const getPeople = () => client.query({
                                        query: gql`
                                            query {
                                                allPersons {
                                                    name
                                                }
                                            }
                                        `
                                        })
                                        .then(result => console.table(result));