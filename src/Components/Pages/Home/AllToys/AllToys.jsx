import React, { useEffect, useState } from 'react';
import useTitle from '../../../../../useTitle';
import Alltoycard from '../Alltoycard/Alltoycard';
import { Container } from 'react-bootstrap';
import { useNavigate, useNavigation } from 'react-router-dom';
import Loadingbtn from '../../Shared/Loadingbtn/Loadingbtn';

const AllToys = () => {
    useTitle("All Toys")
    const navigate=useNavigation();
    // if(navigate.state=="loading"){
    //     return <Loadingbtn></Loadingbtn>
    // }
    // eslint-disable-next-line react-hooks/rules-of-hooks
 
   
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const[data,setData]=useState([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
        fetch('https://assignment-11-server-tasniasamia.vercel.app/AllToys')
        .then(res=>res.json())
        .then(datas=>setData(datas))
    },[])
    // console.log(data);
    const[searchitem,setSearchItem]=useState(null);
    const searchvalue=()=>{
fetch(`https://assignment-11-server-tasniasamia.vercel.app/Alltoysdata/${searchitem}`)
.then(res=>res.json())
.then(data=>setData(data))

    }
    if(navigate.state=="loading"){
        return <Loadingbtn></Loadingbtn>
    }
    return (

        <div>
           
       
        <Container style={{marginTop:"50px"}}>
        <div className="input-group mb-3 w-50">
  <input type="text"onChange={(e)=>setSearchItem(e.target.value)} className="form-control" placeholder="Search here" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <button className="btn text-white"style={{background:"skyblue"}}onClick={searchvalue} id="basic-addon2">Search</button>
</div>
        <div className='table-responsive'>
           <table className="table caption-top">

  <thead>
    <tr>
      <th scope="col"style={{color:"skyblue"}}>Seller Name</th>
      <th scope="col"style={{color:"skyblue"}}>Toy Name</th>
      <th scope="col"style={{color:"skyblue"}}>SubCategory</th>
      <th scope="col"style={{color:"skyblue"}}>Price</th>
      <th scope="col"style={{color:"skyblue"}}>Available Quantity</th>
      <th scope="col"style={{color:"skyblue"}}>Details</th>
      {/* <th scope="col">Add Product</th> */}
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