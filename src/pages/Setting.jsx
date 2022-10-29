import React from 'react'
import ChangePassword from '../components/ChangePassword'
import PerLink from '../components/PerLink'
import { Privcy } from '../components/Privcy'

const Setting = () => {
    return (
        <div className='bg-[#EDF2FF] px-10'>
            <div className='container  mx-auto '>
                <div className="py-10 ">
                    <h1 className="text-2xl font-bold ">
                        Setting
                    </h1>
                </div>
                <div className="my-10 pb-10">
                    <PerLink />
                    <Privcy />
                    <ChangePassword />
                </div>
            </div>
        </div>
    )
}

export default Setting