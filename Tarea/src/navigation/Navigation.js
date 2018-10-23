import React, { Component } from 'react'

import { Scene, Stack, Router } from 'react-native-router-flux'

import Main from '../screens/main'
import SinglePerson from '../screens/singlePerson'

class Navigation extends Component {

    render(){
        return(
            <Router key="root">
                <Stack>
                    <Scene
                        key="mainScreen"
                        hideNavBar={true}
                        component={ Main }
                        initial
                    />
                    <Scene
                        key="singlePersonScreen"
                        hideNavBar={true}
                        component={ SinglePerson }
                    />
                </Stack>
            </Router>
        )
    }
}

export default Navigation