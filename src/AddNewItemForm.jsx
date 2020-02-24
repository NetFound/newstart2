import React from 'react';
import './App.css';

class AddNewItemForm extends React.Component {
        // newTaskTitleRef = React.createRef();
    state = {
        error: false,
        title: ""
    };
onAddItemButtonClick = (e) => {
    // debugger
    // let newText = e.currentTarget.value
    // let newText = this.newTaskTitleRef.current.value;
    // this.newTaskTitleRef.current.value = '';
    if(this.state.title /*newText*/ === "") {
        this.setState({error: true})
    }else {
        // this.props.addTask(newText);
        this.props.addItem(this.state.title);
        this.setState ({
            error:false,
            title:''
        })
    }
};
    onTitleChanged = (e) => {
        let newTitle=e.currentTarget.value
       this.setState ({
           error:false,
           title:newTitle
       })
    };

    onAddItemEnterPress = (e) => {
        if(e.key ==="Enter"){
            this.onAddTitleButtonClick();
}
    };
    render = () => {
        let classForInput = (this.state.error) ? "error" : "";
        return (
            <div className="todoList-header">
                <div className="todoList-newItemForm">
                    <input
                        onChange={this.onTitleChanged}
                        className={classForInput}
                        // ref={this.newTaskTitleRef}
                        type="text"
                        placeholder="New item name"
                        onKeyPress={this.onAddItemEnterPress}
                    value={this.state.title}/>
                    <button onClick={this.onAddItemButtonClick}>Add</button>
                </div>
            </div>
        );
    }
}

export default AddNewItemForm;

