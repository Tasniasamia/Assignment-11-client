import React, { useContext } from 'react';
import { authdata } from '../../Shared/Authprovider/Authprovider';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../../../useTitle';

const Update = () => {
    useTitle("Update Toy");
    const loaddata=useLoaderData();
    console.log(loaddata);
    const receivedata=useContext(authdata);
console.log(receivedata);
const updatedata=(event)=>{

    event.preventDefault();
  
    
    const price=parseInt(event.target.price.value);

    const quantity=parseInt(event.target.quantity.value);
    const des=event.target.des.value;


    const user={
        price,quantity,des
    }
    console.log(user);

    fetch(`http://localhost:9999/mytoyupdate/${loaddata._id}`,{
        method:"PATCH",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(user)
    }).then(res=>res.json()).then(data=>console.log(data))

    // event.target.toyspik.value="";
    // event.target.toyname.value="";
    // event.target.sellername.value="";
    // event.target.email.value="";
    // event.target.subcategory.value="";
    // event.target.rating.value="";
    // event.target.price.value="";
    // event.target.quantity.value="";
    // event.target.des.value="";
  
}






    return (
        <div style={{marginTop:"50px"}}>
        <h1 className='text-center'><span className='me-2'style={{color:"hotpink"}}>Add</span><span style={{color:"skyblue"}}>Toys</span> </h1> 
  <form onSubmit={updatedata}>
   <div className='row row-cols-1 row-cols-md-2 p-5'>

  











<div className="mb-3 col">
  <label htmlFor="exampleInputPrice1" className="form-label">Price</label>
  <input type="text" className="form-control"name="price" id="exampleInputPrice1" aria-describedby="priceHelp"/>
</div>





<div className="mb-3 col">
  <label htmlFor="exampleInputquantity1" className="form-label">Available Quantity</label>
  <input type="text" className="form-control"name="quantity" id="exampleInputQuantity1" aria-describedby="quantityHelp"/>
</div>

 <div className="mb-3 col">
  <label htmlFor="exampleInputDesc1" className="form-label">Details Description</label><br/>
  <textarea name="des" id="des" cols="88" rows="5"style={{border:"1px solid gray"}}className='p-3'placeholder='Enter Describtion '></textarea>

</div>

</div>

   <div className='mx-auto text-center '>
<button type="submit" className="btn text-white border-0 boshaw"style={{background:"hotpink"}}>Update Data</button>
</div>
   
   </form>
    </div>
    );
};

export default Update;