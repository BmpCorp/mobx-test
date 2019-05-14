import superagent from 'superagent';
import strings from './Strings';

const baseURL = 'http://localhost:8000/api/';

class API{
    static getTodos() {
        return superagent.get(baseURL + 'todo/');
    }

    static async completeTodo(id, completed) {
        const response = await superagent.post(baseURL + 'todo/').type('form').send({id, completed: completed ? 1 : 0});
        return API.isQuerySuccessful(response);
    }

    static async renameTodo(id, newName) {
        const response = await superagent.post(baseURL + 'todo/').type('form').send({id, name: newName});
        return API.isQuerySuccessful(response);
    }

    static async addTodo(name) {
        const response = await superagent.post(baseURL + 'todo/add').type('form').send({name});
        return API.isQuerySuccessful(response) ? response.body.id : -1;
    }

    static async removeTodo(id) {
        const response = await superagent.post(baseURL + 'todo/remove').type('form').send({id});
        return API.isQuerySuccessful(response);
    }

    static isQuerySuccessful(response) {
        if (response.body.status === 'ok') {
            return true;
        } else {
            console.log(strings.QUERY_FAILED);
        }

        return false;
    }
}

export default API;
