import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { styled } from 'styled-components'

function YoutubeMain() {
  const [playList, setPlayList] = useState([])
  // 영상관련
  const [videoList, setVideoList] = useState([])

  useEffect(() => {
    axios
      .get(
        'https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UC1QidArPD4PLF1HBP7HbcOg&maxResults=5&key=AIzaSyAvy048qvDbI3b_F_JE1-QPMdMyDrVD9Io'
      )
      .then((res) => {
        // console.log('res=>', res)
        setPlayList(res.data.items)
      })
      .catch(() => {})
  }, [])
  // console.log('playList=>', playList)

  // 유투브 영상 관련
  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLYZAHhM04Ewonz9bUbfaFTR_u7Bg5_BP7&maxResults=5&key=AIzaSyAvy048qvDbI3b_F_JE1-QPMdMyDrVD9Io`
      )
      .then((res) => {
        console.log('res=>', res)
        setVideoList(res.data.items)
      })
      .catch(() => {})
  }, [])
  // console.log('videoList=>', videoList)
  let videoID = []

  let [videoInfo, setVideoInfo] = useState([])

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=vwxKPgn3Mbo&id=VRI3GVZjFrM&id=CCOANmV-Qpg&id=aPAu-ePYfLg&id=stzQyxvSSt0&id=e0_a93-pabk&id=bNoJiT8cQ3Y&id=AapSj0ncwqU&id=v7WYUm2OyKI&id=b_u7pEZ5dUc&maxResults=5&key=AIzaSyAvy048qvDbI3b_F_JE1-QPMdMyDrVD9Io`
      )
      .then((res) => {
        console.log(res)
        setVideoInfo(res.data.items)
      })
      .catch(() => {})
  }, [videoList])
  console.log('videoInfo=>', videoInfo)

  return (
    <div>
      {/* <div>
        <StYoutubeContainer>
          {playList &&
            playList.map((i, idx) => {
              return (
                <StYoutubePlayListDiv key={idx}>
                  <StImgDiv src={i.snippet.thumbnails.high['url']} alt='' />
                  <Link to={'/playlist/' + i.id}>
                    <div>{i.snippet.localized['title']}</div>
                  </Link>
                  <p>{i.snippet.localized['description']}</p>
                </StYoutubePlayListDiv>
              )
            })}
        </StYoutubeContainer>
      </div> */}
      <div>
        <StYoutubeContainer>
          {videoList.map((x) => {
            // console.log('x.resourceId', x.snippet.resourceId.videoId)
            return (
              <StYoutubePlayListDiv key={x.id}>
                <a href={`https://www.youtube.com/watch?v=${x.snippet.resourceId.videoId}`}>
                  <StImgDiv src={x.snippet.thumbnails.medium['url']} alt='' />
                </a>

                <StVideoTitleDiv>{x.snippet.title}</StVideoTitleDiv>
                <span>{x.snippet['publishedAt']} </span>
                {/* <span>조회수 : {Number(x.statistics.viewCount).toLocaleString('en-US')} 회</span> */}
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
  align-items: center;
`

const StYoutubePlayListDiv = styled.div`
  height: 150px;
  width: 200px;

  margin: 20px;

  object-fit: cover;

  border-radius: 5px 5px 5px 5px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15), 0 5px 5px rgba(0, 0, 0, 0.2);
`

const StImgDiv = styled.img`
  width: 200px;
  height: 100px;
`

const StVideoTitleDiv = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
