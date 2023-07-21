import React from 'react'
import { useQuery } from 'react-query'
import { getPosts } from '../axios/api'


function Listadmin() {

  const { isLoading, data } = useQuery('infos', getPosts)
  console.log(data)
  
  if (isLoading) {
    return <div>로딩중입니다..</div>
  }

  return (
    <>
      {data.map((Post) => {
                return (
                  <ul key={Post.title}>
                    <ol> 제목 : {Post.title} 줄거리 : {Post.body}</ol>
                  </ul>
                )
              })}
    </>

  )
}

export default Listadmin