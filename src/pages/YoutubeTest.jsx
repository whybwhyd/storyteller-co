// import React, { useState, useEffect } from 'react'
// import axios from 'axios'

// function YoutubeTest() {
//   const [playlist, setPlaylist] = useState([])

//   useEffect(() => {
//     //axios
//       .get(
//         'https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UCkbJc8jMcTXwhtmN5VMwfXg&maxResults=50&key=AIzaSyAJlClfKJmtPtPRx8Mqp7BhE8A3g8zppK8'
//       )
//       .then((res) => {
//         console.log(res)
//         setPlaylist(res.data.items)
//       })
//       .catch(() => {})
//   }, [])
//   console.log(playlist)
//   return <div>YoutubeTest</div>
// }

// export default YoutubeTest

import React from 'react'
import YouTube from 'react-youtube';

function YoutubeTest() {
  const videoId = '3EQf2Y5KCsE'
  return <YouTube videoId={videoId} />;
}

export default YoutubeTest

const youtubeLink = 'https://www.youtube.com/watch?v=3EQf2Y5KCsE';

// // 정규 표현식을 사용하여 고유 ID 추출
// const regex = /v=([a-zA-Z0-9_-]{11})/;
// const match = youtubeLink.match(regex);

// if (match) {
//   const videoId = match[1];
//   console.log(videoId); // 출력: 3EQf2Y5KCsE
// } else {
//   console.log('고유 ID를 찾을 수 없습니다.');
// }
