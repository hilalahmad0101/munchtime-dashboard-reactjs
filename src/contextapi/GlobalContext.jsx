import { createContext, useState, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BASE_URL, LOGIN_URL } from '../urls';

export const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token') || '')

    const [loading, setLoading] = useState(false);

    const adminLogin = async (data) => {
        setLoading(true);
        if (data.username == "" || data.password == "") {
            toast("Please fill the field", {
                type: 'error',
                closeButton: true
            })
        } else {
            const res = await (await fetch(`${BASE_URL}${LOGIN_URL}`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })).json();
            if (res.success) {
                toast(res.message, {
                    type: 'success',
                    closeButton: true
                })
                setToken(res.token);
                localStorage.setItem('token', res.token);
                Navigate('/')
            } else {
                toast(res.message, {
                    type: 'error',
                    closeButton: true
                })
            }
            setLoading(false)
        }

    }

    const logout=()=>{
        setToken('');
        localStorage.removeItem('token')
    }
    return (
        <GlobalContext.Provider value={{ token, loading,adminLogin,logout}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;