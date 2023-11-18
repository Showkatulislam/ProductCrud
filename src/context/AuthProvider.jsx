import {createContext, useEffect, useState} from 'react'

export const AuthContext=createContext(null)



const AuthProvider = ({children}) => {
    const [user,setUser]=useState('')
    const [loading,setLoading]=useState(true);
    const authinfo={
        user,
        setUser,
        loading
    }
    useEffect(()=>{
        setLoading(true);
        if(!user){
            setUser(localStorage.getItem('email'))
            setLoading(false);
        }
    },[])
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;