import React from 'react'
import * as St from '../style/StAdminPageStyled'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import Listadmin from '../components/Listadmin'

const AdminPage = () => {
  const navigate = useNavigate()

  return (
    <>
      <St.FlexAll>
        <St.AdminTitle>Admin</St.AdminTitle>
        <St.LogoutButton
          onClick={async () => {
            alert('로그아웃을 하시겠습니까?')
            await auth.signOut()
            navigate('/')
          }}
        >
          Logout
        </St.LogoutButton>
      </St.FlexAll>
      <Link to='/write'>
        <St.WriteButton>글 작성</St.WriteButton>
      </Link>

      <St.List>
        <St.ListTitle>글목록</St.ListTitle>
        <St.Flex>
          <St.ListTitleBox>TITLE</St.ListTitleBox>
          <St.ListBodyBox>CONTENT</St.ListBodyBox>
        </St.Flex>
        <Listadmin />
      </St.List>
    </>
  )
}

export default AdminPage
