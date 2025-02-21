import React from 'react';
import MenuButton from '../../components/MenuButton';
import { FaMoneyBill1Wave, FaMoneyBills, FaMoneyBillTransfer, FaMoneyBillWheat } from 'react-icons/fa6';
import { CgMore } from 'react-icons/cg';
import { FaMoneyBillAlt } from 'react-icons/fa';

const AgentHome = () => {
    return (
        <div className='my-5'>
            <div className='border-b border-black mb-5 flex justify-center rounded-md'>
                <h2 className='text-center font-ubuntu bg-black w-fit text-xl text-white px-3 rounded-t-md'>Agent</h2>
            </div>

            <section className='flex items-center justify-center'>
                <div className='flex gap-2 flex-wrap items-center justify-center'>
                    <MenuButton icon={FaMoneyBillTransfer} name={'Transaction Management'}></MenuButton>
                    <MenuButton icon={FaMoneyBills} name={'Transiction History'}></MenuButton>
                    <MenuButton icon={FaMoneyBillWheat} name={'Balance'}></MenuButton>
                    <MenuButton icon={CgMore} name={'More'}></MenuButton>
                </div>
            </section>
        </div>
    );
};

export default AgentHome;