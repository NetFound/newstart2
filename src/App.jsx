import React from 'react';
import './App.css';
import TodoList from "./TodoList";
import AddNewItemForm from "./AddNewItemForm";


class App extends React.Component {
    state = {
        todoLists: [
            {id: 1, title: '1 todo'},
            {id: 2, title: '2 todo'}
        ]
    };

componentDidMount() {
    this.restoreState()
}

    nextTodoListId = 3;

    addTodoList = (title) => {

        let newTodoList = {
            title: title,
            id: this.nextTodoListId
        };
        this.nextTodoListId++;
        this.setState({
            todoLists: [...this.state.todoLists, newTodoList]
        }, () => {
            this.saveState()
        })

    };

    saveState = () => {
        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem("todoLists", stateAsString)
    };

    restoreState = () => {
       let state = this.state;

        let stateAsString = localStorage.getItem("todoLists");
        if (stateAsString !==null){
            state = JSON.parse(stateAsString);
            this.setState(state, () => {
                this.state.todoLists.forEach( (tl)=> {
                    if(tl.id>= this.nextTodoListId) {
                        this.nextTodoListId = tl.id+1
                    }
                })
            } )
        }

        // this.setState(state, () => {
        //     this.state.tasks.forEach( t => {
        //         if(t.id > this.nextTaskId){
        //             this.nextTaskId = t.id + 1;
        //         }
        //     } )
        // });
    };

    render = () => {

        let todoLists = this.state.todoLists.map(tl => <TodoList id={tl.id} title={tl.title} key={tl.id}/>);

        return (

            <>
                <AddNewItemForm addItem={this.addTodoList}/>
                <div className="App">
                    {todoLists}
                </div>
            </>
        );
    }
}


export default App;
