import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Navigation = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className='rounded-b-lg text-white flex items-center justify-center h-full font-ubuntu text-xs'>
            <div className='flex flex-col items-center justify-center'>
                <img src={user?.photoURL || null} className='w-10 rounded-full mb-3' alt="" />
                <h2 className='text-xl'>{user?.name}</h2>
                <h2>{user?.mobileNumber}</h2>
                <p>Balance: {user?.balance} BDT</p>
            </div>
        </div>
    );
};

export default Navigation;
