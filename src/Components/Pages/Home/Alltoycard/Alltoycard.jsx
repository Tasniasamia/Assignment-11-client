import React from 'react';
import './Alltoycard.css';
import { Link, useNavigation } from 'react-router-dom';
import Loadingbtn from '../../Shared/Loadingbtn/Loadingbtn';
const Alltoycard = (props) => {
    const navigate=useNavigation();
    if(navigate.state=="loading"){
        return <Loadingbtn></Loadingbtn>
    }
    const propsdata=props.indexdata;
//     function collectvalue(){
//         const alluser={
// sellername:propsdata.sellername,
// toyname:propsdata.toyname,
// selleremail:propsdata.Selleremail,
// price:propsdata.price,
// quantity:propsdata.quantity,
// decription:propsdata.des,



//         }


//         fetch('http://localhost:9999/getmytoydata',{
//             method:"POST",
//             headers:{
//                 "content-type":"application/json"
//             },
//             body:JSON.stringify(alluser)
//         })
//         .then(res=>res.json())
//         .then(data=>console.log(data))
//     }

    return (
         <tr>
        <td>{propsdata.sellername}</td>
        <td>{propsdata.toyname}</td>
        <td>{propsdata.subcategory}</td>
        <td>{propsdata.price}</td>
        <td>{propsdata.quantity
}</td>
<td><button className='btn text-white'style={{background:"hotpink"}}><Link to={`/alltoy/${propsdata._id}`}className='text-decoration-none text-white'>View Details</Link> </button></td>
{/* <td><button className='btn text-white'style={{background:"skyblue"}}onClick={collectvalue}>Add</button></td> */}

      </tr>
    );
};

export default Alltoycard;