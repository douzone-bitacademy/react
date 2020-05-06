
import React from 'react';
import PropTypes from 'prop-types';

export default class TaskList extends React.Component {
    render() {
        let taskComponents = [];
        this.props.tasks.forEach(task => taskComponents.push(<li className='TaskList__Task'>
            <input type='checkbox' defaultChecked={ task.done } />
            { task.name }
            <a href='#' className='TaskList__Task--remove' />
        </li>));

        return (
            <div className='TaskList'>
                <ul>
                    { taskComponents }
                </ul>
                <input type='text' className='TaskList--add-task' placeholder='새태스크' />
             </div>
        )
    }
}

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object)
}