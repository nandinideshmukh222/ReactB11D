import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class ReactCC extends Component{

    render(){
        return(
            <div>      
        <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src="holder.js/100px180" />
         <Card.Body>
           <Card.Title>React JS ClassComp</Card.Title>
           <Card.Text>
             Some quick example text to build on the card title and make up the
             bulk of the card's content.
           </Card.Text>
           <Button variant="primary">Go somewhere</Button>
         </Card.Body>
       </Card>
       </div>
        )
    }
}

export default ReactCC;