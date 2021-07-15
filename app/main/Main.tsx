import React from 'react';
import ReactDOM from 'react-dom';

import MainLayout from './MainLayout';

export default class Main extends React.Component {
    render() {
        return (
            <div className="bb-main">
                <MainLayout/>
            </div>
        );
    }
}

ReactDOM.render(<Main/>, document.getElementById('bb-app'));