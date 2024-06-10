import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import ContanctUs from './ContanctUs';
import Services from './Services';
const Main = () => {
  return (
    <>
      <h1>Codemind Main Page</h1>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
       
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/services">Services</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/contactus">Contact Us</a>
        </li>

      </ul>
     
   
  </div>

    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
    <BrowserRouter>
    <Routes>
        <Route exact path='/home'element={<Home/>}></Route>
        <Route exact path='/contactus'element={<ContanctUs/>}></Route>
       <Route exact path='/services'element={<Services/>}></Route>
    </Routes>
    </BrowserRouter>

    
    </>
  )
}

export default Main;

