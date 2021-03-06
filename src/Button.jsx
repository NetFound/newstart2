import React from "react";

class Button extends React.Component{
    render(){
        return(
            <button className={this.props.btnClass} onClick={this.props.onClickFn}>{this.props.title}</button>
        );
    };
};

export default Button;