import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../pages/shared/Navigation';

const MainLayout = () => {
    return (
        <>
            <div className='fixed w-full h-40 bg-tealnew-900 rounded-b-xl'>
                <Navigation />
            </div>
            <div className='pt-40 w-11/12 mx-auto'>
                <Outlet />
            </div>
        </>
    );
};

export default MainLayout;