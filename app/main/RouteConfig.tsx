import React from 'react';
import { Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom';

import Home from '../home/Home';
import Article from '../article/Article';

class RouteConfig extends React.Component<RouteComponentProps> {
    render() {
        return (
            <Switch>
                <Route
                    exact path="/"
                    component={Home}
                />
                <Route
                    path="/a/:article_slug"
                    component={Article}
                />
            </Switch>
        );
    }
}

export default withRouter(RouteConfig);