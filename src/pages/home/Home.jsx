import { Button } from '@material-tailwind/react';
import React from 'react';
import { FaGoogle } from 'react-icons/fa';

const Home = () => {
    return (
        <div className='my-5'>
            <Button className='w-full bg-teal-900 flex items-center gap-2 font-normal capitalize justify-center'><FaGoogle />SignIn with Google</Button>
        </div>
    );
};

export default Home;