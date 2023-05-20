import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useNavigation } from 'react-router-dom';
import { authdata } from '../Authprovider/Authprovider';

function Resister() {
  
    const [success,setSuccess]=useState(null);
    const [error,setError]=useState(null);
    // const {resister,displayname,signout}=useContext(authdata);
    const receivedata=useContext(authdata)
    function Resister(event){
        event.preventDefault();
        const name=event.target.name.value;
        const email=event.target.email.value;
        const password=event.target.password.value;
        const photo=event.target.photo.value;
        if(email.length==0 && password.length==0){
            setError("please fill up ");
        }
        else if(password.length<6){
            setError("Password length is less than 6");
        }
        
        console.log(email,password);
        receivedata.resister(email,password)
        .then((userCredential) => {
            
            const user = userCredential.user;
            console.log(user);
            setSuccess("User has submited successfully");
            receivedata.signout();
            setError("");
      
            receivedata.displayname(name,photo)
            .then(() => {
              // Profile updated!
              // ...
            }).catch((error) => {
              // An error occurred
              // ...
            });
            // receivedata.signout();
            event.target.name.value="";
            event.target.email.value="";
            event.target.password.value="";
             event.target.photo.value="";
           
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage);
            setSuccess("");
          });

          
          

    }
   
  return (
    <div className='d-flex justify-content-center align-items-center'>
    <div style={{width:"40%",background:"#f9f9f9",padding:"15px",marginTop:"70px"}}>
    <h1 className='text-center'><span className='me-2'style={{color:"skyblue"}}>Sign</span><span style={{color:"hotpink"}}>Up</span></h1>
    <form onSubmit={Resister}>
    <div className="mb-3">
      <label htmlFor="exampleInputname1" className="form-label">Your Name</label>
      <input type="text" className="form-control"name="name" id="exampleInputName1" aria-describedby="nameHelp"required/>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Your Email</label>
      <input type="email" className="form-control"name="email" id="exampleInputEmail1" aria-describedby="emailHelp"required/>
      {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
    </div>
    
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Your Password</label>
      <input type="password" className="form-control"name="password" id="exampleInputPassword1"required/>
    </div>
    <div className="mb-3">
   
      <label htmlFor="exampleInputphotoEmail1" className="form-label">Photo Url</label>

      <input type="text" id="photo" name="photo"className="form-control"  />      </div>
    
    <button type="submit" className="btn text-white"style={{background:"hotpink"}}>Resister</button>
    <p className='text-danger'>{error}</p>
    <p className='text-success'>{success}</p>
    <p>Already have a account?  <Link to="/login"className='text-decoration-none'style={{color:"hotpink"}}>Sign In</Link>   </p>
  </form></div>
  </div>
  )
}

export default Resister;