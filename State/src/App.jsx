import React, {Component} from "react";
import State from "./component/state";
import Constructor from './component/constructor';
class App extends Component{
   
    render(){
        return(
            <>
            <State/>
           <Constructor/>
           </>
        )
    }
}
export default App

