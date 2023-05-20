import React, { useContext, useEffect, useState } from 'react';
import { authdata } from '../../Shared/Authprovider/Authprovider';
import useTitle from '../../../../../useTitle';
import Mytoydetails from '../Mytoydetails/Mytoydetails';
import { Container } from 'react-bootstrap';
import { useNavigation } from 'react-router-dom';
import Loadingbtn from '../../Shared/Loadingbtn/Loadingbtn';

const MyToy = () => {
    useTitle("MyToys");
    const navigate=useNavigation();
    // if(navigate.state=="loading"){
    //     return <Loadingbtn></Loadingbtn>
    // }
    const receivedata=useContext(authdata);

    const[data,setData]=useState([]);
    const[achivedata,setAchivedata]=useState("normal");
    // useEffect(()=>{
    //     fetch('http://localhost:9999/AllToys')
    //     .then(res=>res.json())
    //     .then(datas=>{console.log(datas);setDepend(datas)})
    // },[receivedata.user])

    // useEffect(()=>{
    //     fetch('http://localhost:9999/collectassendata',{
    //         method:"POST",
    //         headers:{
    //             "content-type":"application/json"
    //         },
    //         body:JSON.stringify(data)
    //     }).then(res=>res.json())
    //     .then(data=>console.log(data))


    // },[receivedata.user,data])





    // useEffect(()=>{
    //     fetch(`http://localhost:9999/mytoysdatas/${receivedata?.user?.email}`)
    //     .then(res=>res.json())
    //     .then(datas=>{console.log(datas);setData(datas)})
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // },[receivedata.user])
    
    useEffect(()=>{
        fetch(`https://assignment-11-server-tasniasamia.vercel.app/mytoysdatas?email=${receivedata?.user?.email}&sortdata=${achivedata}`)
        .then(res=>res.json())
        .then(datas=>{console.log(datas);setData(datas)})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[receivedata?.user?.email,achivedata])


    const asending=()=>{
        setAchivedata("asending");
    }
    const desending=()=>{
        setAchivedata("desending");
    }
    if(navigate.state=="loading"){
        return <Loadingbtn></Loadingbtn>
    }
    return (
        <div>

            <Container>
                <div className='text-center m-5'>
                    <button className='border-0 p-3 text-white'onClick={asending}style={{background:"hotpink"}}>Price-Ascending</button>
                    <button className='border-0 p-3 text-white'onClick={desending}style={{background:"skyblue"}}>Price-Desending</button>
                </div>
          <div className='table-responsive'>
           <table className="table caption-top">

  <thead>
    <tr>
      <th scope="col">Toy Name</th>
      <th scope="col">Seller Name</th>
      <th scope="col">Seller Email</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Remove</th>
      <th scope="col">Modify</th>
    </tr>
  </thead>
  <tbody>
    {
        data.map(index=><Mytoydetails key={index._id} indexdata={index} setData={setData} Data={data}></Mytoydetails>)
    }
    </tbody>
</table>
         </div>  
         </Container>
        </div>
    );
};

export default MyToy;