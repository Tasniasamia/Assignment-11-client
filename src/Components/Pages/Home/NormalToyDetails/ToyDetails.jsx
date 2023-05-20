import React from 'react';
import './ToyDetails.css';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import useTitle from '../../../../../useTitle';
import Loadingbtn from '../../Shared/Loadingbtn/Loadingbtn';
const ToyDetails = () => {
    useTitle("ToyDetails");
    const loaddata=useLoaderData();
    const navigation=useNavigation();
    if(navigation.state=="loading"){
        return <Loadingbtn></Loadingbtn>
    }
 
   
    return (
        <div style={{marginTop:"100px"}}className='d-flex justify-content-center'>
            {/* <Container> */}
             <div className="card h-100 w-50">
      <img src={loaddata.toyspik} className="card-img-top img-fluid"style={{height:"300px"}} alt="toys"/>
      <div className="card-body">
        <p style={{color:"hotpink",fontSize:"25px",fontWeight:"bold"}}> {loaddata.toyname}</p>
        <p><span style={{fontWeight:"bold"}}className='me-3'>Seller Name:</span> <span>{loaddata.sellername}</span> </p>
        <p><span style={{fontWeight:"bold"}}className='me-3'>Seller Email:</span><span>{loaddata.Selleremail}</span></p>
        <p><span style={{fontWeight:"bold"}}className='me-3'>Price :</span><span>{loaddata.price}</span></p>
        <p><span style={{fontWeight:"bold"}}className='me-3'>Ratings:</span><span>{loaddata.rating}</span></p>
        <p><span style={{fontWeight:"bold"}}className='me-3'>Available Quantity:</span><span>{loaddata.quantity}</span></p>
        <p className="card-text"><span style={{fontWeight:"bold"}}className='me-3'>Description:</span>{loaddata.des}</p>
      </div>
    </div>
        </div>
    );
};

export default ToyDetails;