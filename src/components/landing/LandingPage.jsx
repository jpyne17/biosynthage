/*
 LandingPage.jsx
 --------------------
 PAGE
 --------------------
 Components used:
 - MainSlide
 - VideoSlide
 - BackgroundSlide
 */


import React from 'react';
import MainSlide from './MainSlide.jsx';
import LandingPageInformation from './LandingPageInformation.jsx';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
};

export default class LandingPage extends React.Component {

    // Appends state calibration to standard Component constructor.

    constructor() {
        // Set 'this' characteristics by calling parent constructor.
        super();

        // Set binding to component instance in our constructor.
        // It needs doing, otherwise the 'this' of the method
        // shadows that of the component instance.
        // Doing this in the constructor means binding only
        // needs to occur the once.
        // Alternatively, an arrow function automatically binds the component.

        this.learnMore = this.learnMore.bind(this);
        this.learnLess = this.learnLess.bind(this);

        // Set initial state
        this.state = {off: true};


    }


    /*
     learnMore()
     -> Fade out logo on front.
     -> Change displaySlide state to 1 upon finish.
     */
    learnMore() {
        $('#mainSlide').animate({
            opacity: 0
        }, 1000, ()=> {
            this.setState({
                off: false
            });
        })
    }

    /*
     learnLess()
     -> Fade out landing video; fade in logo.
     -> Change displaySlide state to 0 upon finish.
     */
    learnLess() {
        $('#mainSlide').animate({
            opacity: 1
        }, 1000);

        $('#landingVideo').animate({
            opacity: 0
        }, 1000);

        $('#videoDiv').animate({
            opacity: 0
        }, 1000, ()=> {
            this.setState({
                off: true
            });
        })

    }

    /*
     render()

     */
    render() {

        // Key dependent on state.
        var text = this.state.off ? "OFF" : "ON";

        return (
            <div className="landing-main-slide">
                <ReactCSSTransitionGroup transitionName="landing-fade" transitionLeaveTimeout={300}
                                         transitionEnterTimeout={300}>
                    {/*[1]*/}
                    {this.state.off ?
                        <MainSlide key={text} learnMore={this.learnMore}/> :
                        <LandingPageInformation key={text} learnLess={this.learnLess}/>}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

/*
 ---NOTES---

 [1]
 Ternary expression for displaySlide state here as React style discourages
 explicit control flow.
 Here we switch between rendering of <MainSlide> and <LandingPageInformation>

 */