
import React from 'react';
import KanbanBoard from './KanbanBoard';
import data from './data.json';

import './App.css';

export default class App extends React.Component {
    render() {
        return (
            <div className="App">
                <KanbanBoard cards={ data } />
            </div>
        )
    }
}