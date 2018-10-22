import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Title } from 'react-native-paper' 
import Header from '../components/header'
import CardItem from '../components/cardItem'

class Main extends Component{
    render(){
        return(
            <View>
                <Title style={{ marginVertical: 30, textAlign: 'center' }}>Lista de Personajes de Star Wars</Title>
                <CardItem title="Hola" content="todo" mode="contained"/>
            </View>
        )
    }
    
}

export default Main