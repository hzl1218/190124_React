import React from 'react';
import Nav from "./store";
import Admins from "./admins";
import "./App.css"
class App extends React.Component{
  constructor(){
    super()
  }
  render(){
    return(
      <div className="zt">
        <Nav></Nav>
        <Admins/>
      </div>
      
    )
  }
 
}
export default App;
