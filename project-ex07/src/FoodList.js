import React from 'react';
import FoodListItem from './FoodListItem';

export default class FoodList extends React.Component {
    render() {
        return (
            <ul className='FoodList'>
                <FoodListItem name='bread' quantity='1'/>
                <FoodListItem name='Egg' quantity='3'/>
                <FoodListItem name='Milk' quantity='5'/>
            </ul>    
        );
    }
}