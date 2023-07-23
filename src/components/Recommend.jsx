import React, { useEffect, useState } from 'react'
import { searchVideos } from '../axios/api'
import CardsRecommend from './CardsRecommend'

const Recommand = ({ data }) => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const searchResults = await searchVideos(data)
      setVideos(searchResults)
    }
    fetchData()
  }, [])

  console.log('youtube data => ', data)

  return (
    <div>
      <CardsRecommend data={videos} />
    </div>
  )
}

export default Recommand
