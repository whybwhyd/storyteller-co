import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as St from '../style/StCardStyled'

function CardsRecommend({ data }) {
  const navigate = useNavigate()

  // ★★★링크 넘어가는지 확인 필요! api 횟수 끝나서 아직 확인 못함! ㅠㅠ★★★
  const navigateToDetailHandler = (id) => {
    navigate(`https://www.youtube.com/watch?v=${id.videoId}`)
  }

  return (
    <>
      <St.CardsList>
        {data.map((item, index) => (
          <St.Cards key={index} onClick={() => navigateToDetailHandler(item.id.videoId)}>
            <img src={item.snippet.thumbnails.default.url} alt='thumbnail' />
            <div>{item.id.videoId}</div>
            <div>{item.snippet.title}</div>
          </St.Cards>
        ))}
      </St.CardsList>
    </>
  )
}

export default CardsRecommend
