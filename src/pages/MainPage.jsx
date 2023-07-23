import React, { useEffect } from 'react'
import { styled } from 'styled-components'
import { FaSearch } from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router-dom'
import DramaMain1 from '../assets/DramaMain1.jpg'
import { getStorys } from '../axios/api'
import { useQuery } from 'react-query'
import YoutubeMain from './YoutubeMain'

const MainPage = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  console.log('title=>', id)

  const { isLoading, data } = useQuery('infos', getStorys)

  if (isLoading) {
    return <div>로딩중입니다..</div>
  }

  return (
    <div>
      <StContainerDiv>
        <StSearchImgDiv>
          <StMainImg
            src={DramaMain1}
            onClick={() => {
              navigate('/about')
            }}
          ></StMainImg>

          <StFaSearchDiv>
            <FaSearch
              onClick={() => {
                navigate('/search')
              }}
            />
          </StFaSearchDiv>
        </StSearchImgDiv>

        <h2>category1</h2>
        <div>
          <StCategory1Div>
            {data
              .filter((item) => item.category === 'category1')
              .map((info) => {
                return (
                  <StCategoryInputDiv
                    key={info.title}
                    onClick={() => {
                      navigate(`/detail/:${info.id}`)
                    }}
                  >
                    <StImg src={info.img} alt='드라마 이미지'></StImg>
                    <div> 제목 : {info.title}</div>
                    <StContentsDiv> 줄거리 : {info.body}</StContentsDiv>
                  </StCategoryInputDiv>
                )
              })}
          </StCategory1Div>
        </div>

        <h2>category2</h2>

        <div>
          <StCategory1Div>
            {data
              .filter((item) => item.category === 'category2')
              .map((info) => {
                return (
                  <StCategoryInputDiv
                    key={info.title}
                    onClick={() => {
                      navigate(`/detail/:${info.id}`)
                    }}
                  >
                    <div>
                      <StImg src={info.img} alt='드라마 이미지'></StImg>
                    </div>

                    <div> 제목 : {info.title}</div>
                    <StContentsDiv> 줄거리 : {info.body}</StContentsDiv>
                  </StCategoryInputDiv>
                )
              })}
          </StCategory1Div>
        </div>

        <h2>category3</h2>
        <div>
          <StCategory1Div>
            {data
              .filter((item) => item.category === 'category3')

              .map((story) => {
                return (
                  <StCategoryInputDiv
                    key={story.title}
                    onClick={() => {
                      navigate(`/detail/:${story.id}`)
                    }}
                  >
                    <StImg src={story.img} alt='드라마 이미지'></StImg>
                    <div> 제목 : {story.title}</div>
                    <StContentsDiv> 줄거리 : {story.body}</StContentsDiv>
                  </StCategoryInputDiv>
                )
              })}
          </StCategory1Div>
        </div>

        <h2>추천 페이지</h2>
        <div>
          <StCategory1Div>
            <YoutubeMain />
          </StCategory1Div>
        </div>
      </StContainerDiv>
    </div>
  )
}

export default MainPage

const StContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 50px;
`

const StSearchImgDiv = styled.div`
  position: relative;

  padding: 16px;
`

const StMainImg = styled.img`
  position: relative;

  height: 450px;
  width: 1000px;

  border: 1px solid black;

  cursor: pointer;
`

const StFaSearchDiv = styled.div`
  position: absolute;
  top: -5px;
  right: 16px;

  cursor: pointer;
`

const StCategoryInputDiv = styled.div`
  background-color: #e9e6d8;
  border-radius: 5px;
  color: #153e4b;
  width: 30vh;
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  margin-right: 15px;
  cursor: pointer;
`

const StCategory1Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
`

const StImg = styled.img`
  width: 30vh;
  height: 20vh;
  object-fit: cover;
  object-position: center center;
`
const StContentsDiv = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
