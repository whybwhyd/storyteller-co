import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import DetailsPage from '../pages/DetailsPage'
import AdminPage from '../pages/AdminPage'
import SearchPage from '../pages/SearchPage'
import AboutPage from '../pages/AboutPage'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/details/:id' element={<DetailsPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/admin' element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
