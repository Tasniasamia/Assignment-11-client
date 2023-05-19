import React from 'react';
import { Link } from 'react-router-dom';

const Mytoydetails = (props) => {
    const propsdata=props.indexdata;
    function deletefunction(id){
        
fetch(`http://localhost:9999/mytoysdel/${id}`,{
    method:"DELETE"
}).then(res=>res.json()).then(data=>{console.log(data);

    if(data.deletedCount>0){
        const filterdata=props.Data.filter(index=>index._id!==id);
        props.setData(filterdata);
    }


})

           
                
    }
    return (
        <tr>
        <td>{propsdata.toyname}</td>
        <td>{propsdata.sellername}</td>
        <td>{propsdata.Selleremail}</td>
        <td>{propsdata.price}</td>
        <td>{propsdata.quantity}</td>
        <td><button className='btn text-white'style={{background:"hotpink"}}onClick={()=>deletefunction(propsdata._id)}>Delete</button></td>
        <td><button className='btn text-white'style={{background:"skyblue"}}><Link to={`/updatedata/${propsdata._id}`} className='text-decoration-none text-white'>Update</Link> </button></td>

        </tr>
    );
};

export default Mytoydetails;