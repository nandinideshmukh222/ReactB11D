import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
function UseEffectHookAssign(){
    const[products,setProducts]=useState([]);


    useEffect(()=>{
        console.log('Inside UseEffect hook with dependency array');
        APIProduct();
    },[]);
   
   async function APIProduct(){
    
    const URL= await axios.get('https://fakestoreapi.com/products')
    const data=URL.data;
    setProducts(data); 
     
   }
    return(
        <>
        <div className="app">
        <h3>Functional Compo UseEffect Hook</h3>
        </div>
        <Table striped bordered hover>
            
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Price</th>
          <th>Category</th>
          <th>Image</th>
        </tr>
      </thead>
      
      <tbody>
       {products.map((product)=>{
        return(
            <tr>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td><img src={product.image} alt="" style={{width:"20px"}} /></td>
            </tr>
        )
       })}
      </tbody>
    </Table>
    </>
    )
}

export default UseEffectHookAssign ;
