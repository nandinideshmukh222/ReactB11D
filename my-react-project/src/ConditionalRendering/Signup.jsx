import React from 'react'

import Form from 'react-bootstrap/Form';
const Signup = () => {
  return (
<Form>
    <div id='signup'>
    <h1> SignUp Page</h1>
    <table>
      <tbody>
          <tr>
              <td><label>Mobile No.</label></td>
              <td><input type = "number" placeholder='10 Digit'></input></td>
          </tr>

          
          <tr>
              <td><label>OTP</label></td>
              <td><input type = "number" placeholder='6 Digit'></input></td>
          </tr>
      </tbody>
    </table>
    <button id="button">Sign In </button>

  </div>
  </Form>
  )
}


export default Signup;
