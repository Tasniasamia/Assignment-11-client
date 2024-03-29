import React, { useContext } from 'react';
import useTitle from '../../../../../useTitle';
import { authdata } from '../../Shared/Authprovider/Authprovider';
import './AddToy.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddToy = () => {
    useTitle("Add a Toy")

//function start


const receivedata=useContext(authdata);
console.log(receivedata);
const getallvalues=(event)=>{

    event.preventDefault();
    const toyspik=event.target.toyspik.value;
    const toyname=event.target.toyname.value;
    const sellername=event.target.sellername.value;
    const Selleremail=event.target.email.value;
    // const email=receivedata.user.email;
    const subcategory=event.target.subcategory.value;
    const rating=parseFloat(event.target.rating.value);
    const price=parseInt(event.target.price.value);

    const quantity=parseInt(event.target.quantity.value);
    const des=event.target.des.value;

if((toyspik.length!== 0) && (toyname.length !== 0) && (sellername.length !== 0 )&&(Selleremail.length !== 0 )&&(subcategory.length!==0)&&(rating.length!==0)&&(price.length!==0)&&(quantity.length!==0)&&(des.length!==0)) {


    const user={
        toyspik,toyname,sellername,Selleremail,subcategory,rating,price,quantity,des
    }
    console.log(user);
   
    fetch('https://assignment-11-server-tasniasamia.vercel.app/AddToy',{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(user)
    }).then(res=>res.json()).then(data=>{console.log(data);
    if(data.insertedId){
      toast("You have Added");
    }
    
    })}

    
    event.target.toyspik.value="";
    event.target.toyname.value="";
    event.target.sellername.value="";
    event.target.email.value="";
    event.target.subcategory.value="";
    event.target.rating.value="";
    event.target.price.value="";
    event.target.quantity.value="";
    event.target.des.value="";
}













//function end
    return (
        <div style={{marginTop:"50px"}}>
            <h1 className='text-center'><span className='me-2'style={{color:"hotpink"}}>Add</span><span style={{color:"skyblue"}}>Toys</span> </h1> 
      <form onSubmit={getallvalues}>
       <div className='row row-cols-1 row-cols-md-2 p-5'>

      




    <div className="mb-3 col">
      <label htmlFor="toyspik" className="form-label"style={{color:"hotpink"}}>Toys Picture</label>
      <input type="text" className="form-control"name="toyspik" id="exampleInputtoyspik1" aria-describedby="toyspikHelp"required/>
    </div>




    <div className="mb-3 col">
      <label htmlFor="exampleInputtoyname1" className="form-label"style={{color:"hotpink"}}>Toys Name</label>
      <input type="text" className="form-control"name="toyname" id="exampleInputtoyname1" aria-describedby="toynameHelp"required/>
    </div>



    <div className="mb-3 col">
      <label htmlFor="exampleInputsellername1" className="form-label"style={{color:"hotpink"}}>Seller Name</label>
      <input type="text" className="form-control"name="sellername" id="exampleInputtoyname1" aria-describedby="sellerHelp"required/>
    </div>




    <div className="mb-3 col">
      <label htmlFor="exampleInputEmail1" className="form-label"style={{color:"hotpink"}}>Seller Email</label>
      <input type="email" className="form-control"name="email" id="exampleInputEmail1" aria-describedby="emailHelp"required/>
    </div>



    <div className="mb-3 col">
      <label htmlFor="exampleInputsubcategory1" className="form-label"style={{color:"hotpink"}}>Subcategory</label>
      <input type="text" className="form-control"name="subcategory" id="exampleInputsubcategory1" aria-describedby="subcategoryHelp"required/>
    </div>


    <div className="mb-3 col">
      <label htmlFor="exampleInputPrice1" className="form-label"style={{color:"hotpink"}}>Price</label>
      <input type="text" className="form-control"name="price" id="exampleInputPrice1" aria-describedby="priceHelp"required/>
    </div>



    <div className="mb-3 col">
      <label htmlFor="exampleInputRating1" className="form-label"style={{color:"hotpink"}}>Ratings</label>
      <input type="text" className="form-control"name="rating" id="exampleInputRating1" aria-describedby="ratingHelp"required/>
    </div>

    <div className="mb-3 col">
      <label htmlFor="exampleInputquantity1" className="form-label"style={{color:"hotpink"}}>Available Quantity</label>
      <input type="text" className="form-control"name="quantity" id="exampleInputQuantity1" aria-describedby="quantityHelp"required/>
    </div>

     <div className="mb-3 col">
      <label htmlFor="exampleInputDesc1" className="form-label"style={{color:"hotpink"}}>Details Description</label><br/>
      <textarea name="des" id="des" cols="88" rows="5"style={{border:"1px solid gray"}}className='p-3'placeholder='Enter Describtion '></textarea>

    </div>

    </div>
   
       <div className='mx-auto text-center '>
    <button type="submit" className="btn text-white border-0 boshaw"style={{background:"hotpink"}}>Add Item</button>
    </div>
       
       </form>
        </div>
    );
};

export default AddToy;