import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../styles/global.css'
import '../styles/login.scss'
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveryPassword from '../containers/RecoveryPassword';


const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Layout>
                    <Login />
                    <RecoveryPassword />
                </Layout>
            </Switch>
        </BrowserRouter>
    );
}

export default App;