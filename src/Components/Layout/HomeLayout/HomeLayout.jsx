import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Footer from '../../Pages/Shared/Footer/Footer';
import Header from '../../Pages/Shared/Header/Header';

const HomeLayout = () => {
    return (
        <div className='max-w-6xl mx-auto'style={{overflowX:"hidden"}}>
       <Header></Header>
          
         
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;