import React from 'react'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import logo2 from '../assets/logo2.png'

const StHeader = styled.div`
  width: 100%;
  background: #2d8675;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
  color: #e9e6d8;
  font-weight: 600;
`

const StFooter = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  background: #2d8675;
  color: #e9e6d8;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`

const StLayout = styled.div`
  color: #e9e6d8;
  background-color: #153e4b;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 90vh;
  padding: 80px;
  font-family: 'Hahmlet', serif;
`

const StLogo = styled.img`
  width: 200px;
  height: auto;
  cursor: pointer;
`

function Header() {
  const navigate = useNavigate()

  return (
    <StHeader>
      <StLogo src={logo2} alt='logo' onClick={() => navigate('/')} />
    </StHeader>
  )
}

function Footer() {
  return (
    <StFooter>
      <span>footer</span>
    </StFooter>
  )
}

function Layout({ children }) {
  return (
    <div>
      <Header />
      <StLayout>{children}</StLayout>
      <Footer />
    </div>
  )
}

export default Layout
