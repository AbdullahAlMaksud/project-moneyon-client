import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import LogoutButton from '../authentication/LogoutButton';

const Navigation = () => {
    const { user } = useContext(AuthContext);
    const [balance, showBalance] = useState(false);

    const handleShowBalance = () => {
        showBalance(!balance);
    }

    return (
        <div className='rounded-b-lg text-white flex items-center justify-center h-full font-ubuntu text-xs'>
            {
                user ? <div className='flex flex-col items-center justify-center'>
                    <img src={user?.photoURL || null} className='w-10 rounded-full mb-3' alt="" />
                    <h2 className='text-xl'>{user?.name}</h2>
                    <h2>{user?.mobileNumber}</h2>
                    {
                        !balance ? <span onClick={handleShowBalance} className='px-5 py-1 mt-2 bg-white border rounded-full text-black hover:cursor-pointer duration-300 ease-linear'>Show Balance</span> : <span onClick={handleShowBalance} className='px-5 py-1 mt-2 bg-transparent rounded-full text-white border hover:cursor-pointer duration-300 ease-linear'>Balance: {user?.balance} BDT</span>
                    }
                    <LogoutButton />
                </div> :
                    <div>
                        <h2 className=''>MoneyOn</h2>
                    </div>
            }
        </div>
    );
};

export default Navigation;
