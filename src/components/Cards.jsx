import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as St from '../style/StCardStyled'

function Cards({ data }) {
  const navigate = useNavigate()

  const navigateToDetailHandler = (id) => {
    navigate(`/detail/:${id}`)
  }

  return (
    <>
      <St.CardsList>
        {data.map((item, index) => (
          <St.Cards key={index} onClick={() => navigateToDetailHandler(item.id)}>
            <St.CardsImg src={item.img} />
            <div>{item.category}</div>
            <div>{item.title}</div>
            <div>{item.createdBy}</div>
          </St.Cards>
        ))}
      </St.CardsList>
    </>
  )
}

export default Cards
