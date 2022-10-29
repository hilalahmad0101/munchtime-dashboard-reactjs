import React, { useEffect, useState } from 'react'
import AllFaq from '../components/AllFaq'
import FaqModal from '../components/FaqModal'
import HEADER, { BASE_URL, FAQ_URL } from '../urls'
import arrow from '../assets/arrow.png'
const FaqPage = () => {

    const [modal, setModal] = useState(false)

    const [faqs, setFaqs] = useState([])

    const getFaq=async()=>{
        const res=await (await fetch(`${BASE_URL}${FAQ_URL}`,{
            method:'GET',
            headers:HEADER
        })).json();
        if(res.success){
            setFaqs(res.faqs);
        }
    }

    useEffect(() => {
        getFaq();
    }, [])
    
    return (
        <div className='bg-[#EDF2FF] px-10'>
            <div className='container  mx-auto '>
                <div className="py-10 flex items-center justify-between">
                    <h1 className="text-2xl font-bold ">
                        Frequently asked questions
                    </h1>
                    <button className="px-14 rounded text-white my-5 flex  py-2 bg-purple-600" onClick={() => setModal(!modal)}>Add New</button>
                </div>
            </div>
            <div className="my-10 pb-10">
            <div className='flex w-full items-center px-10'>
                <div className='w-40 text-[#06152B]/50'>Category</div>
                <div className='w-60 flex items-center'>
                    <span className='mr-2 text-[#06152B]/50'>Question</span> <img src={arrow} alt="" />
                </div>
                <div className='w-96 flex items-center'><span className='mr-2 text-[#06152B]/50'>Answer</span> <img src={arrow} alt="" /></div>
                <div className='text-[#06152B]/50'>Actions</div>
            </div>
               {faqs && faqs.map(faq=>{
                return <AllFaq faq={faq} getFaq={getFaq}  />
               })}
            </div>
            <FaqModal modal={modal} setModal={setModal} getFaq={getFaq} />
        </div>
    )
}

export default FaqPage