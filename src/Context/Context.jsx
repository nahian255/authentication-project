import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { createContext } from 'react';
import app from '../Firebase/firebase.init';

export const AuthContext = createContext()

const Context = ({ children }) => {
    const auth = getAuth(app)
    const loginWithContext = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const passValue = { loginWithContext }
    return (
        <div>
            <AuthContext.Provider value={passValue}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default Context;