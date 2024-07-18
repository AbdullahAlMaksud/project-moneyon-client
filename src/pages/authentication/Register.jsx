import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
// import { useDropzone } from 'react-dropzone';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        pin: '',
        mobileNumber: '',
        email: '',
        role: 'user', // Default role
        photoURL: '' // Default photoURL
    });
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const [file, setFile] = useState(null);

    const onDrop = acceptedFiles => {
        setFile(acceptedFiles[0]);
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: 'image/*'
    });

    const uploadImage = async (imageFile) => {
        const formData = new FormData();
        formData.append('image', imageFile);

        const response = await axios.post('https://api.imgbb.com/1/upload', formData, {
            params: {
                key: `${import.meta.env.VITE_IMGBB_API_KEY}`
            }
        });

        return response.data.data.url;
    };

    const mutation = useMutation({
        mutationFn: async (newUser) => {
            if (file) {
                const photoURL = await uploadImage(file);
                newUser.photoURL = photoURL;
            } else {
                newUser.photoURL = 'https://i.ibb.co/1bF6zxK/user.png'
            }
            const response = await axios.post(`${import.meta.env.VITE_SERVER}/api/auth/register`, newUser);
            return response.data;
        },
        onSuccess: (data) => {
            localStorage.setItem('user', JSON.stringify(data));
            toast.success('Account Created Successfully');
            queryClient.invalidateQueries(['user']);
            navigate('/login');
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
            <form onSubmit={handleSubmit} className='flex w-full flex-col gap-3'>
                <h2 className='text-xl pb-5 font-bold font-ubuntu text-center'>Registration</h2>
                <div className='flex'>
                    <label className='bg-white col-span-1 py-1 rounded-t-md rounded-tr-none w-40 md:w-32 px-2'>Name </label>
                    <input
                        className='w-full bg-transparent focus:outline-none border-l-0 border border-t-0 px-2 text-xs rounded-tr-xl placeholder-gray-800'
                        type="text"
                        name="name"
                        placeholder='Enter your name'
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className='flex'>
                    <label className='bg-white col-span-1 py-1 rounded-t-md rounded-tr-none w-40 md:w-32 px-2'>PIN</label>
                    <input
                        className='w-full bg-transparent focus:outline-none border border-t-0 px-2 text-xs border-l-0 rounded-tr-xl placeholder-gray-800'
                        type="number"
                        name="pin"
                        placeholder='Enter 5 digit pin'
                        value={formData.pin}
                        onChange={handleChange}
                    />
                </div>
                <div className='flex'>
                    <label className='bg-white col-span-1 py-1 rounded-t-md rounded-tr-none w-40 md:w-32 px-2'>Mobile Number</label>
                    <input
                        className='w-full bg-transparent focus:outline-none border-l-0 border border-t-0 px-2 text-xs rounded-tr-xl placeholder-gray-800'
                        type="text"
                        placeholder='Enter your mobile number'
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                    />
                </div>
                <div className='flex'>
                    <label className='bg-white col-span-1 py-1 rounded-t-md rounded-tr-none w-40 md:w-32 px-2'>Email</label>
                    <input
                        className='w-full border-l-0 bg-transparent focus:outline-none border border-t-0 px-2 text-xs rounded-tr-xl placeholder-gray-800'
                        type="email"
                        name="email"
                        placeholder='Enter your email'
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className='flex'>
                    <label className='bg-white col-span-1 py-1 rounded-t-md w-40 md:w-32 px-2 rounded-tr-none'>Role</label>
                    <select
                        className='w-full border-l-0 bg-transparent focus:outline-none border border-t-0 px-2 text-xs rounded-tr-xl'
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                    >
                        <option value="user">User</option>
                        <option value="agent">Agent</option>
                    </select>
                </div>


                <div className='flex flex-col'>
                    <label className='bg-white  py-1 rounded-t-md px-2'>Photo</label>
                    <div {...getRootProps()} className='bg-tealnew-600 w-full px-2 py-10 rounded-b-md border text-center text-white font-ubuntu'>
                        <input {...getInputProps()} />
                        <p>{file ? file.name : "Drag 'n' drop a file, or click to select one"}</p>
                    </div>
                </div>
                <button
                    className='bg-teal-800 py-1 text-white rounded-sm w-full'
                    type="submit">Register</button>
            </form>
            <small className='pt-2'>Already have an account? <Link to={'/login'} className='font-bold text-blue-900'>Login here!</Link></small>
        </div>
    );
};

export default Register;
