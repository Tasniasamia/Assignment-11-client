import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authdata } from '../Authprovider/Authprovider';
import Loadingbtn from '../Loadingbtn/Loadingbtn';

// eslint-disable-next-line react/prop-types
const Private_route = ({children}) => {
    const {user,loading}=useContext(authdata);
    const location=useLocation();
    console.log(location);
    console.log(loading);
    console.log("hello");
    if(user){
        return children
    }
    if(loading){
        return <Loadingbtn/>
    }
    return <Navigate to="/Login"state={{from:location}}></Navigate>
};

export default Private_route;