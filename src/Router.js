import React from 'react'
import {Switch, Route} from 'react-router'
// import {BrowserRouter} from 'react-router-dom'
import {Login, Home} from './templates'

const Router = () => {
    return(
        // <BrowserRouter>
        <Switch>
            <Route exact path={"/login"} component={Login}/>
            <Route exact path={"(/)?"} component={Home}/>
        </Switch>
        // </BrowserRouter>
    )
}

export default Router