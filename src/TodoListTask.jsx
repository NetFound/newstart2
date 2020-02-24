import React from 'react';
import './App.css';

class TodoListTask extends React.Component {
    state = {
        editMode: false
    };

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    };

    deacivateEditMode = () => {
        this.setState({
            editMode: false
        });
    };
    onIsDoneChanged = (e) => {
        this.props.changeStatus(this.props.task.id, e.currentTarget.checked);
    };

    onTitleChanged = (e) => {
        debugger
        this.props.changeTitle(this.props.task.id, e.currentTarget.value);

    };

    onTitleChangedKeyPress = (e) => {
        debugger
        if (e.key === "Enter"){
            this.onTitleChanged(e);
            this.deacivateEditMode()
        }
    };


    render = () => {
        let classForTask = (this.props.task.isDone) ? "todoList-task done" : "todoList-task";
        return (
            <div className={classForTask}>
                <input type="checkbox"
                       checked={this.props.task.isDone}
                       onChange={this.onIsDoneChanged}/>
                <span>{this.props.task.id}-</span>
                {this.state.editMode
                    ? <input value={this.props.task.title}
                             autoFocus={true}
                             onBlur={this.deacivateEditMode}
                             onChange={this.onTitleChanged}
                              onKeyPress={this.onTitleChangedKeyPress}/>
                    : <span onClick={this.activateEditMode}>{this.props.task.title},</span>}
                <span>priority: {this.props.task.priority}</span>
            </div>
        );
    }
}

export default TodoListTask;

