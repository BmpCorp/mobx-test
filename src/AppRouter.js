import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import IndexView from './views/IndexView';
import TodoView from './views/TodoView';

import TodoList from "./components/TodoList";

const todoList = new TodoList();
todoList.loadFrom('./todos.json');

class AppRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="app">
                    <Route path="/" exact render={props => <IndexView />} />
                    <Route path="/todo/" render={props => <TodoView todoList={todoList} />} />
                </div>
            </BrowserRouter>
        );
    }
}

export default AppRouter;
