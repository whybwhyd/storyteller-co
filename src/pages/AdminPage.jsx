import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const AdminPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>AdminPage</div>
      <button onClick={async () => {
          alert("로그아웃을 하시겠습니까?");
          await signOut(auth);
          navigate('/');
        }}>Admin Logout</button>
      <Link to='/'>
        <button>글 목록</button>
      </Link>
      <Link to='/write'>
        <button>글 작성</button>
      </Link>
    </>
  )
}

export default AdminPage
