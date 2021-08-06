import React, { useEffect } from 'react';
import { Route, RouteComponentProps, Switch, withRouter, useLocation } from 'react-router-dom';

import Home from '../home/Home';
import Article from '../article/Article';

// makes scrolling behavior with hashRouting normalized
function ScrollToTop(props: any) {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return props.children
}

class RouteConfig extends React.Component<RouteComponentProps> {
    render() {
        return (<ScrollToTop>
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
            </ScrollToTop>
        );
    }
}

export default withRouter(RouteConfig);