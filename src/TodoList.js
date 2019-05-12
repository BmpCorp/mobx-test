import {decorate, observable, computed} from 'mobx';
import superagent from 'superagent';

class TodoList {
    todos = [];
    loaded = false;

    get completedTodos() {
        return this.todos.filter(todo => todo.completed);
    }

    get incompletedTodos() {
        return this.todos.filter(todo => !todo.completed);
    }

    add(name, completed = false) {
        this.todos.push({
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
            console.log('Не удаётся загрузить список из файла!');
            console.log(error);
        }
    }
}

decorate(TodoList, {
    todos: observable,
    loaded: observable,
    completedTodos: computed,
    incompletedTodos: computed,
});

export default TodoList;