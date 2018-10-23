import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Card, Title, Paragraph, Button, TouchableRipple } from 'react-native-paper'
import Icon  from 'react-native-vector-icons/FontAwesome'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'


class CardItem extends Component{

    goToPerson = () => Actions.singlePersonScreen({ id: this.props.id })

    render(){

        return(
            <TouchableRipple onPress={this.goToPerson}>
                <Card style={{ marginHorizontal: 10, marginBottom: 10 }}>
                        <Card.Content style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <Title style={ styles.title }>{ this.props.title }</Title>
                            <Icon size={30} name="star" color={ this.props.favChars.includes(this.props.id) ? "#f1c40f" : "#95a5a6"} />
                        </Card.Content>
                </Card>
            </TouchableRipple>
            
        )
    }
}

const mapStateToProps = (state) => {
    return{
        favChars: state.favoriteCharacters,
    }
}

export default connect(mapStateToProps)(CardItem)

const styles = StyleSheet.create({
    title:{
        color: "#2980b9"
    }
})