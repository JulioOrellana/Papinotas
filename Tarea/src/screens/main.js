import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { Title } from 'react-native-paper' 
import Header from '../components/header'
import CardItem from '../components/cardItem'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux'
import { ActionCreators } from '../actions'
import _ from 'lodash'

const QUERY = gql`
{
    allPersons {
        id
        name
    }
}
`;

class Main extends Component{

    constructor(props){
        super(props)
    }

    async componentDidMount(){
        // const data = await this.props.client.query({ query: QUERY });
        // console.log("Data: ",data)

        console.log(this.props)
    }

    _getUserInfo = async () => {
        
    };

    _keyExtractor = (item,index) => item.id

    _renderItem = ({item}) => (
        <CardItem title={item.name} id={item.id}/>
      );

    shouldComponentUpdate(){

        console.log(this.props)

        if(this.props.data.loading)
            return true
        else
            return false
    }

    render(){
        return(
            <View style={{flex:1}}>
                <Title style={ styles.title }>Lista de Personajes de Star Wars</Title>
                {
                    this.props.data.loading
                    ? <View style={{ marginHorizontal: 20 }}><Text style={{color: "#2980b9"}}>Cargando...</Text></View>
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

const mapStateToProps = (state) => {
    return{

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

export default compose(gqlWrapper,
    connect(mapStateToProps, mapDispatchToProps)
    )(Main)

const styles = StyleSheet.create({
    title:{
        color: "#2980b9", 
        marginVertical: 30, 
        textAlign: 'center'
    }
})