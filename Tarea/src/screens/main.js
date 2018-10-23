import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { Title } from 'react-native-paper' 
import Header from '../components/header'
import CardItem from '../components/cardItem'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class Main extends Component{

    constructor(props){
        super(props)
    }

    _keyExtractor = (item, index) => item.id;

    _renderItem = ({item}) => (
        <CardItem title={item.name} mode="contained"/>
      );

    render(){

        return(
            <View>
                <Title style={{ marginVertical: 30, textAlign: 'center' }}>Lista de Personajes de Star Wars</Title>
                {
                    this.props.data.loading
                    ? <View><Text>Cargando...</Text></View>
                    : <FlatList
                            data={this.props.data.allPersons}
                            keyExtractor={this._keyExtractor}
                            renderItem={this._renderItem}
                            />
                }
                
            </View>
        )
    }
    
}

export default graphql(
    gql`
       {    
            allPersons{
                id
                name
            }
        }
    `
)(Main)