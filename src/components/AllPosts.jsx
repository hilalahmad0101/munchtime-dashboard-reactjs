import React from 'react'
import { json, NavLink } from 'react-router-dom';
import { BASE_URL } from '../urls';
import arrow from '../assets/arrow.png'

const AllPosts = ({ post, deleteData }) => {

    /* Converting the string to an array. */
    /**
     * It takes an id as an argument, and then calls the deleteData function, passing the id as an
     * argument
     */
    const deletePost = (id) => {
        deleteData(id)
    }
    return (
        /* A div that is displaying the data of a post. */
        <>
            
            <div className='flex w-full items-center justify-between bg-white p-4 rounded-2xl my-6'>
                <div className='text-center'>
                    <img src={`${BASE_URL}/storage/${post.images}`} className='w-20 h-20' alt="" />
                </div>
                <div className='text-center'>
                    <h1 className="text-md">{post.title}</h1>
                </div>
                <div className='text-center'>
                    <h1 className="text-md">{
                        /* Looping through the tags array and returning a span tag for each tag. */
                        <span className='ml-2'>{post.tags}</span>
                    }</h1>
                </div>
                <div className='text-center'>
                    {/* /* Calling the deletePost function, passing the post id as an argument.  */}
                    <button onClick={() => deletePost(post.id)} className='px-7 py-2 bg-red-400/80 rounded-full text-white font-semibold mr-10'>Delete</button>
                    <NavLink to={`/edit/post/${post.id}`}>
                        <button className='px-9 py-2 bg-green-400/80 rounded-full text-white font-semibold'>Edit</button>
                    </NavLink>
                </div>
            </div>
        </>

    )
}

/* Exporting the AllPosts component. */
export default AllPosts