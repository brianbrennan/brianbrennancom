import React from 'react';
import TextTransition, { presets } from "react-text-transition";

import './Landing.scss';

type State = {
    subtitles: string[],
    subtitleIndex: number,
    subtitleTracker: any
};

export default class Landing extends React.Component<any, State> {
    private subtitles = [
        'Web Developer',
        'Writer',
        'Musician',
        'Baseball Fan',
        'Aquarist'
    ];

    constructor(props: any) {
        super(props);

        this.state = {
            subtitles: this.subtitles,
            subtitleIndex: 0,
            subtitleTracker: setInterval(() => {
                this.setState({
                    subtitleIndex: this.state.subtitleIndex + 1
                });
            },2500)
        };


    }

    render() {
        return(
            <div className="bb-landing">
                <div className="bb-landing-stripe">
                    <div className="bb-landing-stripe-level1"/>
                    <div className="bb-landing-stripe-level2"/>
                    <div className="bb-landing-stripe-level3"/>
                    <div className="bb-landing-stripe-level4"/>
                </div>
                <div className="bb-landing-title">
                    <h3>Brian <br/>Brennan</h3>
                    <h1>
                        <TextTransition
                            text={this.state.subtitles[this.state.subtitleIndex %
                                  this.state.subtitles.length]}
                            noOverflow/>
                    </h1>
                </div>
            </div>
        );
    }
}
