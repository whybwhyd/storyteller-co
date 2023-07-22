import axios from 'axios'
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '../firebase'

const getStorys = async () => {
  // 변경사항 storys infos
  const q = query(collection(db, 'infos'))
  const querySnapshot = await getDocs(q)

  const initialStorys = []

  querySnapshot.forEach((doc) => {
    const data = {
      id: doc.id,
      ...doc.data(),
    }
    initialStorys.push(data)
  })
  return initialStorys
}

const getPosts = async () => {
  try {
    const postsCollection = collection(db, 'infos') // 'collection' 함수는 'collection(db, '컬렉션_이름') 형태로 사용
    const postsSnapshot = await getDocs(postsCollection)
    const posts = postsSnapshot.docs.map((doc) => doc.data())
    return posts
  } catch (error) {
    console.error('게시물을 불러오는 중 오류 발생:', error)
    throw error
  }
}

const YOUTUBE_API_KEY = 'AIzaSyAk7SRjN8fig94Eq5VKi5AgpXbVqOD8ZnM'

const searchVideos = async (searchInput) => {
  try {
    // 'https://www.googleapis.com/youtube/v3/playlistItems.list' ← 링크 변경 시도 필요
    // https://developers.google.com/youtube/v3/docs/playlistItems?hl=ko ← 속성 확인
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        q: searchInput,
        key: YOUTUBE_API_KEY,
        part: 'snippet',
        maxResults: 4, // 변경 가능한 결과 수
        type: 'video',
      },
    })

    return response.data.items
  } catch (error) {
    console.error('Error fetching YouTube data:', error)
    return []
  }
}

export { getPosts, getStorys, searchVideos }
