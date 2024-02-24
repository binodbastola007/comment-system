import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../redux-store/actions/authActions';
import { useDispatch } from 'react-redux';

const SignUp = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formElements = e.target.elements;

        const username = formElements.username.value;
        const password = formElements.password.value;
        const confirmPassword = formElements.password.value;
        if (password === confirmPassword) {
            dispatch(signUp(username, password));
            navigate('/login')
        }
    }

    return (
        <div className='w-full h-screen flex items-center justify-center bg-blue-200'>
            <div>
                <h3 className='text-center mb-4 font-semibold text-2xl'>Signup to watch posts</h3>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col p-5 h-96 w-96 shadow-lg bg-white gap-3' >
                        <TextField name='username' label="Username" variant="filled" />
                        <TextField name='password' label="Password" variant="filled" />
                        <TextField name='confirmPassword' label="Confirm password" variant="filled" />
                        <Button type='submit' variant="contained">Sign up</Button>
                        <span className='text-center text-xs'>OR</span>
                        <Link to="/login" className='!mx-auto text-blue-500'>Login instead</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp;