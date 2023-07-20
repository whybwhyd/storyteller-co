import axios from 'axios'
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '../firebase'

const getStorys = async () => {
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

export { getStorys, getPosts }
