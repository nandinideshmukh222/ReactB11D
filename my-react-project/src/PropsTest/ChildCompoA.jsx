import React from "react";
import ChildCompoB from "./ChildCompoB";
 const ChildCompoA = (props) =>{
   
    return(
    <>
    <h2>Child Comp A {props.msg}  {props.personobj}</h2>
    <ChildCompoB messg={props.msg} p_obj={personobj}  />
    </>
    )
 }
 export default ChildCompoA;