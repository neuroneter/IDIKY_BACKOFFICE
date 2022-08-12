import React from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Admin from '../layout/Admin'


export const Internal = ({params}) => {
    return(
        <Router>
            <Switch>
                <Route exact path="/admin" render={props => <Admin params={params} />}/>
                <Route exact path="/admin/:module/" render={props => <Admin params={params} />}/>
                <Route exact path="/admin/:module/:layout" render={props => <Admin params={params} />}/>
                <Redirect from="/:whois/" to="/admin" />
            </Switch>
        </Router>
    )

}
