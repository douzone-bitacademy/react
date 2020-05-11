import React from 'react';

export default class SearchBar extends React.Component {
    render() {
        return (
            <div className='SearchBar'>
                찾기: <input type='text' placeholder='찾기' />
            </div>
        );
    }
}