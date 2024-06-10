import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const Login = () => {
  return (
  
      <div class="login">
	<div class="screen">
		<div class="screen__content">
			<form class="login">
			
      <h1> Login Page</h1>
      <table>
        <tbody>
            <tr>
                <td><label>Email Id</label></td>
                <td><input type = "text"></input></td>
            </tr>
            <tr>
                <td><label>Password</label></td>
                <td><input type = "number" ></input></td>
            </tr>
        </tbody>
      </table>
      <button id="button">Login </button>



			</form>
			
		</div>
		
	</div>
</div>
  
  )
}

export default Login;
