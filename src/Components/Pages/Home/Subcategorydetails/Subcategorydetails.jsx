import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../../../useTitle';

const Subcategorydetails = () => {
    useTitle("Toydetails")
    const loaddata=useLoaderData();
    console.log(loaddata);
    return (
        <div style={{marginTop:"100px"}}className='d-flex justify-content-center'>
            {/* <Container> */}
             <div className="card h-100 w-50">
      <img src={loaddata.picture} className="card-img-top img-fluid"style={{height:"300px"}} alt="..."/>
      <div className="card-body">
        <p><span>Toy Name:</span> <span>{loaddata.name}</span></p>
        <p><span>Seller Name:</span> <span>{loaddata.sellername}</span> </p>
        <p><span>Seller Email:</span><span>{loaddata.selleremail}</span></p>
        <p><span>Price :</span><span>{loaddata.price}</span></p>
        <p><span>Ratings:</span><span>{loaddata.rating}</span></p>
        <p><span>Available Quantity:</span><span>{loaddata.quantity}</span></p>
        <p className="card-text">{loaddata.des}</p>
      </div>
    </div>
        </div>
    );
};

export default Subcategorydetails;
