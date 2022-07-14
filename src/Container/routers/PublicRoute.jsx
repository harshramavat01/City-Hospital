import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import isLogin from './isLogin'

const PublicRoute = ({ component: Component, restrict = false, ...rest }) => {
    return (
        <>
            <Route {...rest} render={props => (
                isLogin() && restrict ?
                    <Redirect to="/" />
                    :
                    <Component {...props} />
            )}

            />
        </>
    )
}

export default PublicRoute
