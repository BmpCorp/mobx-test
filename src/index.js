import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TodoList from './TodoList';

import strings from './Strings';

const todoList = new TodoList();
todoList.loadFrom('./todos.json');

ReactDOM.render(
    <App appTitle={strings.APP_TITLE} todoList={todoList} />,
    document.getElementById('root')
);
