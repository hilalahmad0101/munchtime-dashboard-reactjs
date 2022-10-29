import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import munchtime from '../assets/munch-time.png'
import { GlobalContext } from '../contextapi/GlobalContext';
const LoginPage = () => {
  const navigate = useNavigate();
  const { adminLogin,loading } = useContext(GlobalContext);
  const [admin, setAdmin] = useState({
    username: '',
    password: ''
  })

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAdmin({ ...admin, [name]: value })
  }
  const login = () => {
    const data = {
      username: admin.username,
      password: admin.password
    }
    adminLogin(data);
  }
  return (
    <div>
      <div className="bg-[#EDF2FF] h-screen w-full flex items-center">
        <div className="container mx-auto max-w-lg">
          <div className="shadow-md bg-white rounded-3xl">
            <div className="text-center flex justify-center">
              <img src={munchtime} alt="" className='my-10' />
            </div>
            <div className='text-center  pb-10'>
              <h1 className="text-[24px] font-[700]">Admin Login</h1>
            </div>
            <div className="mx-20 pb-10">
              <div>
                <input type="text" name='username' onChange={handleInput} value={admin.username} className='w-full outline-none border-b-2  px-3 border-[#A6A6A6]' placeholder='Enter Username'  id="" />
              </div>
              <div className='my-10'>
                <input type="password" name='password' onChange={handleInput} value={admin.password} className='w-full outline-none border-b-2  px-3 border-[#A6A6A6]' placeholder='Enter Username' id="" />
              </div>
              <div className='text-center'>
                <button onClick={login} className='px-14 py-3 rounded-md bg-[#6D44B8] text-[20px] text-white font-[700] hover:bg-[#7654b6]'>{loading ?'Loaing....':'Login'}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage