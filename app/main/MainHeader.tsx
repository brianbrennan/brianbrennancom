import React from 'react';
import { connect } from 'react-redux';

import './MainHeader.scss';
import { AppState } from '../types/app-state';

type MappedProps = {
    shouldShowLogo: boolean
};

class MainHeader extends React.Component<MappedProps> {
    render() {
        return (
            <div className="bb-mainHeader">
                <div className="bb-mediumWrapper">
                    <div className="bb-mainHeader-flex">

                        <div className="bb-mainHeader-logo">
                            { this.props.shouldShowLogo &&
                            <a href="/">
                                Brian Brennan
                            </a>
                            }
                        </div>

                        <div className="bb-mainHeader-nav">
                            <ul>
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="/">Articles</a>
                                </li>
                                <li>
                                    <a href="/">About</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    static mapStateToProps(state: AppState): MappedProps {
        console.log(state.router.location);
        return {
            shouldShowLogo: state.router.location.pathname !== '/' // should not show logo on home screen
        };
    }
}

export default connect(MainHeader.mapStateToProps)(MainHeader);