import React from 'react';

export default class CardList extends React.Component {
    render() {
        console.log(this.props.cards);
        
        return (
            <div className='CardList'>
                <h1>{ this.props.title }</h1>

                <div className='Card'>
                    <div className='Card__Title'>Write some code</div>
                </div>
            </div>
        )
    }
}