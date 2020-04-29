
import React from 'react';
import CardList from './CardList'

export default class KanbanBoard extends React.Component {
    render() {
        const allCards = this.props.cards;
        let cards = {
            "todo": [],
            "in-progress": [],
            "done": []
        }
        allCards.forEach(card => cards[ card.status ].push( card ));
        return (
            <div className='KanbanBoard'>
                <CardList key='todo' cards={ cards['todo'] } title='To Do' />
                <CardList key='in-progress' cards={ cards['in-progress'] } title='In Progress' />
                <CardList key='done' cards={ cards['done'] } title='Done' />
            </div>
        )
    }
}