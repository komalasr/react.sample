import React, {Component} from "react";
class Constructor extends Component{
    constructor(){
        super()
        this.state={
            username:"komala",
            password:"123"
        }
    }
    
    
    render(){
        return(
            <>
            <h1>{this.state.username}</h1>
            <h2>{this.state.password}</h2></>
        )
    }
}
export default Constructor

