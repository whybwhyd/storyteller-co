import React from 'react'
import * as St from '../style/StDetailStyled'
import { Link as ScrollLink } from 'react-scroll/modules'

export const DetailButton = (props) => {
  const { handleLike, liked } = props
  return (
    <div>
      <St.ButtonContainer>
        <St.LikeButton liked={liked} onClick={handleLike}>
          {liked ? '❤️ Like' : '🤍 Like'}
        </St.LikeButton>
        <br />
        <St.EditButton>Edit</St.EditButton>
      </St.ButtonContainer>
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
