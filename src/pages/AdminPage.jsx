import React from 'react'
import { Link } from 'react-router-dom'

const AdminPage = () => {
  return (
    <>
      <div>AdminPage</div>
      <button>Admin Login</button>
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
