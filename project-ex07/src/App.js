import React from 'react';
import FoodList from './FoodList';

export default class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <FoodList />
            </div>    
        );
    }
}