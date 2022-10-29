import React, { useContext, useState } from 'react'
import munchtime from '../assets/munchtime1.png'
import add2 from '../assets/add2.png'
import add3 from '../assets/add3.png'
import post2 from '../assets/post2.png'
import faq from '../assets/faq.png'
import faq2 from '../assets/faq2.png'
import group from '../assets/group.png'
import group2 from '../assets/group2.png'
import layer from '../assets/layer.png'
import layer2 from '../assets/layer2.png'
import vector2 from '../assets/vector2.png'
import post from '../assets/post.png'
import add from '../assets/add.jpg'
import vector from '../assets/vector.png'
import { NavLink, useLocation } from 'react-router-dom'
import { GlobalContext } from '../contextapi/GlobalContext'
const Sidebar = () => {

  const location = useLocation();
  const [navbar, setNavbar] = useState(false)
  const { logout, token } = useContext(GlobalContext)

  return (
    // /* A sidebar component that is used to navigate through the admin dashboard. */
    <div>
      <div className={`h-screen hidden  lg:block lg:w-[250px] w-0 bg-[#6D44B8] fixed ${token ? 'w-0' : ''}`}>
        <img src={munchtime} alt="" className='mx-auto py-10' />
        <div>
          <ul className=''>
            <NavLink to={'/add/posts'} className="group">
              <li className={`flex px-12 py-5 mr-6 rounded-r-2xl items-center group-hover:bg-white  ${location.pathname == '/add/posts' ? ' bg-white' : ''}`}>
               {location.pathname == '/add/posts' ?  <img src={add3} alt="" className='mr-4' /> :  <img src={add2} alt="" className='mr-4' />}
                <span className={`text-sm font-bold group-hover:text-[#6D44B8]  ${location.pathname == '/add/posts' ? 'text-[#6D44B8]' : 'text-white'}`}>New Post</span>
              </li>
            </NavLink>
            <NavLink to={'/posts'} className="group">
              <li className={`flex px-12 py-5 mr-6 rounded-r-2xl group-hover:bg-white items-center ${location.pathname == '/posts' ? ' bg-white' : ''}`}>
              {location.pathname == '/posts' ?  <img src={post2} alt="" className='mr-4' /> :  <img src={post} alt="" className='mr-4' />}
                <span className={`text-sm font-bold group-hover:text-[#6D44B8] ${location.pathname == '/posts' ? 'text-[#6D44B8]' : 'text-white'}`}>All Posts</span>
              </li>
            </NavLink>
            <NavLink to={'/faq'} className="group">
              <li className={`flex px-12 py-5 mr-6 rounded-r-2xl group-hover:bg-white items-center ${location.pathname == '/faq' ? ' bg-white' : ''}`}>
              {location.pathname == '/faq' ?  <img src={faq2} alt="" className='mr-4' /> :  <img src={faq} alt="" className='mr-4' />}
                <span className={`text-sm font-bold group-hover:text-[#6D44B8] ${location.pathname == '/faq' ? 'text-[#6D44B8]' : 'text-white'}`}>Faq</span>
              </li>
            </NavLink>
            <NavLink to={'/feedbacks'} className="group">
              <li className={`flex px-12 py-5 mr-6 rounded-r-2xl group-hover:bg-white items-center ${location.pathname == '/feedbacks' ? ' bg-white' : ''}`}>
              {location.pathname == '/feedbacks' ?  <img src={layer2} alt="" className='mr-4' /> :  <img src={layer} alt="" className='mr-4' />}
                <span className={`text-sm font-bold group-hover:text-[#6D44B8] ${location.pathname == '/feedbacks' ? 'text-[#6D44B8]' : 'text-white'}`}>FeedBacks</span>
              </li>
            </NavLink>
            <NavLink to={'/setting'} className="group">
              <li className={`flex px-12 py-5 mr-6 rounded-r-2xl group-hover:bg-white items-center ${location.pathname == '/setting' ? ' bg-white' : ''}`}>
              {location.pathname == '/setting' ?  <img src={group2} alt="" className='mr-4' /> :  <img src={group} alt="" className='mr-4' />}
                <span className={`text-sm font-bold group-hover:text-[#6D44B8] ${location.pathname == '/setting' ? 'text-[#6D44B8]' : 'text-white'}`}>Setting</span>
              </li>
            </NavLink>
            <li onClick={logout} className='flex px-12 py-5  mr-6 rounded-r-2xl group-hover:bg-white items-center  cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-4 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
              </svg>

              <span className='text-sm font-bold group-hover:text-[#6D44B8] text-white'>Logout</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full lg:hidden bg-purple-400 fixed">
        <div className="container mx-auto max-w-4xl px-20">
          <div className='flex items-center justify-between'>
            <img src={munchtime} alt="" className='py-4 w-[100px]' />
            <svg onClick={() => { setNavbar(!navbar) }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
          <div className={` ${navbar ? 'block' : 'hidden'} fixed bg-purple-400 w-full left-0`}>
            <div className='container mx-auto max-w-4xl px-20'>
              <ul className=''>
                <NavLink to={'/add/posts'} className="group">
                  <li className={`flex  py-2 rounded-r-2xl items-center `}>
                    {/* <img src={add} alt="" className='mr-4' /> */}
                    <span className='text-sm font-bold group-hover:text-[#6D44B8] text-white'>New Post</span>
                  </li>
                </NavLink>
                <NavLink to={'/posts'} className="group">
                  <li className='flex  py-2 rounded-r-2xl items-center'>
                    {/* <img src={vector} alt="" className='mr-4' /> */}
                    <span className='text-sm font-bold group-hover:text-[#6D44B8] text-white '>All Posts</span>
                  </li>
                </NavLink>
                <NavLink to={'/faq'} className="group">
                  <li className='flex  py-2 rounded-r-2xl items-center'>
                    {/* <img src={vector} alt="" className='mr-4' /> */}
                    <span className='text-sm font-bold group-hover:text-[#6D44B8] text-white '>Faq</span>
                  </li>
                </NavLink>
                <NavLink to={'/feedbacks'} className="group">
                  <li className='flex  py-2 rounded-r-2xl items-center'>
                    {/* <img src={vector} alt="" className='mr-4' /> */}
                    <span className='text-sm font-bold group-hover:text-[#6D44B8] text-white '>FeedBacks</span>
                  </li>
                </NavLink>
                <NavLink to={'/setting'} className="group">
                  <li className='flex  py-2 rounded-r-2xl items-center'>
                    {/* <img src={vector} alt="" className='mr-4' /> */}
                    <span className='text-sm font-bold group-hover:text-[#6D44B8] text-white '>Setting</span>
                  </li>
                </NavLink>
                <li onClick={logout} className='flex  py-2 rounded-r-2xl items-center cursor-pointer'>
                  {/* <img src={vector} alt="" className='mr-4' /> */}
                  <span className='text-sm font-bold group-hover:text-[#6D44B8] text-white '>Logout</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar