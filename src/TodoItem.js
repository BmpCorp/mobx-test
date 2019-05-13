import React from 'react';
import {observer} from 'mobx-react';
import strings from './Strings';

@observer
class TodoItem extends React.Component {
    complete = () => {
        const {todo} = this.props;

        todo.completed = !todo.completed;
    };

    rename = () => {
        const {todo} = this.props;

        todo.name = prompt(strings.PROMPT_RENAME, todo.name) || todo.name;
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