import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { Title, Button, Searchbar  } from 'react-native-paper' 
import Header from '../components/header'
import CardItem from '../components/cardItem'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux'
import { ActionCreators } from '../actions'
import _ from 'lodash'

class Main extends Component{

    constructor(props){
        super(props)
    }

    componentWillReceiveProps(state,props){
        
        console.log(state)

        if(_.isEmpty(this.props.charList)){
            this.props.setCharList(state.data.allPersons)
        }
    }

    searchForCharacter(query){
        this.props.searchInCharList(query)
    }

    _keyExtractor = (item,index) => item.id

    _renderItem = ({item}) => (
        <CardItem title={item.name} id={item.id}/>
      );

    render(){
        return(
            <View style={{flex:1}}>
                <Title style={ styles.title }>Lista de Personajes de Star Wars</Title>
                
                <Searchbar
                style={{ marginHorizontal: 10, marginBottom: 20 }}
                    placeholder="Filtrar por nombre"
                    onChangeText={query => this.searchForCharacter(query) }
                />
                {
                    _.isEmpty(this.props.charList)
                    ? <View style={{ marginHorizontal: 20 }}><Text style={{color: "#2980b9"}}>Cargando...</Text></View>
                    : <FlatList
                            data={ _.isEmpty(this.props.filteredList)? this.props.charList : this.props.filteredList}
                            keyExtractor={this._keyExtractor}
                            renderItem={this._renderItem}
                            />
                }
                
            </View>
        )
    }
    
}

const mapStateToProps = (state) => {
    return{
        charList: state.charList,
        filteredList: state.filteredList
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch)
}

const gqlWrapper = graphql(
                            gql`
                                {    
                                    allPersons{
                                        id
                                        name
                                    }
                                }
                                `
                            )   

export default compose(
    gqlWrapper,
    connect(mapStateToProps, mapDispatchToProps)
    )(Main)

const styles = StyleSheet.create({
    title:{
        color: "#2980b9", 
        marginVertical: 30, 
        textAlign: 'center'
    }
})