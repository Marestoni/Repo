import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Repositorios from './pages/Repositorios'
import Main from './pages/Main'

export default function Routes() {
    return (
       <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/repositorios" component={Repositorios}/>
        </Switch>
       </BrowserRouter>
    )
}
