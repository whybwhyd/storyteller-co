import React from 'react'
import * as St from '../style/StDetailStyled'
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll/modules'
import { useNavigate } from 'react-router-dom'

export const DetailButton = (props) => {
  const { handleLike, liked,img, id,title, createdBy, body, director,category } = props
  return (
    <div>
      <St.DetailButtonContainer>
        <St.LikeButton liked={liked} onClick={handleLike}>
          {liked ? '❤️ Like' : '🤍 Like'}
        </St.LikeButton>
        <br />
        <Link to={`/edit/${encodeURIComponent(id)}`} state={{
          img,
          title,
          createdBy,
          body,
          director,
          category
        }}>
        <St.EditButton>Edit</St.EditButton>
        </Link>
      </St.DetailButtonContainer>
    </div>
  )
}
export const UpButton = () => {
  return (
    <div>
      <ScrollLink to='1'>
        <St.UpButton>
          <St.Up>∧</St.Up>
        </St.UpButton>
      </ScrollLink>
    </div>
  )
}
export const WriteButton = (props) => {
  const { handleSave } = props
  const navigate = useNavigate()
  const handleCancel = () => {
    navigate('/admin')
  }

  return (
    <div>
      <St.WriteButtonContainer>
        <St.CancelButton onClick={handleCancel}>Cancel</St.CancelButton>
        <St.SaveButton onClick={handleSave}>Save</St.SaveButton>
      </St.WriteButtonContainer>
    </div>
  )
}
export const EditButton = (props) => {
  const { handleEdit,id } = props
  const navigate = useNavigate()
  const handleCancel = () => {
    navigate(`/detail/:${id}`)
  }

  return (
    <div>
      <St.WriteButtonContainer>
        <St.CancelButton onClick={handleCancel}>Cancel</St.CancelButton>
        <St.SaveButton onClick={handleEdit}>Save</St.SaveButton>
      </St.WriteButtonContainer>
    </div>
  )
}
