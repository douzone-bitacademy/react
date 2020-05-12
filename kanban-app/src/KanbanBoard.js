
import React from 'react';
import CardList from './CardList'
import PropTypes from 'prop-types';

import styles from './KanbanBoard.css';

const API_URL = 'http://localhost:8888/kanban';
const API_HEADERS = {
    'Content-Type': 'application/json'
}

export default class KanbanBoard extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            cards: null
        }
    }
    render() {
        return (
            <div className={ styles.KanbanBoard }>
                <CardList
                    key='todo'
                    cards={ this.state.cards && this.state.cards.filter( card => card.status == 'todo' ) }
                    title='To Do' />
                <CardList 
                    key='in-progress' 
                    cards={ this.state.cards && this.state.cards.filter( card => card.status == 'in-progress' ) } 
                    title='In Progress' />
                <CardList 
                    key='done' 
                    cards={ this.state.cards && this.state.cards.filter( card => card.status == 'done' ) } 
                    title='Done' />
            </div>
        )
    }

    componentDidMount() {
        fetch(`${API_URL}/cards`, {
            method: 'get',
            headers: API_HEADERS
        })
        .then( response => response.json())
        .then( json => this.setState({
            cards: json.data
        }))
        .catch( err => console.error( err ));        
    }
}

KanbanBoard.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.object).isRequired
}