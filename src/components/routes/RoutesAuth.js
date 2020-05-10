import React, {useEffect, useContext} from 'react'
import { Route, Redirect } from 'react-router-dom'
import authContext from '../../context/auth/authContext'


const RoutesAuth = ({ component: Component, ...props }) =>{

    const contextAuth = useContext(authContext) 
    const { auth } = contextAuth

    return(
        <Route { ...props } render = { props => !auth ? (
            < Redirect to = '/' />
        ) : (
            <Component {...props} />
        )}
        />
    )

}

export default RoutesAuth