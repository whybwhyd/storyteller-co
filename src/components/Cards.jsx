import React from 'react'
import { styled } from 'styled-components'

function Cards() {
  return (
    <>
      <StCardsList>
        <StCards>
          <div>img</div>
          <div>title</div>
          <div>text</div>
        </StCards>
        <StCards>
          <div>img</div>
          <div>title</div>
          <div>text</div>
        </StCards>
        <StCards>
          <div>img</div>
          <div>title</div>
          <div>text</div>
        </StCards>
        <StCards>
          <div>img</div>
          <div>title</div>
          <div>text</div>
        </StCards>
      </StCardsList>
    </>
  )
}

export default Cards

const StCards = styled.div`
  color: #0d3441;
  border: 1px solid black;
  min-width: 20vh;
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px;
  padding: 10px;
`
const StCardsList = styled.div`
  color: #0d3441;
  min-width: 20vh;
  min-height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`
