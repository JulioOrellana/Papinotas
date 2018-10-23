import React, { Component } from 'react'
import { Card, Title, Paragraph, Button } from 'react-native-paper'
import { Actions } from 'react-native-router-flux'


class CardItem extends Component{

    goToPerson = () => Actions.singlePersonScreen({ id: this.props.id })

    render(){

        return(
            <Card style={{ marginHorizontal: 10, marginBottom: 10 }}>
                <Card.Content>
                    <Title>{ this.props.title }</Title>
                    <Paragraph>{ this.props.content }</Paragraph>
                </Card.Content>
                <Card.Actions style={{ justifyContent: 'space-between'}}>
                    <Button icon="star" mode={ this.props.mode }></Button>
                    <Button icon="movie" onPress={this.goToPerson} mode={this.props.mode}></Button>
                </Card.Actions>
            </Card>
        )
    }
}

export default CardItem
