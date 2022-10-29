import React from 'react'

const AllFeedBack = ({feedback}) => {
    return (
          /* A component that is used to display the feedbacks. */
            <div className=' w-full  bg-white px-10 py-5 rounded-xl my-6'>
            <div className='flex items-center justify-between'>
                <div className='text-center'>
                    <h1 className="text-md">
                        <span className='text-blue-500'>User Name </span>: <span className='ml-10'>{feedback.name}</span>
                    </h1>
                </div>
                <div className='text-center mr-52'>
                    <h1 className="text-md">
                        <span className='text-blue-500'>Email</span>: <span className='ml-10'>{feedback.email}</span>
                    </h1>
                </div>
            </div>
            <div className='my-3'>
                <h1 className="text-md flex items-start">
                    <span className='w-[166px]'>Feed Back </span>:
                    <div className='ml-14 text-justify'>
                       {feedback.feedback}</div>
                </h1>
            </div>
        </div>
    )
}

export default AllFeedBack