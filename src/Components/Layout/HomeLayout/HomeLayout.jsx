import React from 'react';
import Header from '../../Pages/Shared/Header';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Header></Header>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default HomeLayout;