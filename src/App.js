import React from 'react';
import {observer} from 'mobx-react';
import TodoItem from './TodoItem';
import strings from './Strings';

@observer
class TodoApp extends React.Component {
    addTodo = () => {
        const {todoList} = this.props;

        const name = prompt(strings.PROMPT_ADD, 'Новая задача');
        if (name) {
            todoList.add(name);
        }
    };

    removeTodo = (todo) => {
        const {todoList} = this.props;

        todoList.remove(todo);
    };

    render() {
        const {appTitle, todoList} = this.props;

        return (
            <div className="app">
                <h1 className="app__title">{appTitle}</h1>
                {todoList.loaded ?
                    <div>
                        <ul className="todo-list">
                            {todoList.todos.map(todo => <TodoItem todo={todo} key={todo.id} onRemove={this.removeTodo}/>)}
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

export default TodoApp;
