import React, { Component } from 'react'

 class LifeCycleMethods extends Component {
    constructor(props){super (props);
        this.state={
            message: 'Welcome to React'
        }
console.log('Class component  constructor called');
    }

    updateMessage = () =>{
      console.log('Inside updateMessage method');
      this.setState({message : 'Welcome to Class comp life cycle'})
  }
  render() {console.log('Class component render method called');
    
    return (
      <>
        <h3>Class Component Life Cycle</h3>
        <p>State Message : {this.state.message}</p>
        <button type="button" class="btn btn-danger" onClick={this.updateMessage}>Update State</button>
         </>
    )
  }
  // 2.Mounting Phase
  componentDidMount(){
    console.log('Component did mount called');
  }
  // 3.Updating Phase
  componentDidUpdate(){
    console.log('Component did mount called');
    return null;
  }
  // 4.Unmounting phase
  componentWillUnmount(){
    console.log('Component Unmount called');
  }
}

export default LifeCycleMethods;