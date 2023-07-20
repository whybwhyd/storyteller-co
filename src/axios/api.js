import axios from 'axios'
import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'

// 1. DATABASE_URL 연결해서 불러오기
// const FIREBASE_DATABASE_URL = 'http://storyteller-cac78.firebasedatabase.app'

// const getPosts = async () => {
//   try {
//     const response = await axios.get(`${FIREBASE_DATABASE_URL}/posts`)
//     return response.data
//   } catch (error) {
//     console.error('포스트를 가져오는 데 오류가 발생했습니다:', error)
//     throw error
//   }
// }

// 2. db 바로 불러와보기
// const getPosts = async () => {
//   try {
//     const response = await axios.get(db)
//     return response.data
//   } catch (error) {
//     console.error('포스트를 가져오는 데 오류가 발생했습니다:', error)
//     throw error
//   }
// }

// 3. axios 대신 그냥 fetch 로 불러오기 - 1차 실패
// const getPosts = async () => {
//   try {
//     const postsSnapshot = await db.collection('posts').get()
//     const posts = postsSnapshot.docs.map((doc) => doc.data())
//     return posts
//   } catch (error) {
//     console.error('게시물을 불러오는 중 오류 발생:', error)
//     throw error
//   }
// }

// 3. fetch 로 불러오기 - 2차 성공
const getPosts = async () => {
  try {
    const postsCollection = collection(db, 'posts') // 'collection' 함수는 'collection(db, '컬렉션_이름') 형태로 사용
    const postsSnapshot = await getDocs(postsCollection)
    const posts = postsSnapshot.docs.map((doc) => doc.data())
    return posts
  } catch (error) {
    console.error('게시물을 불러오는 중 오류 발생:', error)
    throw error
  }
}

export { getPosts }
