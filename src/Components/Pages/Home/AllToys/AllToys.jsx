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
    const[searchitem,setSearchItem]=useState(null);
    const searchvalue=()=>{
fetch(`http://localhost:9999/Alltoysdata/${searchitem}`)
.then(res=>res.json())
.then(data=>setData(data))

    }
    return (

        <div>
           
       
        <Container style={{marginTop:"50px"}}>
        <div className="input-group mb-3 w-50">
  <input type="text"onChange={(e)=>setSearchItem(e.target.value)} className="form-control" placeholder="Search here" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <button className="btn btn-primary"onClick={searchvalue} id="basic-addon2">Search</button>
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