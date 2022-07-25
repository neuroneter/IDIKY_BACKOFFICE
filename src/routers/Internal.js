import React from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import { Home } from '../layout/Home';
import Admin from '../layout/Admin';
import { useDispatch } from 'react-redux';
import { LoadLocals } from '../actions/LoadLocals';

export const Internal = ({params}) => {

    //utilizamos el dispatch para cargar en el store los datos del leguaje, ya en este punto el login fue realizado y por lo tanto.
    //el action podra identificar el idioma que tiene que ser configurado.
    const dispatch = useDispatch();
    dispatch(LoadLocals());
    
    return (
        <Router>
            <Switch>
                <Route exact path="/" render={props => <Home params={params} />}/>
                <Route exact path="/index" render={props => <Home params={params} />}/>
                <Route exact path="/admin/:layout/:idCoownership" render={props => <Admin params={params} />}/>
                <Route exact path="/admin/:layout/" render={props => <Admin params={params} />}/>
                <Redirect from="/admin" to="/admin/store/" />
                <Redirect to="/" />
            </Switch>
        </Router>
    )

}
