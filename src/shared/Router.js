import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import JoinPage from '../pages/JoinPage'
import MainPage from '../pages/MainPage'
import LoginPage from '../pages/LoginPage'
import DetailsPage from '../pages/DetailsPage'
import AboutPage from '../pages/AboutPage'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/join' element={<JoinPage />} />
        <Route path='/details/:id' element={<DetailsPage />} />
        <Route path='/AboutPage' element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
