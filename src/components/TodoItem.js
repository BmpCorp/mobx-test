import React from 'react';
import {observer} from 'mobx-react';
import strings from '../Strings';
import API from "../API";

@observer
class TodoItem extends React.Component {
    complete = async () => {
        const {todo, onStartLoad, onStopLoad} = this.props;

        onStartLoad();
        if (await API.completeTodo(todo.id, !todo.completed)) {
            todo.completed = !todo.completed;
        }
        onStopLoad();
    };

    rename = async () => {
        const {todo, onStartLoad, onStopLoad} = this.props;

        const pendingName = prompt(strings.PROMPT_RENAME, todo.name);
        if (pendingName && pendingName !== todo.name) {
            onStartLoad();
            if (await API.renameTodo(todo.id, pendingName)) {
                todo.name = pendingName;
            }
            onStopLoad();
        }
    };

    remove = () => {
        const {todo, onRemove} = this.props;

        if (onRemove) {
            onRemove(todo);
        }
    };

    render() {
        const {todo} = this.props;

        return (
            <li className="todo-item">
                <span
                    className={'todo-item__name' + (todo.completed ? ' todo-item__name--completed' : '')}
                    onClick={this.complete}
                >
                    {todo.name}
                </span>
                <button className='todo-item__button' onClick={this.rename}>{strings.BUTTON_RENAME}</button>
                <button className='todo-item__button' onClick={this.remove}>{strings.BUTTON_DELETE}</button>
            </li>
        );
    }
}

export default TodoItem;