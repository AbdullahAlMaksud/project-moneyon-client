import React from 'react';
import MenuButton from '../../components/MenuButton';
import { FaMoneyBills, FaMoneyBillTransfer, FaMoneyBillWheat } from 'react-icons/fa6';
import { CgMore } from 'react-icons/cg';

const AdminHome = () => {
    return (
        <div className='my-5'>
            <div className='border-b border-orange-900 mb-5 flex justify-center rounded-md'>
                <h2 className='text-center font-ubuntu bg-orange-900 w-fit text-xl text-white px-3 rounded-t-md'>Admin</h2>
            </div>

            <section className='flex items-center justify-center'>
                <div className='flex flex-wrap gap-2 justify-center'>
                    <MenuButton icon={FaMoneyBillTransfer} name={'User Management'}></MenuButton>
                    <MenuButton icon={FaMoneyBills} name={'All Transiction'}></MenuButton>
                    <MenuButton icon={FaMoneyBillWheat} name={'Balance'}></MenuButton>
                    <MenuButton icon={CgMore} name={'More'}></MenuButton>
                </div>
            </section>
        </div>
    );
};

export default AdminHome;