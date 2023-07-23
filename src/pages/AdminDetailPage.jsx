import React, { useState, useEffect } from 'react'
import * as St from '../style/StDetailStyled'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '../firebase'
import { AdminDetailButton, UpButton } from '../components/Button'
import DefaultImg from '../assets/DefaultImg.png'
import Youtube from 'react-youtube'

const AdminDetailPage = () => {
  const [infos, setInfos] = useState([])
  const { id } = useParams()

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
  const filteredInfo = infos.find((info) => ':' + info.id === id)
  return (
    <div id='1'>
      <St.Grid>
        {filteredInfo && (
          <div>
            <St.DramaImg src={filteredInfo.img ? filteredInfo.img : DefaultImg} alt='이미지 업로드' />
            <h4> {filteredInfo.createdBy}</h4>
            <St.Context>
              <h2>{filteredInfo.title}</h2>
              <div>{filteredInfo.body}</div>
            </St.Context>
            <St.Context>
              <h2>제작정보</h2>
              <div>{filteredInfo.director}</div>
            </St.Context>
            <St.YoutubeContext>
              <h3>youtube-privew</h3>
              <div>
                <Youtube videoId={filteredInfo.youtubeUrl.split('v=')[1].split('&')[0]} />
              </div>
            </St.YoutubeContext>
            <AdminDetailButton
              id={filteredInfo.title}
              img={filteredInfo.img}
              category={filteredInfo.category}
              title={filteredInfo.title}
              createdBy={filteredInfo.createdBy}
              body={filteredInfo.body}
              director={filteredInfo.director}
              youtubeUrl={filteredInfo.youtubeUrl}
            />
          </div>
        )}
      </St.Grid>
      <UpButton />
    </div>
  )
}

export default AdminDetailPage
