import React from 'react'
import AddPost from '../components/AddPost'
const PostPage = () => {
  return (
    <div className='bg-[#EDF2FF] px-10'>
      <div className='container  mx-auto '>
        <div className="py-10 ">
          <h1 className="text-3xl font-bold ">
            Add New Post
          </h1>
        </div>
        <AddPost />
      </div>
    </div>
  )
}

export default PostPage