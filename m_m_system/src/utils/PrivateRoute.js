import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from '../components/Home/Home';

const PrivateRoute = ({res}) => {
    return (

        <Route render={ ()=> (
            res?
                <Home/>
            : <Redirect to="/Login" />
        )} />
    );
};

export default PrivateRoute;