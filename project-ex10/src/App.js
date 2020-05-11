import React, { Fragment } from 'react';
import './App.css'

import Banner01 from './Banner01'
import Banner02 from './Banner02'

export default class App extends React.Component {
    render() {
        return (
            <Fragment>
                <Banner01 />
                <Banner02 />
            </Fragment>
        );
    }
}