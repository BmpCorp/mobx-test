import {observable, computed} from 'mobx';
import superagent from 'superagent';

import strings from '../Strings';

class TodoList {
    @observable todos = [];
    @observable loaded = false;

    lastId = 0;

    @computed get completedTodos() {
        return this.todos.filter(todo => todo.completed);
    }

    add(name, completed = false) {
        this.todos.push({
            id: this.lastId++,
            name,
            completed
        });
    }

    remove(todo) {
        this.todos.splice(this.todos.indexOf(todo), 1);
    }

    async loadFrom(url) {
        try {
            const response = await superagent.get(url);
            const list = response.body;

            list.forEach((todo) => {
                this.add(todo.name, todo.completed);
            });

            this.loaded = true;
        } catch (error) {
            console.log(strings.LOADING_FAILED + url);
            console.log(error);
        }
    }
}

export default TodoList;