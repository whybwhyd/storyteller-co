import styled from 'styled-components'

export const AboutContent = styled.div`
  background-color: #e9e6d8;
  border-radius: 30px;
  border: none;
  /* 2px solid black; */
  width: 780px;
  height: 400px;
  margin-bottom: 50px;
  display: grid;
  align-content: space-evenly;
  text-align: center;
  color:black;

`
export const LoginBtn = styled.button`
 background-color: #2D8675;
 color: #FFFFFF;
 border: solid 1px #2D8675;
 border-radius: 10px;
 margin-bottom: 20px;
 &:hover {
    height: 20px;
    color: #2D8675;
    background-color: #ffffff;
    border: 1px solid #2D8675;
    cursor: pointer;
    font-weight: bolder;
 }
`
export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 2;
  background-color: #153e4b;
`

export const Logo = styled.img`
  width: 600px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
`