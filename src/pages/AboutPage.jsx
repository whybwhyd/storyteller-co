import { React, useState } from 'react'
import * as St from '../style/StAboutStyled'
import logo1 from '../assets/logo1.png'
import LoginForm from '../components/form/LoginForm'

const AboutPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <>
      <St.Container>
        <St.AboutContent>
          <St.Logo src={logo1} alt='logo' />
          {`집이 제일 좋은 사람들의 드라마 추천 페이지`}
        </St.AboutContent>
        <St.LoginBtn onClick={openModal}>Admin</St.LoginBtn>
      </St.Container>
      {isOpen && <LoginForm closeModal={closeModal} />}
    </>
  )
}

export default AboutPage
