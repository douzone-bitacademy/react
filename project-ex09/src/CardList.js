import React from 'react';
import Card from './Card';

export default class CardList extends React.Component {
    render() {
        const cardComponents = [];
        this.props.cards.forEach(card => cardComponents.push(<Card
            key={ card.id }
            title={ card.title }
            description={ card.description }
            tasks={ card.tasks }
        />));

        return (
            <div className='CardList'>
                <h1>{ this.props.title }</h1>
                { cardComponents }
            </div>
        )
    }
}