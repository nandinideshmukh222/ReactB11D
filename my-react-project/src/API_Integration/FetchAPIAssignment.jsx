import React, { Component } from 'react'


 class FetchAPIAssignment extends Component {

    constructor(props){
        super(props)

        this.state={
            users :[]
        }

    }

componentDidMount(){
    console.log('Inside component did mount');
    this.fetchUserDetails();
}

fetchUserDetails = async() =>{
    console.log('Inside FetchUser details')
    const userData = await fetch('https://fakestoreapi.com/users');
    const data = await userData.json();
    console.log(data);
    this.setState({users : data})
}

  render() {
    return (
      <>
            <h2> Calling API using fetch Method</h2>
            
            <table class="table  table-dark table-striped table-bordered border-danger">
       
      <thead>

        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Email</th>
          <th>Password</th>
        </tr>
      </thead>
      {this.state.users.map((user) =>(

      <tbody>

        <tr>
          <td> {user.id} </td>
          <td>{user.username} </td>
          <td>{user.email}</td>
          <td>{user.password}</td>
        </tr>

        </tbody>
        
     ))}

   </table>
      </>

    )
  }
}
export default FetchAPIAssignment;