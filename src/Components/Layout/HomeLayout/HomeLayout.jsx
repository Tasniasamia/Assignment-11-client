import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Footer from '../../Pages/Shared/Footer/Footer';
import Header from '../../Pages/Shared/Header/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomeLayout = () => {
    return (
        <div className='max-w-6xl mx-auto'style={{overflowX:"hidden"}}>
       <Header></Header>
          
         
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <ToastContainer/>
        </div>
    );
};

export default HomeLayout;