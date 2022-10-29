import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import HEADER, { BASE_URL, SETTING_URL } from '../urls'

export const Privcy = () => {

    const [links, setLinks] = useState({
        id: '',
        privacy_policies: '',
        legal_policies: '',
    })


    const [settings, setSettings] = useState([])
    const getSettings = async () => {
        const res = await (await fetch(`${BASE_URL}${SETTING_URL}`, {
            method: 'GET',
            headers: HEADER
        })).json();
        if (res.success) {
            setLinks(res.settings[0])
            setSettings(res.settings[0])
        }
    }

    const inputHandle = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setLinks({ ...links, [name]: value })
    }

    const store = async (e) => {
        e.preventDefault();
        const data = {
            facebook:settings.facebook,
            youtube:settings.youtube,
            official_website:settings.official_website,
            apps:settings.apps,
            privacy_policies: links.privacy_policies,
            legal_policies: links.legal_policies
        }

        const res = await (await fetch(`${BASE_URL}${SETTING_URL}/${links.id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: HEADER
        })).json();
        if (res.success) {
            toast(res.message, {
                type: 'success'
            })
            getSettings()
        } else {
            toast(res.message, {
                type: 'error'
            })
        }
    }
    useEffect(() => {
        getSettings()
    }, [])

    return (
        <form method='post' encType='multipart/form-data' className='my-10' >
            <div className="bg-white px-10 pb-10 rounded-lg ">
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-bold">Privacy & Legal Text </h1>
                    <button className="px-14 rounded text-white my-5 flex  py-2 bg-purple-600" onClick={store}>Update</button>
                </div>
                <div className="my-3 px-10">
                    <label htmlFor="" className='text-[#1F2937]'>Privacy Policies</label>
                    <textarea onChange={inputHandle} name="privacy_policies" value={links.privacy_policies} cols="30" rows="2" className='py-5 px-2 w-full border my-3 rounded-lg outline-none'></textarea>
                </div>
                <div className="my-3 px-10">
                    <label htmlFor="" className='text-[#1F2937]'>Legal Policies    </label>
                    <textarea onChange={inputHandle} name="legal_policies" value={links.legal_policies} cols="30" rows="2" className='py-5 px-2 w-full border my-3 rounded-lg outline-none'></textarea>
                </div>
            </div>
        </form>
    )
}
