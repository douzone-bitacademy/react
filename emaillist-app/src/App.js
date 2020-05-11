import React from 'react';
import EmaillistApp from './EmaillistApp';
import data from './data.json';

export default class App extends React.Component {
    render() {
        return (
            <EmaillistApp emails={ data }/>
        );
    }
}