import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Title } from 'react-native-paper' 
import Header from '../components/header'
import CardItem from '../components/cardItem'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class Main extends Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){

        
    }

    render(){

        console.log(this.props.data)

        return(
            <View>
                <Title style={{ marginVertical: 30, textAlign: 'center' }}>Lista de Personajes de Star Wars</Title>
                <CardItem title="Hola" content="todo" mode="contained"/>
            </View>
        )
    }
    
}

export default graphql(
    gql`
       {    allPersons{
                name
            }
        }
    `
)(Main)