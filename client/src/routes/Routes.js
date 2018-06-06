import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Landing from "../components/Landing"
import Dashboard from "../components/Dashboard"

const Routes = () => {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Landing} />
                <Route path="/dashboard" component={Dashboard} />
            </div>
        </Router>
    );
};

export default Routes;