import React, { useEffect } from 'react'
import { styled } from 'styled-components'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import DramaMain1 from '../assets/DramaMain1.jpg'
import firebaseApp, { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'
import { getStorys } from '../axios/api'
import { useQuery } from 'react-query'

const MainPage = () => {
  // firebase관련데이터들어오는지확인
  // useEffect(() => {
  //   console.log('firebaseApp', firebaseApp)
  // }, [])

  // firebase에있는 데이터 읽어오는지
  const { data } = useQuery('storys', getStorys)

  console.log(data)

  const navigate = useNavigate()

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
            <StCategoryInput>
              <input type='file' accept='image/*'></input>
              <div>title</div>
              <div>contents</div>
            </StCategoryInput>
            <StCategoryInput>
              <input type='file' accept='image/*'></input>
              <div>title</div>
              <div>contents</div>
            </StCategoryInput>
            <StCategoryInput>
              <input type='file' accept='image/*'></input>
              <div>title</div>
              <div>contents</div>
            </StCategoryInput>
          </StCategory1Div>
        </div>
        <h2>category2</h2>
        <StCategory1Div>
          <StCategoryInput>
            <input type='file' accept='image/*'></input>
            <div>title</div>
            <div>contents</div>
          </StCategoryInput>
          <StCategoryInput>
            <input type='file' accept='image/*'></input>
            <div>title</div>
            <div>contents</div>
          </StCategoryInput>
          <StCategoryInput>
            <input type='file' accept='image/*'></input>
            <div>title</div>
            <div>contents</div>
          </StCategoryInput>
        </StCategory1Div>
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

const StCategoryInput = styled.div`
  height: 150px;
  width: 200px;

  margin: 20px;

  border: 1px solid black;
`

const StCategory1Div = styled.div`
  display: flex;
  align-items: center;
`
