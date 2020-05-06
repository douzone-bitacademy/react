import React from 'react';

class App extends React.Component {
    render() {
        const message = 'Hello React';
        const h1Style = {
            width: 180,
            height: 80,
            padding: 5,
            color: '#fff',
            backgroundColor: '#ee9900'
        };

        return (
            <h1 style={ h1Style }>{ message }</h1>
        );
    }
}

export { App };