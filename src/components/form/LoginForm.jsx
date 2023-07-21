import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import {
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";

function LoginForm({ closeModal }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [currentUser, setCurrentUser] = useState(auth.currentUser);
    const [loginMessage,setloginMessage] =  useState('');
  
    const navigate = useNavigate();
  
    const onChange = event => {
      const {
        target: { name, value }
      } = event;
      if (name === 'email') {
        setEmail(value);
      }
      if (name === 'password') {
        setPassword(value);
      }
    };

    const signIn = async e => {
      e.preventDefault();
        try {
          const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
          );
          setCurrentUser(userCredential.user.email);
          console.log("Auth",auth);
          navigate('/admin');
        } catch (error) {
          if(error){
            return setloginMessage(`관리자 아이디가 아닙니다.`);
          }
        }
        setEmail('');
        setPassword('');
    };

    return (
    <>
       {currentUser ? (
        <form>
        <StModalBox
          onClick={event => {
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
        >
          <StModalContents>
          <StSignBtn onClick={async () => {
            navigate('/admin');
        }} >관리자 페이지</StSignBtn>
            <StSignBtn onClick={async () => {
          alert("로그아웃을 하시겠습니까?");
          await auth.signOut();
        }} >로그아웃</StSignBtn>
          </StModalContents>
        </StModalBox>
      </form>
) :
       (
       <form  onSubmit={signIn}>

        <StModalBox
          onClick={event => {
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
        >
          <StModalContents>
            <StBox>
              <StDeleteBtn type="button" onClick={closeModal}>
                닫기
              </StDeleteBtn>
            </StBox>
  
            <StLeftBox>ID</StLeftBox>
  
            <StInput placeholder="" name="email" value={email} onChange={onChange} />
  
            <StLeftBox>PASSWORD </StLeftBox>
  
            <StInput
              placeholder=""
              name="password"
              type="password"
              value={password}
              onChange={onChange}
            />
            <Stloginmessage>{loginMessage}</Stloginmessage>
            <StSignBtn type="submit">로그인</StSignBtn>
          </StModalContents>
        </StModalBox>
      </form>
      )}
    </>
    );
  }
  
  export default LoginForm;
  
  const StInput = styled.input`
    border: solid 1px #e8e8e8;
    border-radius: 8px;
    width: 80%;
    height: 46.8px;
    padding: 0px;
    margin-bottom: 10px;
    border: 1px solid #e8e8e8;
    outline: none;
    font-family: 'inter', sans-serif;
  `;
  const StLeftBox = styled.label`
    display: flex;
    justify-content: left;
    width: 80%;
    font-size: 15px;
    font-family: 'inter', sans-serif;
  `;
  
  const StSignBtn = styled.button`
    width: 80%;
    height: 63px;
    border: solid 0px;
    border-radius: 20px;
    font-size: 20px;
    text-align: center;
    color: #000000;
    background-color: #ffffff;
    margin-bottom: 10px;
  `;

const StBox = styled.div`
display: flex;
justify-content: flex-end;
width: 100%;
`;

const StModalContents = styled.div`
  background-color: #E9E6D8;
  width: 518px;
  height: 346px;
  padding: 20px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

 const StModalBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

 const StDeleteBtn = styled.button`
  background-color: #ffffff;
  color: #2D8675;
  border-radius: 20px;
  border: 1px solid #2D8675;
  width: 70px;
  height: 33px;
  font-size: 12px;
  margin-right: 15px;
  position: ${props => props.custompostion};
  right: ${props => props.customright};
  &:hover {
    height: 30px;
    color: #ffffff;
    background-color: #2D8675;
    border: 1px solid #2D8675;
    box-shadow: 2px 2px 2px 2px #e8e8f8;
    cursor: pointer;
    font-weight: bolder;
  }
`;

  const Stloginmessage = styled.span`
    font-family: 'inter', sans-serif;
    color: #AF1F2B;
  `;
