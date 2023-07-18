import React, { useState } from 'react'
import * as St from '../style/StDetailStyled'
import Drama1 from '../assets/Drama1.jpg'
import { DetailButton, UpButton } from '../components/Button'

const DetailsPage = () => {
  const [liked, setLiked] = useState(false)

  const handleLike = () => {
    setLiked(!liked)
  }
  return (
    <div id='1'>
      <St.Grid>
        <St.DramaImg src={Drama1} alt='알고있지만 드라마 사진' />
        <h4> editor-name</h4>
        {/* <St.Context>Title<br/><br/>book-introduction-context</St.Context> */}
        <St.Context>
          <h2>알고있지만</h2>
          <div>
            사랑은 못 믿어도 연애는 하고 싶은 여자, 나비 연애는 성가셔도 썸은 타고 싶은 남자, 재언
            <br />
            결코 평범하지 않은 청춘들의 하이퍼리얼리즘 로맨스.
            <br />
            <br />
            알고 있지만, 그럼에도 불구하고.
          </div>
        </St.Context>
        <St.Context>
          {/* <div>author-context</div> */}
          <h2>제작정보</h2>
          <div>
            <h4>제작사</h4>
            비욘드제이, 스튜디오N, JTBC스튜디오 제작진
            <h4>제작</h4>
            정아름, 권미경, 박성은
            <h4>연출</h4>
            김가람, 장지연 PD 김보름, 박우람
          </div>
        </St.Context>
        <St.YoutubeContext>youtube-privew</St.YoutubeContext>
        <DetailButton handleLike={handleLike} liked={liked} />
      </St.Grid>
      <UpButton />
    </div>
  )
}

export default DetailsPage
