import React from 'react'
import Login from '../components/Login';
import SignUp from '../components/Signup';

const Authentication = () => {

    const registration = false;

    return (
        <>
            {
                registration ?
                    <div>
                        <Login />
                    </div>
                    :
                    <div>
                        <SignUp />
                    </div>
            }
        </>
    )
}

export default Authentication;