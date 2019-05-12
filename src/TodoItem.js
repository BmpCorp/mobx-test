import React from 'react';
import {observer} from 'mobx-react';

class TodoItem extends React.Component {
    render() {
        const {todo} = this.props;

        return (
            <li className="todo-item">
                <span className={'todo-item__name' + todo.completed ? ' todo-item__name--completed' : ''}>
                    {todo.name}
                </span>
            </li>
        );
    }
}

export default observer(TodoItem);