import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import IndexView from './views/IndexView';
import TodoView from './views/TodoView';

import TodoList from "./components/TodoList";

const todoList = new TodoList();
//todoList.loadFrom('./todos.json');
todoList.load();

class App extends React.Component {
    state = {
        loading: false,
    };

    startLoading = () => {
        this.setState({...this.state, loading:true});
    };

    stopLoading = () => {
        this.setState({...this.state, loading:false});
    };

    render() {
        const {loading} = this.state;

        return (
            <BrowserRouter>
                <div className={'app' + (loading ? ' app--loading' : '')}>
                    <Route
                        path="/" exact
                        render={props => <IndexView />}
                    />
                    <Route
                        path="/todo/"
                        render={props => <TodoView
                            todoList={todoList}
                            onStartLoad={this.startLoading}
                            onStopLoad={this.stopLoading}
                        />}
                    />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
