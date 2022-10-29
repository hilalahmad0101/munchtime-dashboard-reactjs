import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import vector2 from '../assets/vector2.png'
import HEADER, { BASE_URL, POST_URL } from '../urls'

const UpdatePost = () => {

    const {id}=useParams();
    /* Used to navigate to another page. */
    const navigate = useNavigate();
    /* A state variable. */
    const [posts, setPosts] = useState({
        title: '',
        tags: '',
        images: '',
        content: '',
        posting_time: '',
        posting_date: '',
        notification: '',
    })

    /* A state variable. */
    const [file, setFile] = useState([]);

    const getPostById = async () => {
        console.log("object");
        const res = await (await fetch(`${BASE_URL}${POST_URL}/${id}`, {
            method: 'PATCH',
            headers: HEADER
        })).json();
        if (res.success) {
            setPosts(res.posts);
        } else {
            toast('Token Expired', {
                type: 'error',
            })
        }
    }

    /**
     * The function takes an event as an argument, and then sets the state of the posts object to the
     * value of the input field
     */
    const inputHandle = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPosts({ ...posts, [name]: value })
    }

    /**
     * The changeHandler function is triggered when the user selects a file. It then sets the file state
     * to the file selected by the user
     */
    const changeHandler = (e) => {
        setFile(e.target.files[0])
    }
    const savePost = async (e) => {
        /* It prevents the default action of the event from happening. */
        e.preventDefault();
        /* Creating a new formData object, and then appending the data to the formData object. */
        const formData = new FormData();
        /* Appending the data to the formData object. */
        formData.append('title', posts.title);
        formData.append('description', posts.content);
        formData.append('tags', posts.tags);
        formData.append('posting_time', posts.posting_time);
        formData.append('posting_date', posts.posting_date);
        formData.append("images", file);

        /* Looping through the file object and appending each file to the formData object. */
        // for (const i of Object.keys(file)) {
        //     formData.append("images", file[i]);
        // }

        /* Making a post request to the server. */
        const res = await axios.put(`${BASE_URL}${POST_URL}/${id}`, formData, {
            headers: HEADER
        })
        /* Checking if the response from the server is successful, and then displaying a success
        message. If the response is not successful, it displays an error message. */
        if (res.data.success) {
            /* Displaying a success message. */
            toast(res.data.message, {
                type: 'success'
            })
            // navigate('/posts')
        } else {
            toast(res.message, {
                type: 'error'
            })
        }

      
        
    }

    useEffect(() => {
        getPostById()
    }, [])
    return (
        /* A form that takes in the data from the user, and then sends it to the server. */
        <form method='post' encType='multipart/form-data' onSubmit={savePost}>
            <div className="bg-white py-9 rounded-lg ">
                {/* A form input field that takes in the title of the post. */}
                <div className="my-3 px-10">
                    <label htmlFor="" className='text-[#1F2937]'>Add News Title</label>
                    <input type="text" onChange={inputHandle} value={posts.title} name="title" id="" className='py-5 px-2 w-full border my-3 rounded-lg outline-none' />
                </div>
                <div className="my-3 px-10 grid md:grid-cols-2 grid-cols-1 gap-8">
                    <div className=' '>
                        <label htmlFor="" className='text-[#1F2937]'>Add Tag or Highlight</label>
                        <input type="text" onChange={inputHandle} value={posts.tags} name="tags" id="" className='py-5 px-2 w-full border my-3 rounded-lg outline-none ' />
                    </div>
                    <div className=''>
                        <label htmlFor="" className='text-[#1F2937]' className='text-center'>Add Images/Thumbnail</label>
                        <div className="flex justify-center items-center w-full">
                            <label htmlFor="dropzone-file" className="flex  flex-col justify-center items-center w-full bg-[#1877F2]-50 rounded-lg border-2 border-[#1877F2]-300 border-dashed cursor-pointer dark:hover:bg-[#1877F2]-800 dark:bg-[#1877F2]-700 hover:bg-[#1877F2]-100 dark:border-[#1877F2]-600 dark:hover:border-[#1877F2]-500 ">
                                <div className="flex flex-col justify-center items-center py-3 px-2  ">
                                    <p className="mb-2 text-sm text-gray-500 ">
                                        <img src={vector2} alt="" />
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        Drag and Drop or Browser
                                    </p>
                                </div>
                                <input id="dropzone-file" multiple onChange={changeHandler} type="file" className="hidden" />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="my-3 px-10">
                    <label htmlFor="" className='text-[#1F2937]'>New Body</label>
                    <textarea onChange={inputHandle} value={posts.content} name="content" id="" cols="30" rows="5" className='py-5 px-2 w-full border my-3 rounded-lg outline-none'></textarea>
                </div>
                <div className="my-3 px-10 grid md:grid-cols-2 grid-cols-1 gap-8">
                    <div>
                        <label htmlFor="" className='text-[#1F2937]'>Posting Time</label>
                        <input type="time" onChange={inputHandle} value={posts.posting_time} name="posting_time" id="" className='py-5 px-2 w-full border my-3 rounded-lg outline-none' />
                    </div>
                    <div>
                        <label htmlFor="" className='text-[#1F2937]'>Posting Date</label>
                        <input type="date" onChange={inputHandle} value={posts.posting_date} name="posting_date" id="" className='py-5 px-2 w-full border my-3 rounded-lg outline-none' />
                    </div>
                </div>
                <div>
                    <div className='ml-9 flex items-center'>
                        <input type="checkbox" className='h-5 w-5' value={posts.notification} onChange={inputHandle} name="notification" id="" />
                        <span className='ml-4 text-md'>Send Push Notification of this post</span>
                    </div>
                </div>
            </div>
            <div className='flex justify-end'>
                <button className="px-7 rounded text-white my-5 flex  py-3 bg-purple-600">Add Post</button>
            </div>
        </form>
    )
}

/* Exporting the AddPost component. */
export default UpdatePost