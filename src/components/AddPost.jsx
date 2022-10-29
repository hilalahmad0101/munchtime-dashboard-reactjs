import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import vector2 from '../assets/vector2.png'
import HEADER, { BASE_URL, HEADER_IMAGE, POST_CATEGORIES, POST_URL } from '../urls'
import CategoryModal from './CategoryModel'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
const AddPost = () => {

    const [modal, setModal] = useState(false)

    /* Used to navigate to another page. */
    const navigate = useNavigate();

    const [categories, setCategories] = useState([])

    const [content,setContent]=useState("");

    const getCategories = async () => {
        const res = await (await fetch(`${BASE_URL}${POST_CATEGORIES}`, {
            method: 'GET',
            headers: HEADER
        })).json();
        if (res.success) {
            setCategories(res.categories)
        }
        console.log(res);
    }

    /* A state variable. */
    const [posts, setPosts] = useState({
        title: '',
        tags: [],
        images: [],
        
        posting_time: '',
        posting_date: '',
        notification: false,
    })

    /* A state variable. */
    const [file, setFile] = useState([]);
    /**
     * The function takes an event as an argument, and then sets the state of the posts object to the
     * value of the input field
     */

    const handleChange=(e,editor)=>{
const data=editor.getData()
setContent(data);
console.log(data)
    }
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
        console.log(content);
        /* It prevents the default action of the event from happening. */
        e.preventDefault();
        /* Creating a new formData object, and then appending the data to the formData object. */
        const formData = new FormData();
        /* Appending the data to the formData object. */
        formData.append('title', posts.title);
        formData.append('description', content);
        formData.append('tags', posts.tags);
        formData.append('posting_time', posts.posting_time);
        formData.append('posting_date', posts.posting_date);
        formData.append("files", file);
        /* Looping through the file object and appending each file to the formData object. */
        // for (const i of Object.keys(file)) {
        //     formData.append("images", file[i]);
        // }

        /* Making a post request to the server. */
        const res = await axios.post(`${BASE_URL}${POST_URL}`, formData, {
            headers: HEADER_IMAGE
        })
        /* Checking if the response from the server is successful, and then displaying a success
        message. If the response is not successful, it displays an error message. */
        console.log(res.data);
        if (res.data.success) {
            /* Displaying a success message. */
            toast(res.data.message, {
                type: 'success'
            })
            // navigate('/posts')
        } else {
            toast(res.data.message, {
                type: 'error'
            })
        }
    }


    useEffect(() => {
        getCategories()
    }, [])

    return (
        /* A form that takes in the data from the user, and then sends it to the server. */
        <form method='post' encType='multipart/form-data' onSubmit={savePost}>
            <div className="bg-white py-9 rounded-lg ">
                {/* A form input field that takes in the title of the post. */}
                <div className="my-3 px-10 grid md:grid-cols-2 grid-cols-1 gap-8">
                    <div className="my-3 ">
                        <label htmlFor="" className='text-[#1F2937]'>Add News Title</label>
                        <input type="text" onChange={inputHandle} value={posts.title} name="title" id="" className='py-5 px-2 w-full border my-3 rounded-lg outline-none' />
                    </div>
                    <div className="my-3 ">
                        <div className="flex justify-between items-center">
                            <label htmlFor="" className='text-[#1F2937]'>Select Category</label>
                            <button onClick={() => { setModal(!modal) }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            </button>
                        </div>
                        <select name="title" id="" className='py-5 px-2 w-full border my-3 rounded-lg outline-none'>
                            {categories == 0 && <option>Record not found</option>}
                            {categories && categories.map(val => {
                                return <option value="">{val.category_name}</option>
                            })}
                        </select>
                    </div>
                </div>
                <div className="my-3 px-10 grid md:grid-cols-2 grid-cols-1 gap-8">
                    <div className=' '>
                        <label htmlFor="" className='text-[#1F2937]'>Add Tag or Highlight</label>
                        <input type="text" onChange={inputHandle} value={posts.tags} name="tags" id="" className='py-5 px-2 w-full border my-3 rounded-lg outline-none' />
                    </div>
                    <div className=''>
                        <label htmlFor="" className='text-[#1F2937] ml-[106px]'>Add Images/Thumbnail</label>
                        <div className="flex justify-center items-center w-full mt-3">
                            <label htmlFor="dropzone-file" className="flex  flex-col justify-center items-center rounded-lg border-2 border-[#1877F2] border-dashed cursor-pointer    dark:border-[#1877F2] dark:hover:border-[#1877F2] w-[50%]">
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
                    <CKEditor
                        className="h-32"
                        editor={ClassicEditor}
                        data=""
                        onChange={handleChange}
                    />
                    {/* <textarea onChange={inputHandle} value={posts.content} name="content" id="" cols="30" rows="5" className='hidden py-5 px-2 w-full border my-3 rounded-lg outline-none'></textarea> */}
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
            <CategoryModal modal={modal} setModal={setModal} getCategory={getCategories} />
        </form>
    )
}

/* Exporting the AddPost component. */
export default AddPost