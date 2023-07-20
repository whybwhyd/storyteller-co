import React, { useState, useEffect } from 'react'
import * as St from '../style/StDetailStyled'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '../firebase'
import Drama1 from '../assets/Drama1.jpg'
import { DetailButton, UpButton } from '../components/Button'

const DetailsPage = () => {
  const [liked, setLiked] = useState(false)
  const [infos, setInfos] = useState([])
  const { title } = useParams()

  const handleLike = () => {
    setLiked(!liked)
  }

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, 'infos'))
      const querySnapshot = await getDocs(q)
      const initialInfos = []
      querySnapshot.forEach((doc) => {
        initialInfos.push({ id: doc.id, ...doc.data() })
      })
      setInfos(initialInfos)
    }

    fetchData()
  }, [])

  if (!infos) {
    return <div>Loading...</div>
  }

  return (
    <div id='1'>
      <St.Grid>
        {infos.map((info) => {
          return (
            <div>
              <St.DramaImg src={Drama1} alt='알고있지만 드라마 사진' />
              <h4> {info.createdBy}</h4>
              <St.Context>
                <h2>{info.title}</h2>
                <div>{info.body}</div>
              </St.Context>
              <St.Context>
                <h2>제작정보</h2>
                <div>{info.director}</div>
              </St.Context>
              <St.YoutubeContext>youtube-privew</St.YoutubeContext>
              <DetailButton handleLike={handleLike} liked={liked} />
            </div>
          )
        })}
      </St.Grid>
      <UpButton />
    </div>
  )
}

export default DetailsPage
