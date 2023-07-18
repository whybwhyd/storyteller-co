import React from 'react'
import { styled } from 'styled-components'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const MainPage = () => {
  const navigate = useNavigate()

  return (
    <div>
      <StContainerDiv>
        <div>
          <StMainImg
            src=''
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
        </div>
        <h2>category1</h2>
        <div>
          <StCategory1Div>
            <StCategoryInput>
              <input type='file'></input>
              <div>title</div>
              <div>contents</div>
            </StCategoryInput>
            <StCategoryInput>
              <input type='file'></input>
              <div>title</div>
              <div>contents</div>
            </StCategoryInput>
            <StCategoryInput>
              <input type='file'></input>
              <div>title</div>
              <div>contents</div>
            </StCategoryInput>
          </StCategory1Div>
        </div>
        <h2>category2</h2>
        <StCategory1Div>
          <StCategoryInput>
            <input type='file'></input>
            <div>title</div>
            <div>contents</div>
          </StCategoryInput>
          <StCategoryInput>
            <input type='file'></input>
            <div>title</div>
            <div>contents</div>
          </StCategoryInput>
          <StCategoryInput>
            <input type='file'></input>
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

const StMainImg = styled.img`
  position: relative;
  height: 450px;
  width: 1000px;
  border: 1px solid black;
  cursor: pointer;
`

const StFaSearchDiv = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`

const StCategoryInput = styled.div`
  border: 1px solid black;
  height: 150px;
  width: 200px;
  margin: 20px;
`

const StCategory1Div = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
`
