import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default class FetchProductAPIAssign
 extends Component {

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
    const userData = await fetch('https://fakestoreapi.com/products');
    const data = await userData.json();
    console.log(data);
    this.setState({users : data})
}

  render() {
    return (
     
      <>
            <h2> Calling API using fetch Method</h2>

            <div className='d-flex justify-content-center'>
            {this.state.users.map((user)=>(
                
            <Card style={{ width: '15rem' }}>
            <Card.Img src={user.image}/>
            <Card.Body>
            <Card.Title>{user.price}$</Card.Title>
           <Card.Text>
           {user.category}
          </Card.Text>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
     ))}
     </div>
      </>

    )
  }
}
