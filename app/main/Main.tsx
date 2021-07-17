import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import store, { browserHistory } from './main-store';
import MainLayout from './MainLayout';
import RouteConfig from './RouteConfig';

export default class Main extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <MainLayout>
                    <ConnectedRouter history={browserHistory}>
                        <RouteConfig />
                    </ConnectedRouter>
                </MainLayout>
            </Provider>
        );
    }
}

ReactDOM.render(<Main/>, document.getElementById('bb-app'));