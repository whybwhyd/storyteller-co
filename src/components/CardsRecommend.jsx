import React from 'react'
import * as St from '../style/StCardStyled'

function CardsRecommend({ data }) {
  const navigateToDetailHandler = (videoId) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank')
  }

  return (
    <>
      <St.CardsList>
        {data.map((item, index) => (
          <St.Cards key={index} onClick={() => navigateToDetailHandler(item.id.videoId)}>
            <img src={item.snippet.thumbnails.default.url} alt='thumbnail' />
            <St.ContentsDiv>{item.snippet.title}</St.ContentsDiv>
          </St.Cards>
        ))}
      </St.CardsList>
    </>
  )
}

export default CardsRecommend
