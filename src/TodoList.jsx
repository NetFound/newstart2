import React from 'react';
import AddNewItemForm from "./AddNewItemForm";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";
import TodoListTitle from "./TodoListTitle";

class TodoList extends React.Component {

    componentDidMount() {
        this.restoreState();
    };

    newTaskId= 0;

    state = {
        tasks: [],

        filterValue: "All"
    }

    saveState = () => {
        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem(`our-state- ${this.props.id}`, stateAsString);
        // localStorage.setItem("our-state-" + this.props.id, stateAsString);
    }

    restoreState = () => {
        let state =this.state;
        let stateAsString = localStorage.getItem(`our-state- ${this.props.id}`);
        if (stateAsString){
           state = JSON.parse(stateAsString);
        }
        this.setState(state, () => {
            this.state.tasks.forEach( t => {
                if(t.id > this.nextTaskId){
                this.nextTaskId = t.id + 1;
            }
            } )
        });
    }

    addTask = (newText) => {

        let newTask = {
            id: this.newTaskId,
            title: newText,
            isDone: false,
            priority: "low"
        };
        this.newTaskId++;
        let newTasks = [...this.state.tasks, newTask];
        this.setState({tasks: newTasks},this.saveState);

    };

    changeFilter = (newFilterValue) => {
        this.setState({filterValue: newFilterValue},this.saveState);
    };

    changeTask = (taskId, obj) => {
        let tasksCopy = this.state.tasks.map(t => {
            if (t.id != taskId) {
                return t;
            } else {
                return {...t, ...obj};
            }});
        this.setState({tasks: tasksCopy},this.saveState);
}


    changeStatus = (taskId, isDone) => {
        this.changeTask(taskId, {isDone:isDone});
        // let tasksCopy = this.state.tasks.map(t => {
        //     if (t.id != taskId) {
        //         return {...t, isDone: isDone};
        //     } else {
        //         return t;
        //     }
        // })
        // this.setState({
        //     tasks: tasksCopy
        // })
    }

    changeTitle = (taskId, newTitle) => {
        this.changeTask(taskId, {title:newTitle});
        // let tasksCopy = this.state.tasks.map(t => {
        //     if (t.id === taskId) {
        //         return {...t, title:newTitle};
        //     } else {
        //         return t;
        //     }
        // })
        // this.setState({
        //     tasks: tasksCopy
        // })
    }
    render = () => {

        return (
            <div className="App">
                <div className="todoList">
                    <div>
                    <TodoListTitle title={this.props.title} id={this.props.id}/>
                    <AddNewItemForm addItem={this.addTask}/>
                    </div>
                    {/*<div className="todoList-header">*/}
                    {/*    <h3 className="todoList-header__title">What to Learn</h3>*/}
                    {/*    <div className="todoList-newTaskForm">*/}
                    {/*        <input ref={this.newTaskTitleRef} type="text" placeholder="New task name"/>*/}
                    {/*        <button onClick={this.onAddTaskClick}>Add</button>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <TodoListTasks
                        changeTitle={this.changeTitle}
                        changeStatus={this.changeStatus}
                        tasks={this.state.tasks.filter(t => {
                            if (this.state.filterValue === 'All') {
                                return true
                            }
                            if (this.state.filterValue === 'Completed') {
                                return t.isDone
                            }
                            if (this.state.filterValue === 'Active') {
                                return !t.isDone
                            }
                        })}/>
                    <TodoListFooter filterValue={this.state.filterValue} changeFilter={this.changeFilter}/>
                </div>
            </div>
        );
    }
}

export default TodoList;
