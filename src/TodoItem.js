import React from 'react';
import {observer} from 'mobx-react';

class TodoItem extends React.Component {
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
                <button className='todo-item__button' onClick={this.rename}>Переименовать</button>
                <button className='todo-item__button' onClick={this.remove}>Удалить</button>
            </li>
        );
    }

    complete = () => {
        const {todo} = this.props;

        todo.completed = !todo.completed;
    };

    rename = () => {
        const {todo} = this.props;

        todo.name = prompt('Введите новое имя задачи:', todo.name) || todo.name;
    };

    remove = () => {
        const {todo, onRemove} = this.props;

        if (onRemove) {
            onRemove(todo);
        }
    }
}

export default observer(TodoItem);