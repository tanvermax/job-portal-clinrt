import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../pages/Shared/Navber';
import Footer from '../pages/Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div >
            <div className='max-w-6xl mx-auto bg-slate-100'>
            <Navber></Navber>
            </div>
            <div className='min-h-[calc(100vh-280px)]'>
            <Outlet></Outlet>
          
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;