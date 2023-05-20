import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Footer from '../../Pages/Shared/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header2 from '../../Pages/Shared/Header2/Header2';

const HomeLayout = () => {
    return (
        <div className='max-w-6xl mx-auto'style={{overflowX:"hidden"}}>
     
          <Header2></Header2>
         
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <ToastContainer/>
        </div>
    );
};

export default HomeLayout;