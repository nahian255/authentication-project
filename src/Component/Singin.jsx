import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import app from '../Firebase/firebase.init';

const Singup = () => {
    const auth = getAuth(app)

    const handelSingup = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.pass.value;
        console.log(password, email);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user
                console.log(user);
            }).catch(error => {

            })
    }

    return (
        <div className='p-8'>
            <h1>register</h1>

            <div>
                <form onSubmit={handelSingup} action="">
                    <input className='my-8' type="email" name="email" id="" />
                    <br />
                    <input type="password" name="pass" id="" />
                    <button>Sing Up</button>
                </form>
            </div>
        </div>
    );
};

export default Singup;