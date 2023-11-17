import {createContext, useEffect, useState} from 'react'

export const AuthContext=createContext(null)



const AuthProvider = ({children}) => {
    const [user,setUser]=useState('')
    const authinfo={
        user,
        setUser
    }
    useEffect(()=>{
        if(!user){
            setUser(localStorage.getItem('email'))
        }
    },[user])
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;