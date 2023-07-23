import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import DetailPage from '../pages/DetailPage'
import AdminDetailPage from '../pages/AdminDetailPage'
import AdminPage from '../pages/AdminPage'
import SearchPage from '../pages/SearchPage'
import AboutPage from '../pages/AboutPage'
import WritePage from '../pages/WritePage'
import EditPage from '../pages/EditPage'
import Layout from './Layout'

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/detail/:id' element={<DetailPage />} />
          <Route path='/adminDetail/:id' element={<AdminDetailPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/admin' element={<AdminPage />} />
          <Route path='/write' element={<WritePage />} />
          <Route path='/edit/:id' element={<EditPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default Router
