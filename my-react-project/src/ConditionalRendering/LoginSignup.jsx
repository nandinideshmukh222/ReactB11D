import React from "react";
import { Form } from 'react-bootstrap/Form';
import Signup from "./Signup";

// import { Form } from 'react-bootstrap/Form';
import Login from "./Login";
  const LoginSignup = () => {
   const isLoggedIn =false;
    if(isLoggedIn){
                return  <Login/>
            }else{
                return <Signup/>
            }
        }
          export default LoginSignup;