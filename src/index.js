import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TodoList from "./TodoList";

const todoList = new TodoList();
todoList.loadFrom('./todos.json');

ReactDOM.render(
    <App appTitle="Список задач" todoList={todoList} />,
    document.getElementById('root')
);
