import {observable, computed} from 'mobx';

import strings from '../Strings';
import API from "../API";

class TodoList {
    @observable todos = [];
    @observable loaded = false;

    @computed get completedTodos() {
        return this.todos.filter(todo => todo.completed);
    }

    add(id, name, completed = false) {
        this.todos.push({
            id,
            name,
            completed
        });
    }

    remove(todo) {
        this.todos.splice(this.todos.indexOf(todo), 1);
    }

    async load() {
        try {
            const response = await API.getTodos();
            const list = response.body.todos;

            list.forEach((todo) => {
                this.add(todo.id, todo.name, todo.completed);
            });

            this.loaded = true;
        } catch (error) {
            console.log(strings.LOADING_FAILED);
            console.log(error);
        }
    }
}

export default TodoList;