import React from 'react';
import './ToyDetails.css';
import { useLoaderData } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import useTitle from '../../../../../useTitle';
const ToyDetails = () => {
    const loaddata=useLoaderData();
    useTitle("ToyDetails")
    return (
        <div style={{marginTop:"100px"}}className='d-flex justify-content-center'>
            {/* <Container> */}
             <div className="card h-100 w-50">
      <img src={loaddata.toyspik} className="card-img-top img-fluid"style={{height:"300px"}} alt="..."/>
      <div className="card-body">
        <p><span>Toy Name:</span> <span>{loaddata.toyname}</span></p>
        <p><span>Seller Name:</span> <span>{loaddata.sellername}</span> </p>
        <p><span>Seller Email:</span><span>{loaddata.Selleremail}</span></p>
        <p><span>Price :</span><span>{loaddata.price}</span></p>
        <p><span>Ratings:</span><span>{loaddata.rating}</span></p>
        <p><span>Available Quantity:</span><span>{loaddata.quantity}</span></p>
        <p className="card-text">{loaddata.des}</p>
      </div>
    </div>
        </div>
    );
};

export default ToyDetails;