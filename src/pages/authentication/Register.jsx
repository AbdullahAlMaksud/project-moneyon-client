import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        pin: '',
        mobileNumber: '',
        email: ''
    });
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const mutation = useMutation({
        mutationFn: async (newUser) => {
            const response = await axios.post(`${import.meta.env.VITE_SERVER}/api/auth/register`, newUser);
            return response.data;
        },
        onSuccess: (data) => {
            localStorage.setItem('user', JSON.stringify(data));
            toast.success('Account Created Successfully');
            queryClient.invalidateQueries(['user']);
            navigate('/login'); // Redirect to login page after successful registration
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
        <div className="bg-teal-300 my-5 rounded-md p-10 flex items-center justify-center text-xs">
            <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                <div className='grid grid-cols-5'>
                    <label className='bg-white col-span-1 py-1 rounded-l-sm px-2'>Name: </label>
                    <input
                        className='w-full bg-transparent active:bg-transparent focus:outline-none border-b col-span-4 px-2 py-1 rounded-r-sm'
                        type="text"
                        name="name"
                        value={formData.name}
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
                <div className='grid grid-cols-5 '>
                    <label className='bg-white col-span-1 py-1 rounded-l-sm px-2'>Mobile Number</label>
                    <input
                        className='w-full bg-transparent active:bg-transparent focus:outline-none border-b col-span-4 px-2 py-1 rounded-r-sm'
                        type="text"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                    />
                </div>
                <div className='grid grid-cols-5'>
                    <label className='bg-white col-span-1 py-1 rounded-l-sm px-2'>Email</label>
                    <input
                        className='w-full bg-transparent focus:outline-none border-b col-span-4 px-2 text-xs'
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <button
                    className='bg-teal-800 py-1 text-white rounded-sm w-full'
                    type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;