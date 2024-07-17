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
                user ?
                    <div className='flex w-11/12 items-center justify-between'>
                        <div className='flex gap-5 items-center'>
                            <div className='flex items-center justify-center'>
                                <img src={user?.photoURL || null} className='w-14 h-14 object-cover rounded-full' alt="" />
                            </div>
                            <div className='flex flex-col justify-center'>
                                <h2 className='text-[.5rem] -mb-1.5'>{user?.mobileNumber}</h2>
                                <h2 className='text-xl'>{user?.name}</h2>
                                {
                                    !balance ? <span onClick={handleShowBalance} className='px-5 py-0.5 bg-white border rounded-full text-black hover:cursor-pointer duration-300 ease-linear w-fit'>Show Balance</span> : <span onClick={handleShowBalance} className='px-5 py-0.5 bg-transparent rounded-full text-white border w-fit hover:cursor-pointer duration-300 ease-linear'>Balance: {user?.balance} BDT</span>
                                }
                            </div>
                        </div>
                        <LogoutButton />
                    </div>
                    :
                    <div className='w-full h-full flex justify-center items-center bg-teal-800 rounded-br-full'>
                        <h2 className='text-2xl font-bold'>MoneyOn</h2>
                    </div>
            }
        </div>
    );
};

export default Navigation;
