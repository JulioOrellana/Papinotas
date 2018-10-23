import React, { Component } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Card, Title, Paragraph, Headline, Subheading, Divider, Text, List, Appbar } from 'react-native-paper'
import _ from 'lodash'
import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux'
import { ActionCreators } from '../actions'
import { Actions } from 'react-native-router-flux'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class SinglePerson extends Component{

    setAsFav(id){
        this.props.setFavoriteCharacters(id)
    }

    getRomanNumber(episode){
        switch(episode){
            case 1: return "I"
            case 2: return "II"
            case 3: return "III"
            case 4: return "IV"
            case 5: return "V"
            case 6: return "VI"
            case 7: return "VII"
            case 8: return "VIII"
            default: return episode
        }
    }

    render(){

        return(
            <View style={{ flex: 1}}>
                <Appbar style={{ backgroundColor: "#2980b9", justifyContent:'space-between'}}>
                    <Appbar.BackAction onPress={() => Actions.pop() } />
                    <Headline style={{ color: "#fff" }}>Tarjeta de Personaje</Headline>
                    <Appbar.Action onPress={() => this.setAsFav(this.props.data.Person.id)} color={ this.props.favChars.includes(this.props.id) ? "#f1c40f" : "#95a5a6"} icon="star"/>
                </Appbar>
                <ScrollView>
                    {
                        this.props.data.loading
                        ?   <Text style={ [styles.firstItem, styles.title] }>Cargando...</Text>
                        :   <View style={ styles.firstItem }>
                                <View style={ styles.box }>
                                    <Title style={styles.title}>Bio</Title>
                                    <List.Item title={this.props.data.Person.name} description={this.props.data.Person.species.map( s => s.name).join(", ")}/>
                                </View>
                                <Divider/>
                                <View style={ styles.box }>
                                    <Title style={styles.title}>Planeta de origen</Title>
                                    <List.Item title={this.props.data.Person.homeworld.name} description={`${this.props.data.Person.homeworld.population} habitantes `}/>
                                </View>
                                
                                <Divider/>
                                <View style={ styles.box }>
                                    <Title style={styles.title}>Naves</Title>
                                    { this.props.data.Person.starships.map( (s,i) => <List.Item key={s.name+ "-" + i} title={s.name} description={`${!_.isNull(s.costInCredits)? `$${s.costInCredits}` : "" } `}/>) }
                                </View>
                                
                                <Divider/>
                                <View style={ styles.box }>
                                    <Title style={styles.title}>Peliculas</Title>
                                    { this.props.data.Person.films.map( (f,i) => <List.Item key={f.title + "-" + f.id + i} title={f.title} description={`Episode ${this.getRomanNumber(f.episodeId)}`}/>) }
                                </View>
                            </View>
                    }
                </ScrollView>
            </View>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch)
}

const mapStateToProps = (state) => {
    return{
        favChars: state.favoriteCharacters,
    }
}

const gqlWrapper = graphql(
                            gql`
                                query Person($id: ID!){
                                Person(id: $id){
                                        id
                                        name
                                        species {
                                            name
                                        }
                                        starships {
                                            name
                                            costInCredits
                                        }
                                        films{
                                            title
                                            episodeId
                                        }
                                        homeworld {
                                            name
                                            population
                                        }
                                    }
                                }
                            `,
                            {
                                options: (props) => ({ variables: { id: props.id } })
                            })

export default 
    compose(
        gqlWrapper,
        connect( mapStateToProps, mapDispatchToProps)
    )(SinglePerson)

const styles = StyleSheet.create({
    subheading: {
        marginTop: 10
    },
    firstItem:{
        marginHorizontal: 20, 
        marginTop: 10
    },
    box:{
        marginVertical: 10
    },
    title:{
        color: "#2980b9"
    }
    
})