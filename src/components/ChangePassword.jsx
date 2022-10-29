import React, { useState } from 'react'
import { toast } from 'react-toastify';
import HEADER, { BASE_URL, CHANGE_PASSWORD_URl } from '../urls';

const ChangePassword = () => {

    const [password, setPassword] = useState({
        old_password: '',
        new_password: '',
        c_password: '',
    });

    const inputHandle = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPassword({ ...password, [name]: value })
    }

    const updatePassword = async (e) => {
        e.preventDefault()
        const data = {
            old_password: password.old_password,
            new_password: password.new_password,
            c_password: password.c_password
        }
        const res = await (await fetch(`${BASE_URL}${CHANGE_PASSWORD_URl}`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: HEADER
        })).json();
        if (res.success) {
            toast(res.message, {
                type: 'success'
            })
            setPassword({
                old_password: '',
                new_password: '',
                c_password: '',
            })
        } else {
            toast(res.message, {
                type: 'error'
            })
        }
    }
    return (
        <form method='post' encType='multipart/form-data' className='my-10' >
            <div className="bg-white px-10 py-10 rounded-lg ">
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-bold">Admin Password Change </h1>
                </div>
                <div className="my-3 px-10 grid grid-cols-2 gap-8">
                    <div>
                        <label htmlFor="" className='text-[#1F2937]'>Admin User Id</label>
                        <input type="text" readOnly name="id" id="" className='py-5 px-2 w-full border my-3 rounded-lg outline-none' />
                    </div>
                    <div>
                        <label htmlFor="" className='text-[#1F2937]'>Old Password</label>
                        <input type="password" onChange={inputHandle} name="old_password" className='py-5 px-2 w-full border my-3 rounded-lg outline-none' />
                    </div>
                </div>
                <div className="my-3 px-10 grid grid-cols-2 gap-8">
                    <div>
                        <label htmlFor="" className='text-[#1F2937]'>New Password</label>
                        <input type="password" onChange={inputHandle} name="new_password" className='py-5 px-2 w-full border my-3 rounded-lg outline-none' />
                    </div>
                    <div>
                        <label htmlFor="" className='text-[#1F2937]'>Confirm Password</label>
                        <input type="password" onChange={inputHandle} name="c_password" className='py-5 px-2 w-full border my-3 rounded-lg outline-none' />
                    </div>
                </div>
                <div className="flex justify-end">
                    <button onClick={updatePassword} className="px-14 rounded text-white my-5 flex  py-2 bg-purple-600">Update</button>

                </div>
            </div>
        </form>
    )
}

export default ChangePassword