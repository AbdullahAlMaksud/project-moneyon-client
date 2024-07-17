import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import toast from 'react-hot-toast';
import { BiLogOut } from 'react-icons/bi';

const LogoutButton = () => {
    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
        toast.success('Logged out successfully');
        navigate('/login');
    };

    return (
        <button onClick={handleLogout} className=" text-white flex flex-col items-center justify-center border rounded-md px-3 py-2 hover:bg-white hover:text-black duration-200 ease-linear hover:shadow-sm">
            <BiLogOut className='text-xl' /> <small>Logout</small>
        </button>
    );
};

export default LogoutButton;
