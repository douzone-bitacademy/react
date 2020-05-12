
import React from 'react';
import CardList from './CardList'
import PropTypes from 'prop-types';
import update from 'react-addons-update';

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

    callbackAddTask(cardId, taskName){
        // console.log(cardId, ":", taskName);
        const cardIndex = this.state.cards.findIndex(card => card.id == cardId);
        // console.log(cardIndex);
        let newTask = {
            id: null,
            name: taskName,
            done: false
        };

        // call api
        fetch(`${API_URL}/cards/${cardId}/tasks`, {
            method: 'post',
            headers: API_HEADERS,
            body: JSON.stringify(newTask)
        })
        .then( response => response.json())
        .then( json => {
            let newCards = update(this.state.cards, {
                [cardIndex]: {
                    tasks: {
                        $push: [json.data]
                    }
                }
            });

            this.setState({
                cards: newCards
            });
        })
        .catch( err => console.error( err ));        

    }

    callbackDeleteTask(cardId, taskId){
    }

    render() {
        return (
            <div className={ styles.KanbanBoard }>
                <CardList
                    key='todo'
                    cards={ this.state.cards && this.state.cards.filter( card => card.status == 'todo' ) }
                    title='To Do'
                    taskCallbacks={ {
                        add: this.callbackAddTask.bind(this),
                        delete: this.callbackDeleteTask.bind(this)
                    } } />
                <CardList 
                    key='in-progress' 
                    cards={ this.state.cards && this.state.cards.filter( card => card.status == 'in-progress' ) } 
                    title='In Progress'
                    taskCallbacks={ {
                        add: this.callbackAddTask.bind(this),
                        delete: this.callbackDeleteTask.bind(this)
                    } } />
                <CardList 
                    key='done' 
                    cards={ this.state.cards && this.state.cards.filter( card => card.status == 'done' ) } 
                    title='Done'
                    taskCallbacks={ {
                        add: this.callbackAddTask.bind(this),
                        delete: this.callbackDeleteTask.bind(this)
                    } } />
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
    cards: PropTypes.arrayOf(PropTypes.object)
}