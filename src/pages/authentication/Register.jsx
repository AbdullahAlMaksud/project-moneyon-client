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
                newUser.photoURL = 'DEFAULT_PHOTO_URL'; // Replace with your default photo URL
            }
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
        <div className="bg-teal-300 my-5 rounded-md p-10 flex flex-col items-center justify-center text-xs">
            <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                <div className='grid grid-cols-5'>
                    <label className='bg-white col-span-1 py-1 rounded-l-sm px-2'>Name: </label>
                    <input
                        className='w-full bg-white active:bg-white focus:outline-none border-b col-span-4 px-2 py-1 rounded-r-sm'
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className='grid grid-cols-5'>
                    <label className='bg-white col-span-1 py-1 rounded-l-sm px-2'>PIN</label>
                    <input
                        className=' bg-white active:bg-white focus:outline-none border-b col-span-4 px-2 w-full py-1 rounded-r-sm'
                        type="password"
                        name="pin"
                        value={formData.pin}
                        onChange={handleChange}
                    />
                </div>
                <div className='grid grid-cols-5 '>
                    <label className='bg-white col-span-1 py-1 rounded-l-sm px-2'>Mobile Number</label>
                    <input
                        className='w-full bg-white active:bg-white focus:outline-none border-b col-span-4 px-2 py-1 rounded-r-sm'
                        type="text"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                    />
                </div>
                <div className='grid grid-cols-5'>
                    <label className='bg-white col-span-1 py-1 rounded-l-sm px-2'>Email</label>
                    <input
                        className='w-full bg-white focus:outline-none border-b col-span-4 px-2 text-xs'
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className='grid grid-cols-5'>
                    <label className='bg-white col-span-1 py-1 rounded-l-sm px-2'>Role</label>
                    <select
                        className='w-full bg-white focus:outline-none border-b col-span-4 px-2 text-xs'
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                    >
                        <option value="user">User</option>
                        <option value="agent">Agent</option>
                    </select>
                </div>
                <div className='grid grid-cols-5'>
                    <label className='bg-white col-span-1 py-1 rounded-l-sm px-2'>Photo</label>
                    <div {...getRootProps()} className='bg-white col-span-4 px-2 py-1 rounded-r-sm border-b'>
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
