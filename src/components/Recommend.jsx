import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { searchVideos } from '../axios/api'
import CardsRecommend from './CardsRecommend'

const Recommand = ({ data }) => {
  const navigate = useNavigate()

  const [videos, setVideos] = useState([])

  // const navigateToDetailHandler = (id) => {
  //   navigate(`/detail/:${id}`)
  // }

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
