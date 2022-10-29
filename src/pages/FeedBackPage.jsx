import React, { useState } from 'react'
import { toast } from 'react-toastify'
import AllFeedBack from '../components/AllFeedBack'
import HEADER, { BASE_URL, FeedBack_URL } from '../urls'

const FeedBackPage = () => {

    const [feedbacks, setFeedbacks] = useState([])

    const getFeedBacks = async () => {
        const res = await (await fetch(`${BASE_URL}${FeedBack_URL}`, {
            method: 'GET',
            headers: HEADER
        })).json()
        if (res.success) {
            setFeedbacks(res.message)
        }
    }
        return (
            <div className='bg-[#EDF2FF] px-10'>
                <div className='container  mx-auto '>
                    <div className="py-10 ">
                        <h1 className="text-2xl font-bold ">
                            Feedbacks
                        </h1>
                    </div>
                    <div className="my-10 pb-10">
                        {feedbacks && feedbacks.map(feedback => {
                            return (<AllFeedBack feedback={feedback} />)
                        })}
                    </div>
                </div>
            </div>
        )
    }

export default FeedBackPage