import React from 'react'
import { styled } from 'styled-components'
import { useState } from 'react';
import LoginForm from '../components/form/LoginForm';

const AboutPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (<>
  <StContainer>
  <StAboutContent>AboutPage</StAboutContent>
  <StLoginBtn onClick={openModal}>Admin</StLoginBtn >
  </StContainer>
  {isOpen && <LoginForm closeModal={closeModal} />}
  </>
  )
}

export default AboutPage

const StAboutContent = styled.div`

`

const StLoginBtn = styled.button`
 background-color: #2D8675;
 color: #FFFFFF;
 border: solid 1px #2D8675;
 border-radius: 10px;
 &:hover {
    height: 20px;
    color: #2D8675;
    background-color: #ffffff;
    border: 1px solid #2D8675;
    box-shadow: 2px 2px 2px 2px #e8e8f8;
    cursor: pointer;
    font-weight: bolder;
 }
`

const StContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 2;
  background-color: #f5f5f7;
`