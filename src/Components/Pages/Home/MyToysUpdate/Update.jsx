import React, { useContext } from 'react';
import { authdata } from '../../Shared/Authprovider/Authprovider';
import { useLoaderData, useNavigation } from 'react-router-dom';
import useTitle from '../../../../../useTitle';
import Loadingbtn from '../../Shared/Loadingbtn/Loadingbtn';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Update = () => {
    const navigate=useNavigation();
   
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

    fetch(`https://assignment-11-server-tasniasamia.vercel.app/mytoyupdate/${loaddata._id}`,{
        method:"PATCH",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(user)
    }).then(res=>res.json()).then(data=>{console.log(data)
    
    if(data.modifiedCount>0){
toast('Updated Your Data');
    }
})

 
    event.target.price.value="";
    event.target.quantity.value="";
    event.target.des.value="";
  
}



if(navigate.state=="loading"){
    return <Loadingbtn></Loadingbtn>
}


    return (
        <div style={{marginTop:"50px"}}>
        <h1 className='text-center'><span className='me-2'style={{color:"hotpink"}}>Update</span><span style={{color:"skyblue"}}>Toy</span> </h1> 
  <form onSubmit={updatedata}>
   <div className='row row-cols-1 row-cols-md-2 p-5'>

  











<div className="mb-3 col">
  <label htmlFor="exampleInputPrice1" className="form-label"style={{color:"hotpink"}}>Price</label>
  <input type="text" className="form-control"name="price" id="exampleInputPrice1" aria-describedby="priceHelp"defaultValue={loaddata.price}/>
</div>





<div className="mb-3 col">
  <label htmlFor="exampleInputquantity1" className="form-label"style={{color:"hotpink"}}>Available Quantity</label>
  <input type="text" className="form-control"name="quantity" id="exampleInputQuantity1" aria-describedby="quantityHelp"defaultValue={loaddata.quantity}/>
</div>

 <div className="mb-3 col">
  <label htmlFor="exampleInputDesc1" className="form-label"style={{color:"hotpink"}}>Details Description</label><br/>
  <textarea name="des" id="des" cols="88" rows="5"style={{border:"1px solid gray"}}className='p-3'placeholder='Enter Describtion 'defaultValue={loaddata.des}></textarea>

</div>

</div>

   <div className='mx-auto text-center '>
<button type="submit" className="btn text-white border-0 boshaw"style={{background:"hotpink"}}>Update Item</button>
</div>
   
   </form>
    </div>
    );
};

export default Update;