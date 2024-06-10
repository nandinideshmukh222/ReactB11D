import React from "react";

class ClassCompCall extends React.Component{
render(){
    console.log(this.props);
 const {myName,CompanyName,personObj}=this.props;  
 console.log(personObj);
    return(
        <>
        {/* <h3>Welcome to classcompcall {this.props.myName}</h3>
        <h3>Welcome to classcompcall  Company Name{this.props.CompanyName}</h3>
       */}
        <h3>Welcome to classcompcall Name :  {myName}</h3>
        <h3>Welcome to classcompcall  Company Name :  {CompanyName}</h3>
        <p>Person Details : {JSON.stringify(personObj)}</p>
        </>
    )
}
}
export default ClassCompCall;