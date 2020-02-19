import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import { isLogin } from '../utils';

const MyPublicRoute = ({component : Component , restricted, ...rest}) => (

    // restricted = false => public landing page : Actually (i.e. : HomePage)
    // else => go to private landing page : Redirect to one (i.e. : Dashboard)

    // isLogin ? true

    <Route {...rest} render={ props => (
        restricted && isLogin()
        ? <Redirect to='/dashboard'/>
        :( <Component {...props} {...rest}/>)
    )}/>  
    
    
    // restricted && isLogin() 
    // ? <Redirect to='/dashboard'/>   
    // : <Route {...rest} render={ props => <Component {...props} {...rest}/> } /> 
)

export default MyPublicRoute;