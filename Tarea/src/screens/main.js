import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Title } from 'react-native-paper' 
import Header from '../components/header'
import CardItem from '../components/cardItem'

import * as Api from '../lib/Api'
class Main extends Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){

        const a  = Api.getPeople();
    }

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