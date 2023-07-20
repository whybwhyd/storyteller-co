import React, { useEffect } from 'react'
import { styled } from 'styled-components'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import DramaMain1 from '../assets/DramaMain1.jpg'
import { getPosts } from '../axios/api'
import { useQuery } from 'react-query'

const MainPage = () => {
  const navigate = useNavigate()

  const { isLoading, data } = useQuery('infos', getPosts)
  console.log(data)

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
                      navigate('/details/:id')
                    }}
                  >
                    <StImg></StImg>
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
                      navigate('/details/:id')
                    }}
                  >
                    <StImg></StImg>
                    <div> 제목 : {info.title}</div>
                    <StContentsDiv> 줄거리 : {info.body}</StContentsDiv>
                  </StCategoryInputDiv>
                )
              })}
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
  height: 150px;
  width: 200px;

  margin: 20px;

  border: 1px solid black;

  cursor: pointer;
`

const StCategory1Div = styled.div`
  display: flex;
  align-items: center;
`

const StImg = styled.img`
  width: 200px;
  height: 100px;
`
const StContentsDiv = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
