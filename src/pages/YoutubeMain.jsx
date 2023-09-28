import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { styled } from 'styled-components'

function YoutubeMain() {

  const [videoList, setVideoList] = useState([])
  const YOUTUBE_API_KEY_MAIN = process.env.REACT_APP_YOUTUBE_API_KEY_MAIN

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLYZAHhM04Ewonz9bUbfaFTR_u7Bg5_BP7&maxResults=4&key=${YOUTUBE_API_KEY_MAIN}`
      )
      .then((res) => {
        setVideoList(res.data.items)
      })
      .catch(() => {})
  }, [YOUTUBE_API_KEY_MAIN])

  return (
    <div>
      <div>
        <StYoutubeContainer>
          {videoList.map((x) => {
            return (
              <StYoutubePlayListDiv key={x.id}>
                <a href={`https://www.youtube.com/watch?v=${x.snippet.resourceId.videoId}`}>
                  <StImgDiv src={x.snippet.thumbnails.medium['url']} alt='' />
                </a>
                <StVideoTitleDiv>{x.snippet.title}</StVideoTitleDiv>
              </StYoutubePlayListDiv>
            )
          })}
        </StYoutubeContainer>
      </div>
    </div>
  )
}

export default YoutubeMain

const StYoutubeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
`

const StYoutubePlayListDiv = styled.div`
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

const StImgDiv = styled.img`
  width: 30vh;
  height: 20vh;
  object-fit: cover;
  object-position: center center;
`

const StVideoTitleDiv = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
