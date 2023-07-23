import styled from 'styled-components'

export const Input = styled.input`
  border: solid 1px #e8e8e8;
  border-radius: 8px;
  width: 80%;
  height: 46.8px;
  padding: 0px;
  margin-bottom: 10px;
  border: 1px solid #e8e8e8;
  outline: none;
  font-family: 'inter', sans-serif;
`

export const LeftBox = styled.label`
  display: flex;
  justify-content: left;
  width: 80%;
  font-size: 15px;
  font-family: 'inter', sans-serif;
`

export const SignBtn = styled.button`
  width: 80%;
  height: 63px;
  border: solid 0px;
  border-radius: 20px;
  font-size: 20px;
  text-align: center;
  color: #000000;
  background-color: #ffffff;
  margin-bottom: 10px;
`

export const Box = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

export const ModalContents = styled.div`
  background-color: #e9e6d8;
  width: 518px;
  height: 346px;
  padding: 20px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ModalBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`

export const DeleteBtn = styled.button`
  background-color: #ffffff;
  color: #2d8675;
  border-radius: 20px;
  border: 1px solid #2d8675;
  width: 70px;
  height: 33px;
  font-size: 12px;
  margin-right: 15px;
  position: ${(props) => props.custompostion};
  right: ${(props) => props.customright};
  &:hover {
    height: 30px;
    color: #ffffff;
    background-color: #2d8675;
    border: 1px solid #2d8675;
    box-shadow: 2px 2px 2px 2px #e8e8f8;
    cursor: pointer;
    font-weight: bolder;
  }
`

export const LoginMessage = styled.span`
  font-family: 'inter', sans-serif;
  color: #af1f2b;
`
