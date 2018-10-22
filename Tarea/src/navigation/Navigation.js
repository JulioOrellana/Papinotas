import React, { Component } from 'react'

import { Scene, Stack, Router } from 'react-native-router-flux'

import Main from '../screens/main'

class Navigation extends Component {

    render(){
        return(
            <Router key="root">
                <Stack>
                    <Scene
                        key="mainScreen"
                        hideNavBar={true}
                        component={ Main }
                    />
                </Stack>
            </Router>
        )
    }
}

export default Navigation