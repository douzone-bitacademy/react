import React from 'react';

export default class FoodListItem extends React.Component {
    render() {
        this.props.name = 'kickscar';
        return (
            <li>{ this.props.name } : { this.props.quantity }</li>      
        );
    }
}

