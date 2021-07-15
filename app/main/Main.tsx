import React from 'react';
import ReactDOM from 'react-dom';

import MainLayout from './MainLayout';
import Home from '../home/Home';

export default class Main extends React.Component {
    render() {
        return (
            <MainLayout>
                <Home/>
            </MainLayout>
        );
    }
}

ReactDOM.render(<Main/>, document.getElementById('bb-app'));