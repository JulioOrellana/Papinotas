import React, { Component } from 'react'
import { Card, Title, Paragraph, Button } from 'react-native-paper'
import { Actions } from 'react-native-router-flux'


class CardItem extends Component{

    _goBack = () => Actions.pop()

    render(){
        return(
            <Card style={{ marginHorizontal: 20}}>
                <Card.Content>
                    <Title>{ this.props.title }</Title>
                    <Paragraph>{ this.props.content }</Paragraph>
                </Card.Content>
                <Card.Actions>
                    <Button icon="star" mode={this.props.mode}>Starred</Button>
                </Card.Actions>
            </Card>
        )
    }
}

export default CardItem
