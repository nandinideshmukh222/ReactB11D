import React from "react";
import ClassCompCall from "./ClassCompCall";
import FunCompCall from "./FunCompCall";

const WelcomeCompCall =() =>{
    const name ='Nandini Nimbalkar';
    let person = {
        name : 'Komal',
        age :'29',
        address :'Pune'}
    return(
     <>
    <h1>Welcome to welcomecompcall</h1>
    <ClassCompCall myName ={name} CompanyName="TCS"  personObj={person}/>

    {/* <FunCompCall myName={name}/> */}
    </>
);
}
export default WelcomeCompCall;