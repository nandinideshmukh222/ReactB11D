import React, { useState } from 'react'

const StateInFuncComp = () => {

   
    //Syntax of useState hook in Func Component
    //const[stateName, func name to change state] = useState(Initial Value)

    const[ UserName, setUserName ] = useState("Guest")

    //Number state
    const[count, setCount] = useState(0)

    //Object State
    const[person, changePerson] = useState({Name:'Komal', City : "Pune"})

    const changeUser = () =>{
        setUserName('Admin');
    }

    const changeCount = () =>{
        setCount(count+1)
    }

    const updatePerson = ()=>{
        changePerson(prePerson => (
            {...prePerson, Name:"Nandini",City:"Mumbai"}
        ))
    }
   


  return (
    <>
        <h1>State in Functional Component</h1>
        <h2> Current user : {UserName} </h2>
        <button onClick={changeUser} id="first">   Login as  Admin </button>

        <h2 id="second" >Count : {count} </h2>
        <button onClick={changeCount}>     +   </button>

        <h2>Person : {JSON.stringify(person)}</h2>
        <button onClick={updatePerson} id='third'>    Change Person </button>

      

    </>
  )
}

export default StateInFuncComp
