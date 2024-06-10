import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ConditionRenderingAssign = () => {

    const isLoggedIn = true;

    if(isLoggedIn){
        return (  <div id="FormT"> 
      <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    </Form>
              </div>
    );
}else {
    
    return <div>
    <form action="">
   <table>
       <tbody>
       <tr>
               <td><label for="">Create Account</label></td>
              
           </tr>
           <tr>
               <td><label for="">Full Name:</label></td>
               <td><input type="text" required autofocus placeholder="Complete Full Name" /></td>
           </tr>
           <tr>
               <td><label for="">Email Address:</label></td>
               <td><input type="text"  required autofocus placeholder="abc@gmail.com" /></td>
           </tr>
           <tr>
                    <td><button type="Submit">SUBMIT</button></td>
                    <td><button type="Reset">CLEAR</button></td>
                </tr>
           </tbody>
        </table>

     </form>
    </div>
}
}

export default ConditionRenderingAssign;