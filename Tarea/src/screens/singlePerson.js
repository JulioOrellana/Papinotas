import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Card, Title, Paragraph, Headline, Subheading, Divider, Text } from 'react-native-paper'
import _ from 'lodash'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class SinglePerson extends Component{

    render(){

        console.log(this.props)

        return(
            <View style={{ flex: 1, alignItems: 'center'}}>
                {
                    this.props.data.loading
                    ?   <Text style={{ marginHorizontal: 20 }}>Cargando...</Text>
                    :   <Card styles={{ flex:1, margin: 20}}>
                            <Card.Content>
                                <Headline>Tarjeta de Personaje</Headline>
                                <Divider/>
                                <Subheading style={styles.subheading}>{ this.props.data.Person.name }</Subheading>
                                <Subheading style={styles.subheading}>Especie: { this.props.data.Person.species.map( s => s.name).join(", ") }</Subheading>
                                <Subheading style={styles.subheading}>Casa: { this.props.data.Person.homeworld.name }</Subheading>
                                <Divider/>
                                <Subheading style={styles.subheading}>Naves: { this.props.data.Person.starships.map( s => s.name).join(", ") }</Subheading>
                                <Divider/>
                                <Subheading style={styles.subheading}>Peliculas: { this.props.data.Person.films.map( f => f.title).join(", ") }</Subheading>
                            </Card.Content>
                        </Card>
                }
            </View>
        )
    }
}

export default graphql(
    gql`
        query Person($id: ID!){
           Person(id: $id){
                name
                species {
                    name
                }
                starships {
                    name
                }
                films{
                    title
                }
                homeworld {
                    name
                }
            }
        }
    `,
    {
        options: (props) => ({ variables: { id: props.id } })
    })(SinglePerson)

const styles = StyleSheet.create({
    subheading: {
        marginTop: 10
    }
})