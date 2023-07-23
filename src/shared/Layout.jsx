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
  color: #e9e6d8;
  font-weight: 600;
`

const StFooter = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  background: #2d8675;
  color: #e9e6d8;
  align-items: center;
  justify-content: flex-start;
  font-size: 12px;
`
const StFooterP = styled.p`
  margin: 3px 0px 0px 20px;
  font-size: 15px;
`

const StLayout = styled.div`
  color: #e9e6d8;
  background-color: #153e4b;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 90vh;
  padding: 40px;
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
      <span>
        <StFooterP>(주) StoryTeller | Team: 떡잎마을방범대</StFooterP>
        <StFooterP>사업자등록번호: 123-45-6789 | 법인등록번호: 2020111-32703202</StFooterP>
        <StFooterP>
          연락처: 010-2023-0724/ github: https://github.com/hellokeitha/storyteller | 문의: Slack 떡잎마을방범대
        </StFooterP>
        <StFooterP>Copyright ⓒ 2023 StoryTeller All rights reserved.</StFooterP>
      </span>
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
