import React from 'react';
import './Alltoycard.css';
import { Link } from 'react-router-dom';
const Alltoycard = (props) => {
    const propsdata=props.indexdata;
    return (
         <tr>
        <td>{propsdata.sellername}</td>
        <td>{propsdata.toyname}</td>
        <td>{propsdata.subcategory}</td>
        <td>{propsdata.price}</td>
        <td>{propsdata.quantity
}</td>
<td><button className='btn text-white'style={{background:"hotpink"}}><Link to={`/alltoy/${propsdata._id}`}className='text-decoration-none text-white'>View Details</Link> </button></td>
<td><button className='btn text-white'style={{background:"skyblue"}}>Add</button></td>

      </tr>
    );
};

export default Alltoycard;