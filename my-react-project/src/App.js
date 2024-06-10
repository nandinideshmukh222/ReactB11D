// import logo from './logo.svg';
import './App.css';
// import Welcome from './Welcome';
// import ClassCompBody from './ClassCompBody';
// import ClassComponent from './ClassCompoAssign';
// import ArrowFunction from './ArrowFunAssign';
// import FunctionExpression from './FunctionExpAssign';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

import JavaScriptAF from './ArrowFunction/JavaScriptAF';
import ReactAF from './ArrowFunction/ReactAF';
import HeaderAF from './ArrowFunction/HeaderAF';
import JavaScriptCC from './ClassCompoAssign/JavaScriptCC';
import HeaderCC from './ClassCompoAssign/HeaderCC';

import ReactCC from './ClassCompoAssign/ReactCC';
import HeaderFE from './FunctionExpression/HeaderFE';
import ReactFE from './FunctionExpression/ReactFE';
import JavaScriptFE from './FunctionExpression/JavaScriptFE';

import FragmentTest from './FragmentTest/FragmentTest';

import React from 'react';
import WelcomeCompCall from './CompCall/WelcomeCompCall';
import ParentComp from './PropsTest/ParentComp';


import ConditionRenderingAssign from './ConditionalRendering/RenderingLoginAssign';
import StateInClassComp from './StateInClassComp/StateInClassComp';
import FormExample from './ConditionalRendering/Login';

import login from './ConditionalRendering/Login';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import StateInClassCount from './StateInClassComp/StateInCaseCountAssign';
import ConditionalRen from './ConditionalRendering/ConditionalRen';
import LoginSignup from './ConditionalRendering/LoginSignup';
import StateInFunComp from './StateInClassComp/StateFunComp';
import StateInFuncComp from './StateInClassComp/StateFunComp';
import Main from './RoutingTest/Main';
import LifeCycleMethods from './ClassCompLifeCycle/LifeCycleMethods';
import LifeCycleFMethod from './FunctionalCompLifeCycle/LifeCycleFMethod';
import DailyRoutine from './ClassCompLifeCycle/DailyRoutine';
import APIIntUsingFetch from './API_Integration/APIIntUsingFetch';
import APIIntUsingAxios from './API_Integration/APIIntUsingAxios';
import UseEffectHook from './API_Integration/UseEffectHook';
import FetchAPIAssignment from './API_Integration/FetchAPIAssignment';
import FetchProductAPIAssign from './API_Integration/FetchProductAPIAssign';
import UseEffectHookAssign from './API_Integration/UseEffectHookAssign';





function App() {
  return (
    <React.Fragment>
      {/* <h1>I am able to setup ReactJS project successfully</h1> */}
   {/* <Welcome/> */}
   {/* <ClassCompBody/> */}
   {/* <ClassComponent/> */}
     {/* <ArrowFunction/> */}
      {/* <FunctionExpression/> */}
  {/* <HeaderAF/>
   <JavaScriptAF/>
   <ReactAF/> */}
   
   {/* <HeaderCC/> 
   <JavaScriptCC/>
   <ReactCC/>
  */}

  {/* <HeaderFE/>
  <ReactFE/>
  <JavaScriptFE/>
  */}
  {/* <FragmentTest/> */}
  {/* <WelcomeCompCall/> */}
  {/* <ParentComp/> */}

{/* <ConditionRenderingAssign/> */}
{/* <StateInClassComp/> */}
{/* <login/> */}
{/* <StateInClassCount/> */}


  {/* <ConditionalRen/> */}
{/* <LoginSignup/> */}
{/* <StateInFuncComp/> */}

{/* <Main/> */}
{/* <LifeCycleMethods/> */}
{/* <DailyRoutine/> */}
{/* <LifeCycleFMethod/> */}

{/* <APIIntUsingFetch/>   */}
{/* <APIIntUsingAxios/> */}
 {/* <FetchProductAPIAssign/> */}
{/* <UseEffectHook/> */}
<UseEffectHookAssign/>
  </React.Fragment>
 
  ); 
}

export default App;
