import { Button, Card, Checkbox, Typography } from '@material-tailwind/react';
import { Input } from 'postcss';
import React from 'react';
import { FaGoogle, FaMoneyBillAlt, FaMoneyCheckAlt } from 'react-icons/fa';
import MenuButton from '../../components/MenuButton';
import { BiMoney, BiMoneyWithdraw } from 'react-icons/bi';
import { GiPayMoney } from 'react-icons/gi';
import { IoCashOutline } from 'react-icons/io5';
import { BsCashCoin } from 'react-icons/bs';
import { FaMoneyBill1Wave, FaMoneyBills, FaMoneyBillTransfer, FaMoneyBillWheat, FaRegMoneyBill1 } from 'react-icons/fa6';
import { CgMore } from 'react-icons/cg';
import { PiChatTeardropSlashDuotone } from 'react-icons/pi';

const UserHome = () => {
    return (
        <div className='my-5'>
            <div className='border-b border-tealnew-900 mb-5 flex justify-center rounded-md'>
                <h2 className='text-center font-ubuntu bg-tealnew-900 w-fit text-xl text-white px-3 rounded-t-md'>User</h2>
            </div>
            <section className='flex items-center'>
                <div className='grid sm:grid-cols-3 lg:grid-cols-6 gap-2 mx-auto'>
                    <MenuButton icon={FaMoneyBillTransfer} name={'Send Money'}></MenuButton>
                    <MenuButton icon={FaMoneyBill1Wave} name={'Cash-Out'}></MenuButton>
                    <MenuButton icon={FaMoneyBillAlt} name={'Cash-In'}></MenuButton>
                    <MenuButton icon={FaMoneyBills} name={'Transiction History'}></MenuButton>
                    <MenuButton icon={FaMoneyBillWheat} name={'Balance'}></MenuButton>
                    <MenuButton icon={CgMore} name={'More'}></MenuButton>

                </div>
            </section>
        </div>
    );
};

export default UserHome;