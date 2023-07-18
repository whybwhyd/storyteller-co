import React from 'react'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'

const StHeader = styled.div`
  width: 100%;
  background: #2d8675;
  height: 50px;
  display: flex;
  align-items: center;
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
  color: #0d3441;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
`

function Header() {
  const navigate = useNavigate()

  return (
    <StHeader>
      <span onClick={() => navigate('/')}>Story Teller</span>
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
