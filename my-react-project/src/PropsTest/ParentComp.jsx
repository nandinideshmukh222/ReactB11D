import React from "react";
import ChildCompoA from "./ChildCompoA";
import ChildCompoB from './ChildCompoB';
const ParentComp  = () =>{
    const message="Welcome from Parent Comp";
    let person = {
        name : 'Komal',
        age :'29',
        address :'Pune'}
    return(
        <>
        <h1>In parent Compo</h1>
        <ChildCompoA msg={message}  personObj={person}/>

        </>
    )
}
export default ParentComp;