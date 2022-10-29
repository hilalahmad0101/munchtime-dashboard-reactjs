import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import HEADER, { BASE_URL, CATEGORY_URL, FAQ_URL } from '../urls'

const UpdateModal = () => {

    const [categories, setCategories] = useState([])
    const navigate= useNavigate()
    const {id}=useParams()
    const [faq, setFaq] = useState({
        cat_id: '',
        answer: '',
        question: '',
    })

    const getFaqs = async () => {
        const res = await (await fetch(`${BASE_URL}${FAQ_URL}/${id}`, {
            method: 'PATCH',
            headers: HEADER
        })).json();
        if (res.success) {
            setFaq(res.faqs)
        }
    }

    const getCategories = async () => {
        const res = await (await fetch(`${BASE_URL}${CATEGORY_URL}`, {
            method: 'GET',
            headers: HEADER
        })).json();
        if (res.success) {
            setCategories(res.categories)
        }
    }
    const inputHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value
        setFaq({ ...faq, [name]: value });
    }

    const store = async (e) => {
        e.preventDefault();

        const data = {
            cat_id:faq.cat_id,
            question:faq.question,
            answer:faq.answer,
        }

        const res=await (await fetch(`${BASE_URL}${FAQ_URL}/${id}`,{
            method:'PUT',
            body:JSON.stringify(data),
            headers:HEADER
        })).json();
        if(res.success){
            toast(res.message,{
                type:'success'
            })
            navigate('/faq')
        }else{
            toast(res.message,{
                type:'error'
            })
        }
    }

    useEffect(() => {
        getFaqs()
        getCategories()
    }, [])

    return (
            <div id="defaultModal" className=" items-center justify-center overflow-y-auto h-screen  overflow-x-hidden flex top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full bg-gray-100 px-10">
                <div className="relative p-4 w-full  h-full md:h-auto">
                    <div className="relative bg-white rounded-lg  dark:bg-gray-700">
                        <div className="flex justify-between items-start p-4 rounded-t  dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Update Faq
                            </h3>
                        </div>
                        <div className="p-6 space-y-6">
                            <div className='grid grid-cols-2'>
                                <div className=''>
                                    <div>
                                        <label htmlFor="" className='text-[#1F2937]'>Select Category</label>
                                        <select name="cat_id" onChange={inputHandler} value={faq.cat_id} id="" className='py-5 px-2 w-full border my-3 rounded-lg outline-none'>
                                            {categories && categories.map(val => {
                                                return (
                                                    <option value={val.id}>{val.category_name}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 gap-4'>
                                <div>
                                    <label htmlFor="" className='text-[#1F2937]'>Enter Question</label>
                                    <input type="text" name="question" value={faq.question} onChange={inputHandler} id="" className='py-5 px-2 w-full border my-3 rounded-lg outline-none ' />
                                </div>
                                <div>
                                    <label htmlFor="" className='text-[#1F2937]'>Enter Answer</label>
                                    <input type="text" name="answer" value={faq.answer} onChange={inputHandler} id="" className='py-5 px-2 w-full border my-3 rounded-lg outline-none ' />
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="flex items-center justify-end my-10">
                            <button type="submit" onClick={store}  className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-blue-800">Update</button>
                        </div>
                </div>
            </div>
    )
}

export default UpdateModal