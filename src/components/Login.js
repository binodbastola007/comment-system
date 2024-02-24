import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { signIn } from '../redux-store/actions/authActions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.preventDefault();
        const FormElements = e.target.elements;

        const username = FormElements.username.value;
        const password = FormElements.password.value;
        dispatch(signIn(username, password));

        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser && storedUser.username === username && storedUser.password === password) {
            navigate('/homepage')
        } else {
            alert("Invalid username or password")
        }

    }

    return (
        <div className='w-full h-screen flex items-center justify-center bg-blue-200'>
            <div>
                <h3 className='text-center mb-4 font-semibold text-2xl'>Login to watch posts</h3>
                <form onSubmit={handleLogin}>
                    <div className='flex flex-col p-5 h-80 w-96 shadow-lg bg-white gap-3' >
                        <TextField name='username' label="Username" variant="filled" />
                        <TextField name='password' label="Password" variant="filled" />
                        <Button type='submit' variant="contained">Login</Button>
                        <span className='text-center text-xs'>OR</span>
                        <Link to="/signup" className='!mx-auto text-blue-500'>Signup instead</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login