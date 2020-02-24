import React from 'react';
import TodoListTask from "./TodoListTask";

class TodoListTasks extends React.Component {

    render = () => {
        let tasksEls = this.props.tasks.map((task) => <TodoListTask task={task}
                                                               changeStatus={this.props.changeStatus}
                                                               changeTitle={this.props.changeTitle}
                                                               key={task.id}/>);
        //
        // let tasksEls = [
        //     <TodoListTask title={this.props.tasks[0].title} isDone={this.props.tasks[0].title}/>,
        //     <TodoListTask title={this.props.tasks[1].title} isDone={this.props.tasks[1].title}/>,
        //     <TodoListTask title={this.props.tasks[2].title} isDone={this.props.tasks[2].title}/>,
        //     <TodoListTask title={this.props.tasks[3].title} isDone={this.props.tasks[3].title}/>,
        // ]

        return (
            <div className="todoList-tasks">
                {tasksEls}
            </div>
        );
    }
}

export default TodoListTasks;

