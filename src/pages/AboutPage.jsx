import { React } from 'react'
import * as St from '../style/StAboutStyled'
import logo1 from '../assets/logo1.png'

const AboutPage = () => {
  return (
    <>
      <St.Container>
        <St.AboutContent>
          <St.Logo src={logo1} alt='logo' />
          집이 제일 좋은 사람들의 드라마 추천 페이지
          <br />
          색다른 관전 포인트를 제공하는 특별한 컨텐츠 큐레이션 페이지, 스토리텔러
        </St.AboutContent>
      </St.Container>
    </>
  )
}

export default AboutPage
