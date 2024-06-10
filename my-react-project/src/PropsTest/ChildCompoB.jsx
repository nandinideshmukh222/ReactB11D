import React from "react";
 const ChildCompoB = (props) =>{
   console.log(props);
  
    return(
    <>
    <h2>Child Comp B {props.messg}</h2>
    <p>Person Details {JSON.stringify(p_obj)}</p>
    </>
    )
 }
 export default ChildCompoB;
