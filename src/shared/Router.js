import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import JoinPage from '../pages/JoinPage'
import MainPage from '../pages/MainPage'
import LoginPage from '../pages/LoginPage'
import DetailsPage from '../pages/DetailsPage'
import AdminPage from '../pages/AdminPage'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/join' element={<JoinPage />} />
        <Route path='/details/:id' element={<DetailsPage />} />
        <Route path='/admin' element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
