import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authdata } from '../Authprovider/Authprovider';
import useTitle from '../../../../../useTitle';


function Login() {
    useTitle("Login");
    const receivedata=useContext(authdata);
    const [success,setSuccess]=useState(null);
    const [error,setError]=useState(null);
    const location=useLocation();
    let from=location.state?.from?.pathname || "/";
    console.log(location)
    const navigate=useNavigate();

    // function  github2 (){
    //     receivedata.github()
   
    // }
        
    // function googlesignin(){
    //     receivedata.googlesign()
    
       
    //        }   

    function signin(event){
        event.preventDefault();

        const email=event.target.email.value;
        const password=event.target.password.value;
        receivedata.signin(email,password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            receivedata.setUser(user);
            setSuccess("User has submited successfully");
            setError('');
            navigate(from);
            event.target.email.value="";
            event.target.password.value="";
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage);
            setSuccess('');
          });

    }


   
function google(){
    console.log(from);
    receivedata.googlesign().then((result) => {
         const user = result.user;
         console.log(user);
        receivedata.setUser(user);
        navigate(from);
        console.log(from);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        setError('');

        // ...
      });
}
   
  return (
    <div className='d-flex justify-content-center align-items-center my-5'style={{marginTop:"200px"}}>
    <div style={{border:"1px solid #f9f9f9",background:"#f9f9f9"}}className='p-3'>
    <h1 className='text-center'><span className='me-2'style={{color:"skyblue"}}>Login</span><span style={{color:"hotpink"}}>Now</span></h1>
    <form onSubmit={signin}>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control"name="email" id="exampleInputEmail1" aria-describedby="emailHelp"required/>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control"name="password" id="exampleInputPassword1"required/>
    </div>
   
    <div className='text-center  p-1 rounded'style={{background:"skyblue"}}>
    <input type="submit" className=" text-white"value="Sign in"style={{border:"0",boxShadow:"0",background:"skyblue"}}/></div>
    <p className='text-danger'>{error}</p>
    <p className='text-success'>{success}</p>
    <p>Do haven't a account?  <Link to="/resister"className='text-decoration-none'style={{color:"hotpink"}}>Create new account</Link>   </p>
  </form>
 
    <div className='text-center'>
  <button className='btn  me-2'onClick={google} style={{background:"skyblue",color:"white"}}><i className="fa-brands fa-google me-1"style={{color:"hotpink"}}></i>Continue With Google</button>
  </div>
 
  
  </div>
 
  </div>
  );
  }

export default Login;