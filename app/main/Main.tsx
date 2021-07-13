import React from 'react';
import ReactDOM from 'react-dom';

import MainHeader from './MainHeader';
import Article from '../article/Article';

export default class Main extends React.Component {
    render() {
        return (
            <div className="bb-main">
                <MainHeader/>
                <Article/>
            </div>
        );
    }
}

ReactDOM.render(<Main/>, document.getElementById('app'));