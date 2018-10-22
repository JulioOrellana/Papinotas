import React, { Component } from 'react'
import { Appbar } from 'react-native-paper'
import { Actions } from 'react-native-router-flux'


class Header extends Component{

    _goBack = () => Actions.pop()

    render(){
        return(
            <Appbar.Header>
                <Appbar.BackAction
                onPress={this._goBack}
                />
                <Appbar.Content
                title={this.props.title}
                subtitle={this.props.subtitle}
                />
            </Appbar.Header>
        )
    }
}

export default Header
