
import React from 'react';
import { Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom';

import Home from '../home/Home';

class RouteConfig extends React.Component<RouteComponentProps> {
    render() {
        return (
            <Switch>
                <Route
                    exact path="/"
                    component={Home}
                />
            </Switch>
        );
    }
}

export default withRouter(RouteConfig);