import styled from 'styled-components'

export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 50px;
`

export const SearchImgDiv = styled.div`
  position: relative;

  padding: 16px;
`

export const MainImg = styled.img`
  position: relative;

  height: 500px;
  width: 1000px;
  object-fit: cover;
  object-position: center center;

  margin-top: 30px;
  cursor: pointer;
`

export const FaSearchDiv = styled.div`
  position: absolute;
  top: -5px;
  right: 16px;
  font-size: 30px;
  cursor: pointer;
`

export const CategoryInputDiv = styled.div`
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

export const Category1Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
`

export const Img = styled.img`
  width: 30vh;
  height: 20vh;
  object-fit: cover;
  object-position: center center;
`
export const ContentsDiv = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
export const TitleDiv = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
