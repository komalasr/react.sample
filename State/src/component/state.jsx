import React, {Component} from "react";
class State extends Component{
    state={
            username:"priya"
        }
    
    
    render(){
        return(
            <h1>{this.state.username}</h1>
        )
    }
}
export default State

