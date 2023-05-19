import React, { useContext, useEffect, useState } from 'react';
import { authdata } from '../../Shared/Authprovider/Authprovider';
import useTitle from '../../../../../useTitle';
import Mytoydetails from '../Mytoydetails/Mytoydetails';
import { Container } from 'react-bootstrap';

const MyToy = () => {
    useTitle("MyToys");
    const receivedata=useContext(authdata);

    const[data,setData]=useState([]);
    const[achivedata,setAchivedata]=useState(receivedata?.user?.email);
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





    useEffect(()=>{
        fetch(`http://localhost:9999/mytoysdatas/${receivedata?.user?.email}`)
        .then(res=>res.json())
        .then(datas=>{console.log(datas);setData(datas)})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[receivedata.user])
    // useEffect(()=>{
    //     fetch(`http://localhost:9999/mytoysdatasallitems/${achivedata}`)
    //     .then(res=>res.json())
    //     .then(datas=>{console.log(datas);setData(datas)})
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // },[receivedata.user])
  
    // const asending=()=>{
    //     setAchivedata("price");
    // }
    // const desending=()=>{
    //     setAchivedata("quantity");
    // }
    return (
        <div>

            <Container>
                {/* <div>
                    <button className='btn btn-primary'onClick={asending}>Acending</button>
                    <button className='btn btn-secondary'onClick={desending}>Desending</button>
                </div> */}
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