import { useContext, useEffect, useState } from "react";
import "./Tab";
import { Link, useNavigation } from "react-router-dom";
import Loadingbtn from "../../../Shared/Loadingbtn/Loadingbtn";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Rating from 'react-rating';
import {AiFillStar,AiOutlineStar} from "react-icons/ai";
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
    fetch('https://assignment-11-server-tasniasamia.vercel.app/subcategoytwist')
    .then(res=>res.json())
    .then(data=>{console.log(data);setSubdata(data)})
},[])
  useEffect(()=>{
      fetch('https://assignment-11-server-tasniasamia.vercel.app/subcategory')
      .then(res=>res.json())
      .then(data=>{console.log(data);setSubcategory(data)})
  },[])
  useEffect(() => {
    AOS.init();
  }, [])
  const toggleTab = (index) => {
    setToggleState(index);
  };
const toastfunction=()=>{
 if(!receivedata?.user){
  return  toast('Please sign in your account');
 }
}
if(navigate.state=="loading"){
    return <Loadingbtn></Loadingbtn>
}
  return (
    <div className="container" data-aos="fade-up"style={{marginTop:"200px"}}>
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
        <h5 className="card-title">{index.name}</h5>
       <div className="my-3"><span style={{fontSize:"20px",fontWeight:"bold"}}>$</span><span>{index.price}</span></div>
       <div> <Rating
  // eslint-disable-next-line react/prop-types
  placeholderRating={index.rating}
  readonly
  emptySymbol={<AiOutlineStar/>}
  placeholderSymbol={<AiFillStar/>}
  fullSymbol={<AiFillStar/>}
// eslint-disable-next-line react/prop-types
className='me-2'
/> {index.rating}</div>
       <button className="btn text-white mt-4"style={{background:"skyblue"}}onClick={toastfunction}>
        <Link to={`/subcategory/${index._id}`}className="text-decoration-none text-white">View Details</Link> </button>

      </div>
    </div>
  
              </div>
              
              
              
              
              )
        }
    
    </div>
       
        

     
    </div>
  );
}

export default Tabs;