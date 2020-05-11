import React from 'react';
import EmaillistItem from './EmaillistItem';

export default class Emaillist extends React.Component {
    render() {
        return (
            <div className='Emaillist'>
                <ul>
                    { this.props.emails
                        .filter((element) => element.firstName.indexOf(this.props.keyword) != -1 || element.lastName.indexOf(this.props.keyword) != -1|| element.email.indexOf(this.props.keyword) != -1)
                        .map((element) => <EmaillistItem 
                            name = { `${element.firstName}${element.lastName}` }
                            email = { element.email }
                        />) }
                </ul>
            </div>
        );
    }
}