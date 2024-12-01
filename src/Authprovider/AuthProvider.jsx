import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import { TbUrgent } from 'react-icons/tb';
import { auth } from '../firbase.config';
export const AuthContext= createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loader,setLoader]= useState(true)

    const createUser = (email,password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    const authInfo={
        user,loader,createUser,loginUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;