import React from 'react';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';

export default class EmaillistApp extends React.Component {
    constructor(){
        super(...arguments);
        this.state = {
            keyword: '',
            emails: null
        }
        console.log('EmaillistApp:constructor()');
    }

    componentWillMount() {
        console.log('EmaillistApp:componentWillMount()');
    }   

    onNotifyKeywordChange(keyword){
        this.setState({
            keyword: keyword
        })
    }

    render() {
        console.log('EmaillistApp:render()');

        return (
            <div className='EmaillisApp'>
                <SearchBar keyword={ this.state.keyword } notifyKeywordChangeHandler={ this.onNotifyKeywordChange.bind(this) } />
                <Emaillist keyword={ this.state.keyword } emails={ this.state.emails }/>
            </div>
        );
    }

    componentDidMount() {
        console.log('EmaillistApp:componentDidMount()');
        fetch('http://localhost:8888/emaillist')
        .then( response => response.json())
        .then( json => this.setState({
            emails: json.data
        }))
        .catch( err => console.error( err ));
    }

    componentWillUnmount() {
        console.log('EmaillistApp:componentWillUnmount()');
    }
}