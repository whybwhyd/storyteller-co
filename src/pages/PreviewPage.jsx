import React, { useState } from 'react'
import { searchVideos } from '../axios/api'

const PreviewPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [videos, setVideos] = useState([])

  const handleSearch = async () => {
    const searchResults = await searchVideos(searchTerm)
    setVideos(searchResults)
  }

  return (
    <div>
      <input type='text' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {videos.map((video) => (
          <li key={video.id.videoId}>
            <p>{video.snippet.title}</p>
            <img src={video.snippet.thumbnails.default.url} alt='thumbnail' />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PreviewPage
