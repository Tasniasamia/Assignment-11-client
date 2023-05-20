import { useContext, useEffect, useState } from "react";
import "./Tab";
import { Link, useNavigation } from "react-router-dom";
import Loadingbtn from "../../../Shared/Loadingbtn/Loadingbtn";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { authdata } from "../../../Shared/Authprovider/Authprovider";
function Tabs() {
    const navigate=useNavigation();
    if(navigate.state=="loading"){
        return <Loadingbtn></Loadingbtn>
    }
const receivedata=useContext(authdata);
  const [toggleState, setToggleState] = useState(1);
  const[subcategory,setSubcategory]=useState([]);
  const[subdata,setSubdata]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:9999/subcategoytwist')
    .then(res=>res.json())
    .then(data=>{console.log(data);setSubdata(data)})
},[])
  useEffect(()=>{
      fetch('http://localhost:9999/subcategory')
      .then(res=>res.json())
      .then(data=>{console.log(data);setSubcategory(data)})
  },[])
  const toggleTab = (index) => {
    setToggleState(index);
  };
const toastfunction=()=>{
 if(!receivedata?.user){
  return  toast('Please sign in your account');
 }
}
  return (
    <div className="container"style={{marginTop:"200px"}}>
 <h1 className='text-center my-4'><span className='me-2'style={{color:"hotpink"}}>Shop</span><span style={{color:"skyblue"}}>Category</span> </h1>

      <div className="bloc-tabs">


        {subcategory.map(index=><button key={index._id}
          className={toggleState === (index.contnumber) ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(index.contnumber)}
        style={{color:"hotpink",fontWeight:"bold"}}>
          {index.name}
        </button>  )}
        </div>
        {/* <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Tab 1
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Tab 2
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Tab 3
        </button> */}
 <div className="content-tabs d-md-flex">

        {
            subdata.map(index=> <div key={index._id}
                className={toggleState === (index.count) ? "content  active-content" : "content"}
              >
                 
    <div className="card h-100 w-full ">
        <div className="text-center p-md-5 py-3">
      <img src={index.picture} className="card-img-top "style={{height:"200px"}} alt="car"/></div>
      <div className="card-body">
        <h5 className="card-title"style={{color:"hotpink"}}>{index.name}</h5>
       <div><span className="me-2"style={{fontSize:"20px",fontWeight:"bold"}}>Price</span>:<span>{index.price}</span></div>
       <div><span className="me-2"style={{fontSize:"20px",fontWeight:"bold"}}>Rating</span>:<span>{index.rating}</span></div>
       <button className="btn text-white mt-4"style={{background:"hotpink"}}onClick={toastfunction}>
        <Link to={`/subcategory/${index._id}`}className="text-decoration-none text-white">View Details</Link> </button>

      </div>
    </div>
  
              </div>
              
              
              
              
              )
        }
    
    </div>
       
        

      {/* <div classNameName="content-tabs d-flex">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>Content 1</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
            vel voluptatum?
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Content 2</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Content 3</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>
        </div>

        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>Content 1</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
            vel voluptatum?
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Content 2</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Content 3</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>
        </div>


      </div> */}
    </div>
  );
}

export default Tabs;