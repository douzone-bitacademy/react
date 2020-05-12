
import React from 'react';
import KanbanBoard from './KanbanBoard';

import './App.css';

export default class App extends React.Component {
    render() {
        return (
            <div className="App">
                <KanbanBoard />
            </div>
        )
    }
}