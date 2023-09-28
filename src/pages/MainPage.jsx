import React from 'react'
import * as St from '../style/StMainPageStyled'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import DramaMain1 from '../assets/DramaMain1.jpg'
import { getStorys } from '../axios/api'
import { useQuery } from 'react-query'
import { UpButton } from '../components/Button'
import YoutubeMain from './YoutubeMain'

const MainPage = () => {
  const navigate = useNavigate()

  const { isLoading, data } = useQuery('infos', getStorys)

  if (isLoading) {
    return <div>로딩중입니다..</div>
  }

  return (
    <div id='1'>
      <St.ContainerDiv>
        <St.SearchImgDiv>
          <St.MainImg
            src={DramaMain1}
            onClick={() => {
              navigate('/about')
            }}
          ></St.MainImg>

          <St.FaSearchDiv>
            <FaSearch
              onClick={() => {
                navigate('/search')
              }}
            />
          </St.FaSearchDiv>
        </St.SearchImgDiv>
        <h2>로맨스</h2>
        <div>
          <St.Category1Div>
            {data
              .filter((item) => item.category === '로맨스')
              .map((info) => {
                return (
                  <St.CategoryInputDiv
                    key={info.title}
                    onClick={() => {
                      navigate(`/detail/:${info.id}`)
                    }}
                  >
                    <St.Img src={info.img} alt='드라마 이미지'></St.Img>
                    <St.TitleDiv> 제목 : {info.title}</St.TitleDiv>
                    <St.ContentsDiv> 줄거리 : {info.body}</St.ContentsDiv>
                  </St.CategoryInputDiv>
                )
              })}
          </St.Category1Div>
        </div>

        <h2>액션</h2>

        <div>
          <St.Category1Div>
            {data
              .filter((item) => item.category === '액션')
              .map((info) => {
                return (
                  <St.CategoryInputDiv
                    key={info.title}
                    onClick={() => {
                      navigate(`/detail/:${info.id}`)
                    }}
                  >
                    <div>
                      <St.Img src={info.img} alt='드라마 이미지'></St.Img>
                    </div>

                    <St.TitleDiv> 제목 : {info.title}</St.TitleDiv>
                    <St.ContentsDiv> 줄거리 : {info.body}</St.ContentsDiv>
                  </St.CategoryInputDiv>
                )
              })}
          </St.Category1Div>
        </div>

        <h2>공포</h2>
        <div>
          <St.Category1Div>
            {data
              .filter((item) => item.category === '공포')

              .map((info) => {
                return (
                  <St.CategoryInputDiv
                    key={info.title}
                    onClick={() => {
                      navigate(`/detail/:${info.id}`)
                    }}
                  >
                    <St.Img src={info.img} alt='드라마 이미지'></St.Img>
                    <St.TitleDiv> 제목 : {info.title}</St.TitleDiv>
                    <St.ContentsDiv> 줄거리 : {info.body}</St.ContentsDiv>
                  </St.CategoryInputDiv>
                )
              })}
          </St.Category1Div>
        </div>

        <h2>SF</h2>
        <div>
          <St.Category1Div>
            {data
              .filter((item) => item.category === 'SF')

              .map((info) => {
                return (
                  <St.CategoryInputDiv
                    key={info.title}
                    onClick={() => {
                      navigate(`/detail/:${info.id}`)
                    }}
                  >
                    <St.Img src={info.img} alt='드라마 이미지' />
                    <St.TitleDiv> 제목 : {info.title}</St.TitleDiv>
                    <St.ContentsDiv> 줄거리 : {info.body}</St.ContentsDiv>
                  </St.CategoryInputDiv>
                )
              })}
          </St.Category1Div>
        </div>
        <h2>추천 페이지</h2>
        <div>
          <St.Category1Div>
            <YoutubeMain />
          </St.Category1Div>
        </div>
      </St.ContainerDiv>
      <UpButton />
    </div>
  )
}

export default MainPage
