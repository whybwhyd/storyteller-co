import styled from 'styled-components'

export const AboutContent = styled.div`
  margin-bottom: 50px;
  display: grid;
  text-align: center;
  font-family: 'Hahmlet', serif;
`
export const LoginBtn = styled.button`
  background-color: #e9e6d8;
  color: #2d8675;
  border: solid 1px #2d8675;
  border-radius: 5px;
  width: 100px;
  height: 40px;
  font-size: 18px;
  font-family: 'Hahmlet', serif;
  position: absolute;
  right: 10px;

  &:hover {
    border: solde 1px #e9e6d8;
    cursor: pointer;
    font-size: 18px;
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
  font-family: 'Hahmlet', serif;
`

export const Logo = styled.img`
  width: 600px;
  height: auto;
  margin: auto auto 50px auto;
`
