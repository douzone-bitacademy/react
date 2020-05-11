import React from 'react';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';

export default class EmaillistApp extends React.Component {
    constructor(){
        super(...arguments);
        this.state = {
            keyword: ''
        }
    }

    render() {
        return (
            <div className='EmaillisApp'>
                <SearchBar />
                <Emaillist keyword={ this.state.keyword } emails={ this.props.emails }/>
            </div>
        );
    }
}