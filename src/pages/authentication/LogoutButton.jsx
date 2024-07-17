import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import toast from 'react-hot-toast';

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
        <button onClick={handleLogout} className="bg-red-500 text-white py-1 px-3 rounded-sm">
            Logout
        </button>
    );
};

export default LogoutButton;
