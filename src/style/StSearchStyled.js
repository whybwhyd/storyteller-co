import styled from 'styled-components'

export const CategoryBtn = styled.button`
  padding: 16px;
  margin: 9px;
  background-color: #af1f2b;
  color: #e9e6d8;
  border: 0;
  border-radius: 3px;
  cursor: pointer;
  font-family: 'Hahmlet', serif;
`

export const CategoryButtons = styled.div`
  margin-top: 20px;
`
export const SearchBtn = styled.button`
  width: 62px;
  height: 36px;
  margin: 4px;
  background-color: #af1f2b;
  color: #e9e6d8;
  border: 0;
  border-radius: 3px;
  cursor: pointer;
  font-family: 'Hahmlet', serif;
`
export const Grid = styled.div`
  display: grid;
  justify-content: center;
`
export const Input = styled.input`
  width: 360px;
  height: 30px;
  border-radius: 3px;
  margin: 4px;
  color: #e9e6d8;
  background: #153e4b;
  border: 1px solid #e9e6d8;
  padding-left: 7px;
  font-family: 'Hahmlet', serif;

  &::placeholder {
    color: #e9e6d8;
  }
  &:focus {
    outline: none;
    border-color: #af1f2b;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`
export const SearchInput = styled.div`
  display: flex;
  font-family: 'Hahmlet', serif;
`
