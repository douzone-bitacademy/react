import React from 'react';

export default class EmaillistItem extends React.Component {
    render() {
        return (
            <div className='Emaillist'>
                <li>
                    { this.props.name }
                    <br/>
                    { this.props.email }
                </li>
            </div>
        );
    }
}