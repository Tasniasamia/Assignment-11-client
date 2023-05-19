import React, { useContext, useEffect, useState } from 'react';
import { authdata } from '../../Shared/Authprovider/Authprovider';
import useTitle from '../../../../../useTitle';

const MyToy = () => {
    useTitle("MyToys");
    const receivedata=useContext(authdata);

    const[data,setData]=useState([]);

    useEffect(()=>{
        fetch(`http://localhost:9999/mytoys/${receivedata?.user?.email}`)
        .then(res=>res.json())
        .then(datas=>{console.log(datas);setData(datas)})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    return (
        <div>
            
        </div>
    );
};

export default MyToy;