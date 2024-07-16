import { Button } from '@material-tailwind/react';
import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {

    const { user, googleSignIn } = useContext(AuthContext)
    // console.log(googleSignIn)
    console.log(user)

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((res) => {
                console.log(res)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div className='my-5'>
            <Button onClick={handleGoogleSignIn} className='w-full bg-teal-900 flex items-center gap-2 font-normal capitalize justify-center'><FaGoogle />SignIn with Google</Button>
        </div>
    );
};

export default Login;