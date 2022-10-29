import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import arrow from '../assets/arrow.png'
import munchtime from '../assets/rectangle.png'
import AllPosts from '../components/AllPosts'
import HEADER, { BASE_URL, POST_URL } from '../urls'


const AllPostPage = () => {
    const [posts, setPosts] = useState([])

    const [loading, setLoading] = useState(false)
    const getAllPosts = async () => {
        setLoading(false);
        const res = await (await fetch(`${BASE_URL}${POST_URL}`, {
            method: 'GET',
            headers: HEADER
        })).json()
        if (res.success) {
            setPosts(res.posts);
        } else {
            toast('Token Expired', {
                type: 'error',
            })
        }
        setLoading(false)
    }


    const deleteData = async (id) => {
        setLoading(false);
        const res = await (await fetch(`${BASE_URL}${POST_URL}/${id}`, {
            method: 'DELETE',
            headers: HEADER
        })).json()
        if (res.success) {
            toast(res.message, {
                type: 'success',
            })
            getAllPosts();
        } else {
            toast(res.message, {
                type: 'error',
            })
        }
        setLoading(false)
    }
    useEffect(() => {
        getAllPosts();
    }, [])
    return (
        <>
            <div className='bg-[#EDF2FF] px-10'>
            {loading && <h3 className='text-center'>Loading</h3>}
            <div className='container  mx-auto'>
                <div className="py-10 ">
                    <h1 className="text-3xl font-bold ">
                        All Post
                    </h1>
                </div>
                <div className="my-10 pb-10">
                <div className='flex w-full items-center px-10'>
                <div className='w-40 text-[#06152B]/50'>Thumbnail</div>
                <div className='w-60 flex items-center'><span className='mr-2 text-[#06152B]/50'>Title</span> <img src={arrow} alt="" />
                </div>
                <div className='w-96 flex items-center'><span className='mr-2 text-[#06152B]/50'>HeightLight</span> <img src={arrow} alt="" /></div>
                <div className='text-[#06152B]/50'>Action</div>
            </div>

                    {posts && posts.map(post => {
                        return <AllPosts post={post} deleteData={deleteData}/>
                    })}
                </div>
            </div>
        </div>
        </>
        
    )
}

export default AllPostPage