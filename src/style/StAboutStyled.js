import styled from 'styled-components'

export const AboutContent = styled.div`
  margin-bottom: 50px;
  display: grid;
  text-align: center;
`
export const LoginBtn = styled.button`
  background-color: #2d8675;
  color: #ffffff;
  border: solid 1px #2d8675;
  border-radius: 10px;
  margin-bottom: 20px;
  width: 120px;
  height: 40px;
  font-size: 20px;

  &:hover {
    height: 20px;
    color: #2d8675;
    background-color: #ffffff;
    border: 1px solid #2d8675;
    cursor: pointer;
    font-weight: bolder;
    width: 120px;
    height: 40px;
    font-size: 20px;
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
  margin: auto auto 50px auto;
`
