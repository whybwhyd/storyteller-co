import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import DetailsPage from '../pages/DetailsPage'
import AdminPage from '../pages/AdminPage'
import SearchPage from '../pages/SearchPage'
import AboutPage from '../pages/AboutPage'
import Write from '../pages/Write'
import Layout from './Layout'

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/details/:id' element={<DetailsPage />} />
          <Route path='/aboutPage' element={<AboutPage />} />
          <Route path='/admin' element={<AdminPage />} />
          <Route path='/write' element={<Write />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default Router
