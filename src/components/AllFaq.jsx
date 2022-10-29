import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import HEADER, { BASE_URL, FAQ_URL } from '../urls'
import FaqModal from './FaqModal'
import UpdateModal from './UpdateFaq'
import arrow from '../assets/arrow.png'
import downloading from '../assets/downloading.png'
import browser from '../assets/browser.png'
import play from '../assets/play.png'
import audioheadset from '../assets/audio-headset.png'
const AllFaq = ({ faq, getFaq }) => {

    /* A hook that is used to set the state of the modal. */
    const [modal, setModal] = useState(false)

    /**
     * The above function deletes a FAQ from the database.
     */
    const deleteFaq = async (id) => {
        /* Deleting a FAQ from the database. */
        const res = await (await fetch(`${BASE_URL}${FAQ_URL}/${id}`, {
            method: 'DELETE',
            headers: HEADER
        })).json()
        /* Checking if the response from the server is successful or not. */
        if (res.success) {
            /* A notification that is displayed to the user when a FAQ is deleted. */
            toast(res.message, {
                type: 'success'
            })
            /* A function that is used to get all the FAQs from the database. */
            getFaq()
        } else {
            /* A notification that is displayed to the user when a FAQ is deleted. */
            toast(res.message, {
                type: 'error'
            })
        }
    }
    return (
        /* A component that is used to display all the FAQs in the database. */
        <>
            
            <div className='flex w-[976px] items-center justify-between bg-white p-4 rounded-xl my-6 md:overflow-x-hidden overflow-x-scroll '>
                <div className='text-center flex items-center'>
                    <img src={play} className='w-14 h-12' alt="" />
                    <span className='ml-4'>{faq.categories.category_name }</span>
                </div>
                <div className='text-center'>
                    <h1 className="text-md">{faq.question}</h1>
                </div>
                <div className='text-center'>
                    <h1 className="text-md">{faq.answer}</h1>
                </div>
                <div className='text-center'>
                    <button onClick={() => { deleteFaq(faq.id) }} className='px-7 py-2 bg-red-400/80 rounded-full text-red-600 font-semibold mr-10'>Delete</button>
                    <Link to={`/update/faq/${faq.id}`}>
                        <button className='px-9 py-2 bg-green-400/80 rounded-full text-green-700 font-semibold'>Edit</button>
                    </Link>
                </div>
            </div>
        </>

    )
}

/* Exporting the `AllFaq` component. */
export default AllFaq