import React, { Component } from 'react'

 class StateInClassComp extends Component {

    constructor(props){
        super(props)

        this.user = "Guest";

        this.state = {
            userName : "Guest"
        }
    
    this.state={
      number : 0,
     flag :true,
     arrayValue :[1,2,3,4,5,6,],
     person :{
      name : "Nandini",
       city : "Pune"   }
  }
}
    changeUser(){
        console.log("Inside change user function")
        this.user = "Admin";
        console.log(this.user)
      
}

    changeUserName(){
        console.log("Inside new change userName function");
        this.setState({ userName : "Admin" })
        console.log(this.state.userName)
    }

  render() {
    return (
      <>
            <h1>State In Class Component</h1>
           
            <h3>Current User using normal function : {this.user}  </h3>
            <button onClick={this.changeUser.bind(this)}> Login as Admin </button>

            <h3>Current User  using State : {this.state.userName}</h3>
            <button onClick={this.changeUserName.bind(this)}> Login as Admin </button>
     
     <p>  Number is : {this.state.number}</p>
     
     <p>  Boolean  is : {this.state.flag ? "true" : "false" }</p>
    
    <p>  Array Values is : {this.state.arrayValue.join(',')}</p>
    
    <p>  Person Object is : {JSON.stringify(this.state.person)}</p>
      </>
    )
  }
}

export default StateInClassComp;