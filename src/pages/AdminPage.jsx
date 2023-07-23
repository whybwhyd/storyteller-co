import React from 'react'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import Listadmin from '../components/Listadmin'

const AdminPage = () => {
  const navigate = useNavigate()

  return (
    <>
    <StFlexAll>
      <StH1>Admin</StH1>
      <StLogoutButton
        onClick={async () => {
          alert('로그아웃을 하시겠습니까?')
          await auth.signOut()
          navigate('/')
        }}
      >
        Logout
      </StLogoutButton>
      </StFlexAll>
      <Link to='/write'>
        <StWriteButton>글 작성</StWriteButton>
      </Link>

      <StList>
        <StListTitle>글목록</StListTitle>
        <StFlex>
          <StListTitleBox>TITLE</StListTitleBox>
          <StListBodyBox>CONTENT</StListBodyBox>
        </StFlex>
        <Listadmin></Listadmin>
      </StList>
    </>
  )
}

export default AdminPage

export const StFlexAll = styled.div`
  transform: translate(0px, 0px);
  /* margin-bottom:30px; */
  display: flex;

`
export const StH1 = styled.h1`
  transform: translate(46px, 0px);
`
export const StFlex = styled.div`
  transform: translate(80px, 0px);
  display: flex;
  margin-bottom:30px;
`
export const StLogoutButton = styled.button`
  transform: translate(450px, 30px);
  width:90px;
  height:40px;
  font-size:20px;
  border:2px solid white;
  color:white;
  background-color:transparent;
`
export const StWriteButton = styled.button`
  width:90px;
  height:40px;
  font-size:20px;
`
const StListTitle = styled.div`
  transform: translate(85px, 0px);
  margin:50px auto 50px auto;
  font-size: 25px;
  font-weight:bolder;
  text-decoration-line: none;
  color: white;
`
const StList = styled.div`
  text-decoration: none;
  color: white;
`
export const StListTitleBox = styled.div`
  width: 250px;
  padding: 4px;
  margin-right: 30px;
  font-size:20px;
  font-weight:bolder;
`
export const StListBodyBox = styled.div`
  width: 600px;
  padding: 4px;
  font-size:20px;
  font-weight:bolder;
`
