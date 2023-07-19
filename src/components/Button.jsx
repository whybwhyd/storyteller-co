import React from 'react'
import * as St from '../style/StDetailStyled'
import { Link as ScrollLink } from 'react-scroll/modules'
import { useNavigate } from 'react-router-dom'

export const DetailButton = (props) => {
  const { handleLike, liked } = props
  return (
    <div>
      <St.DetailButtonContainer>
        <St.LikeButton liked={liked} onClick={handleLike}>
          {liked ? '❤️ Like' : '🤍 Like'}
        </St.LikeButton>
        <br />
        {/* <St.EditButton>Edit</St.EditButton> */}
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
