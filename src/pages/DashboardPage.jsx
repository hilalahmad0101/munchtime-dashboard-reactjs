import React, { useContext, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import UpdateModal from '../components/UpdateFaq'
import { GlobalContext } from '../contextapi/GlobalContext'
import AllPostPage from './AllPostPage'
import FaqPage from './FaqPage'
import FeedBackPage from './FeedBackPage'
import LoginPage from './LoginPage'
import PostPage from './PostPage'
import Setting from './Setting'
import UpdatePage from './UpdatePage'

const DashboardPage = () => {
  const { token } = useContext(GlobalContext)
  return (
    <>
      <div className='flex'>
        <div className=''>
          {token && <Sidebar />}
        </div>
        <div className={`w-full lg:my-0  my-10 ${token ? 'ml-0 lg:ml-[250px]' : 'ml-0'}  `}>
          <Routes>
            {
              !token && <Route path='' element={<LoginPage />} />
            }
            {token && <>
              <Route path='/add/posts' element={<PostPage />} />
              <Route path='/posts' element={<AllPostPage />} />
              <Route path='/faq' element={<FaqPage />} />
              <Route path='/update/faq/:id' element={<UpdateModal />} />
              <Route path='/feedbacks' element={<FeedBackPage />} />
              <Route path='/setting' element={<Setting />} />
              <Route path='/edit/post/:id' element={<UpdatePage />} />
            </>}
            <Route path="*" element={<Navigate to={!token ? '/' : '/posts'} />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default DashboardPage