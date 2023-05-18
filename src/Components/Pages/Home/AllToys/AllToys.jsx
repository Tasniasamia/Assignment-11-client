import React, { useEffect, useState } from 'react';
import useTitle from '../../../../../useTitle';
import Alltoycard from '../Alltoycard/Alltoycard';
import { Container } from 'react-bootstrap';

const AllToys = () => {
    useTitle("All Toys")
    const[data,setData]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:9999/AllToys')
        .then(res=>res.json())
        .then(datas=>{console.log(datas);setData(datas)})
    },[])
    console.log(data);
    return (

        <div>
           
       
        <Container style={{marginTop:"50px"}}>
        <div className="input-group mb-3 w-50">
  <input type="text" className="form-control" placeholder="Search here" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <span className="input-group-text" id="basic-addon2">Search</span>
</div>
        <div className='table-responsive'>
           <table className="table caption-top">

  <thead>
    <tr>
      <th scope="col">Seller Name</th>
      <th scope="col">Toy Name</th>
      <th scope="col">SubCategory</th>
      <th scope="col">Price</th>
      <th scope="col">Available Quantity</th>
      <th scope="col">Details</th>
      <th scope="col">Add Product</th>
    </tr>
  </thead>
  <tbody>
  {data.map(index=><Alltoycard key={index._id} indexdata={index}></Alltoycard>)}

   
  </tbody>
</table>
           
        </div></Container>
         </div>
    );
};

export default AllToys;