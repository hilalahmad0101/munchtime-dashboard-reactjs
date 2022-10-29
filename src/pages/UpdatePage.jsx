import React from 'react'
import UpdatePost from '../components/UpdatePost'
const UpdatePage = () => {
  return (
    <div className='bg-[#EDF2FF] px-10'>
      <div className='container  mx-auto '>
        <div className="py-10 ">
          <h1 className="text-3xl font-bold ">
            Update Post
          </h1>
        </div>
        <UpdatePost />
      </div>
    </div>
  )
}

export default UpdatePage