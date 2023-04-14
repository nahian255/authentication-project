import React, { useContext } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/firebase.init';
import { AuthContext } from '../Context/Context';


const Login = () => {
    const { loginWithContext } = useContext(AuthContext)
    console.log(loginWithContext);
    // const auth = getAuth(app)
    const handelLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.pass.value
        console.log(e.target.pass.value);
        loginWithContext(email, password)
            .then(re => {
                console.log(re.user);
            })
            .catch(error => {

            })
        // createUserWithEmailAndPassword(auth, email, password)
        //     .then(result => {
        //         const user = result.user
        //     }).catch(error => {

        //     })
    }
    return (
        <div className='p-8'>
            <h1>Log in </h1>
            <div className='p-2'>
                <form onSubmit={handelLogin} action="">
                    <input className='my-3' type="email" name="email" id="" /> <br />

                    <input type="password" name="pass" id="" />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Login;