import React from 'react';
import ReactDOM from 'react-dom'

import MainHeader from './MainHeader';

export default class Main extends React.Component {
    render() {
        return (
            <div className="bb-main">
                test
                <MainHeader/>
            </div>
        );
    }
}

ReactDOM.render(<Main/>, document.getElementById('app'));