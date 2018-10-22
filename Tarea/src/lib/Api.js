
/**
 *  Simple Api for get/post/put/delete actions.
 * 
 *  Change host='' with url and can you as 
 *  
 *  "Api.get('/getValues')
 * 
 *  or
 * 
 *  let params = {}
 *  params.name = 'Some name'
 * 
 *  Api.post('/set-name',params) 
 */
import React, { Component } from 'react'
import GLOBAL from '../global'
import _ from 'lodash'

class Api extends Component{

    static get(route) {
        return this.xhr(route, null, 'GET')
    }

    static put(route, params) {
        return this.xhr(route, params, 'PUT')
    }

    static post(route, params) {
        return this.xhr(route, params, 'POST')
    }

    static delete(route, params) {
        return this.xhr(route, params, 'DELETE')
    }

    static xhr(route, params, verb) {
        const host = GLOBAL.HOST.NAME
        const url = `${host}${route}`
        let options = Object.assign({ method: verb }, params? { body: JSON.stringify(params) } : null)
        return fetch(url, options).then( resp => {
            let json = resp.json()
            if (resp.ok) {
                return json
            }
            return json.then(err => {
                return err
            })
        })
    }
}

export default Api