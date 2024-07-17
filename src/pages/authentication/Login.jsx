import { useState, useContext } from 'react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const [formData, setFormData] = useState({
        emailOrMobile: '',
        pin: ''
    });
    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const mutation = useMutation({
        mutationFn: async (loginData) => {
            const response = await axios.post(`${import.meta.env.VITE_SERVER}/api/auth/login`, loginData);
            return response.data;
        },
        onSuccess: (data) => {
            const { name, mobileNumber, balance, photoURL, role } = data;
            const userInfo = { name, mobileNumber, balance, photoURL, role };
            localStorage.setItem('user', JSON.stringify(userInfo));
            setUser(userInfo);
            toast.success('Login Successful');
            navigate('/');
        },
        onError: (error) => {
            const errorMessage = error.response?.data?.message || error.message;
            toast.error(errorMessage);
        }
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutate(formData);
    };

    return (
        <div className="bg-teal-300 my-5 rounded-md p-10 flex flex-col items-center justify-center text-xs">
            <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                <div className='grid grid-cols-5'>
                    <label className='bg-white col-span-1 py-1 rounded-l-sm px-2'>Email/Mobile: </label>
                    <input
                        className='w-full bg-transparent active:bg-transparent focus:outline-none border-b col-span-4 px-2 py-1 rounded-r-sm'
                        type="text"
                        name="emailOrMobile"
                        value={formData.emailOrMobile}
                        onChange={handleChange}
                    />
                </div>
                <div className='grid grid-cols-5'>
                    <label className='bg-white col-span-1 py-1 rounded-l-sm px-2'>PIN</label>
                    <input
                        className=' bg-transparent active:bg-transparent focus:outline-none border-b col-span-4 px-2 w-full py-1 rounded-r-sm'
                        type="password"
                        name="pin"
                        value={formData.pin}
                        onChange={handleChange}
                    />
                </div>
                <button
                    className='bg-teal-800 py-1 text-white rounded-sm w-full'
                    type="submit">Login</button>
            </form>
            <small className='pt-2'>Don't have an account? <Link to={'/register'} className='font-bold text-blue-900'>Register here!</Link></small>
        </div>
    );
};

export default Login;
