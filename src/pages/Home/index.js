import React, {Component} from 'react';
import {
    MainCover,
    IntroductionSection
} from "../";

class HomePage extends Component {

    render() {

        return (
            <main>
                <MainCover/>
                <IntroductionSection/>
            </main>
        );
    }
}

export default HomePage;
