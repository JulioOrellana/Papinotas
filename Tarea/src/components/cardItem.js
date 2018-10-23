import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Card, Title, Paragraph, Button, TouchableRipple } from 'react-native-paper'
import Icon  from 'react-native-vector-icons/FontAwesome'
import { Actions } from 'react-native-router-flux'


class CardItem extends Component{

    goToPerson = () => Actions.singlePersonScreen({ id: this.props.id })

    render(){

        return(
            <TouchableRipple onPress={this.goToPerson}>
                <Card style={{ marginHorizontal: 10, marginBottom: 10 }}>
                        <Card.Content style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <Title style={ styles.title }>{ this.props.title }</Title>
                            <Icon size={30} name="star" color="#f1c40f"/>
                        </Card.Content>
                </Card>
            </TouchableRipple>
            
        )
    }
}

export default CardItem

const styles = StyleSheet.create({
    title:{
        color: "#2980b9"
    }
})