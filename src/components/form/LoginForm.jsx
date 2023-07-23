import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as St from '../../style/StLoginFormStyled'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'

function LoginForm({ closeModal }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [currentUser, setCurrentUser] = useState(auth.currentUser)
  const [loginMessage, setloginMessage] = useState('')

  const navigate = useNavigate()

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event
    if (name === 'email') {
      setEmail(value)
    }
    if (name === 'password') {
      setPassword(value)
    }
  }

  const signIn = async (e) => {
    e.preventDefault()
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      setCurrentUser(userCredential.user.email)
      console.log('Auth', auth)
      navigate('/admin')
    } catch (error) {
      if (error) {
        return setloginMessage(`관리자 아이디가 아닙니다.`)
      }
    }
    setEmail('')
    setPassword('')
  }

  return (
    <>
      {currentUser ? (
        <form>
          <St.ModalBox
            onClick={(event) => {
              if (event.target === event.currentTarget) {
                closeModal()
              }
            }}
          >
            <St.ModalContents>
              <St.SignBtn
                onClick={async () => {
                  navigate('/admin')
                }}
              >
                관리자 페이지
              </St.SignBtn>
              <St.SignBtn
                onClick={async () => {
                  alert('로그아웃을 하시겠습니까?')
                  await auth.signOut()
                }}
              >
                로그아웃
              </St.SignBtn>
            </St.ModalContents>
          </St.ModalBox>
        </form>
      ) : (
        <form onSubmit={signIn}>
          <St.ModalBox
            onClick={(event) => {
              if (event.target === event.currentTarget) {
                closeModal()
              }
            }}
          >
            <St.ModalContents>
              <St.Box>
                <St.DeleteBtn type='button' onClick={closeModal}>
                  닫기
                </St.DeleteBtn>
              </St.Box>

              <St.LeftBox>ID</St.LeftBox>

              <St.Input placeholder='' name='email' value={email} onChange={onChange} />

              <St.LeftBox>PASSWORD </St.LeftBox>

              <St.Input placeholder='' name='password' type='password' value={password} onChange={onChange} />
              <St.LoginMessage>{loginMessage}</St.LoginMessage>
              <St.SignBtn type='submit'>로그인</St.SignBtn>
            </St.ModalContents>
          </St.ModalBox>
        </form>
      )}
    </>
  )
}

export default LoginForm
