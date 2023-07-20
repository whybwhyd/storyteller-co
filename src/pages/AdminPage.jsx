import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import Listadmin from '../components/Listadmin';

const AdminPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>AdminPage</div>
      <button onClick={async () => {
          alert("로그아웃을 하시겠습니까?");
          await auth.signOut();
          navigate('/');
        }}>Admin Logout</button>
      <Link to='/write'>
        <button>글 작성</button>
      </Link>
      <div>
        <Listadmin></Listadmin>
      </div>
    </>
  )
}

export default AdminPage
