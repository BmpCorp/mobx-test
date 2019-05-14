import React from 'react';
import {observer} from 'mobx-react';
import TodoItem from '../components/TodoItem';
import Navigation from '../partials/Navigation';
import strings from '../Strings';
import API from "../API";

@observer
class TodoView extends React.Component {
    addTodo = async () => {
        const {todoList, onStartLoad, onStopLoad} = this.props;

        const name = prompt(strings.PROMPT_ADD, 'Новая задача');
        if (name) {
            onStartLoad();
            const id = await API.addTodo(name);
            if (id !== -1) {
                todoList.add(id, name);
            }
            onStopLoad();
        }
    };

    removeTodo = async (todo) => {
        const {todoList, onStartLoad, onStopLoad} = this.props;

        onStartLoad();
        if (await API.removeTodo(todo.id)) {
            todoList.remove(todo);
        }
        onStopLoad();
    };

    render() {
        const {todoList, onStartLoad, onStopLoad} = this.props;

        return (
            <div>
                <Navigation />
                <h1 className="app__title">{strings.HEADING_TODO}</h1>
                {todoList.loaded ?
                    <div>
                        <ul className="todo-list">
                            {todoList.todos.map(todo => <TodoItem
                                todo={todo}
                                key={todo.id}
                                onRemove={this.removeTodo}
                                onStartLoad={onStartLoad}
                                onStopLoad={onStopLoad}
                            />)}
                        </ul>
                        <button className="todo-list__add-button" onClick={this.addTodo}>{strings.BUTTON_ADD}</button>
                        <div className="todo-list__counter">
                            {strings.TODOS_COMPLETED + todoList.completedTodos.length + '/' + todoList.todos.length}
                        </div>
                    </div>
                :
                    <p className="app__loading">{strings.LOADING}</p>
                }
            </div>
        );
    }
}

export default TodoView;
