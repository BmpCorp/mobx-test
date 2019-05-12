import React from 'react';
import {observer} from 'mobx-react';
import TodoItem from "./TodoItem";

class TodoApp extends React.Component {
    render() {
        const {appTitle, todoList} = this.props;

        return (
            <div className="app">
                <h1 className="app__title">{appTitle}</h1>
                {todoList.loaded ?
                    <ul className="todo-list">
                        {todoList.todos.map(todo => <TodoItem todo={todo} key={todo.id} onRemove={this.removeTodo}/>)}
                    </ul>
                :
                    <p className="app__loading">Загрузка...</p>
                }
            </div>
        );
    }

    removeTodo = (todo) => {
        const {todoList} = this.props;

        todoList.remove(todo);
    };
}

export default observer(TodoApp);
