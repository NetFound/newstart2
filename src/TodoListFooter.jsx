import React from 'react';
import './App.css';
import Button from "./Button";

class TodoListFooter extends React.Component {
//isHidden-не скрыты
    state = {
        isHidden: false
    };

    onAllFilterClick = () => {
        this.props.changeFilter("All")
    };
    onCompletedFilterClick = () => {
        this.props.changeFilter("Completed")
    };
    onActiveFilterClick = () => {
        this.props.changeFilter("Active")
    };
    onShowFiltersClick = () => {
        this.setState({isHidden: false})
    };
    onHideFiltersClick = () => {
        this.setState({isHidden: true})
    };


    render = () => {

        let classForAll = this.props.filterValue === "All" ? "filter-active" : "";
        let classForCompleted = this.props.filterValue === "Completed" ? "filter-active" : "";
        let classForActive = this.props.filterValue === "Active" ? "filter-active" : "";

        return (
            <div className="todoList-footer">
                {!this.state.isHidden && <div>
                    <Button
                        title={"All"}
                        btnClass={classForAll}
                        onClickFn={this.onAllFilterClick}/>
                    <Button
                        title={"Completed"}
                        btnClass={classForCompleted}
                        onClickFn={this.onCompletedFilterClick}/>
                    <Button
                        title={"Active"}
                        btnClass={classForActive}
                        onClickFn={this.onActiveFilterClick}/>
                </div>}

                {!this.state.isHidden && <span onClick={this.onHideFiltersClick}>Hide</span>}
                {this.state.isHidden && <span onClick={this.onShowFiltersClick}>Show</span>}

                {/*{!this.state.isHedden &&<span onClick={() => {this.setState({isHedden: true})}}>hide</span>}*/}
                {/*{this.state.isHedden &&<span onClick={() => {this.setState({isHedden: true})}}>show</span>}*/}
            </div>
        );
    };
};

export default TodoListFooter;

