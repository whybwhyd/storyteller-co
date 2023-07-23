import React from 'react'
import { deleteDoc, doc } from 'firebase/firestore'
import { styled } from 'styled-components'
import { db } from '../firebase'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { getPosts } from '../axios/api'
import { Link } from 'react-router-dom'

function Listadmin() {
  const queryClient = useQueryClient()
  const { isLoading, data } = useQuery('infos', getPosts)
  const deleteInfoMutation = useMutation(
    async (id) => {
      const infoRef = doc(db, 'infos', id)
      await deleteDoc(infoRef)
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries('infos')
      },
    }
  )
  const deleteInfo = async (id) => {
    deleteInfoMutation.mutate(id)
  }

  if (isLoading) {
    return <div>로딩중입니다..</div>
  }

  return (
    <div>
      {data.map((Post) => {
        return (
          <ul key={Post.title}>
            <ol>
            <StFlexLists>
              <Link to={`/adminDetail/:${Post.title}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <StFlex>
                <StListTitleBox>
                <StListTitle>
                  {Post.title} 
                 </StListTitle>
                  </StListTitleBox>
                <StListBodyBox>
                  <StListBody>{Post.body}</StListBody>
                </StListBodyBox>
                </StFlex>
              </Link>
              <StDbutton onClick={() => deleteInfo(Post.id)}>delete</StDbutton>
              <Link
                to={`/edit/${Post.id}`}
                state={{
                  img: Post.img,
                  title: Post.title,
                  createdBy: Post.createdBy,
                  body: Post.body,
                  director: Post.director,
                  category: Post.category,
                  youtubeUrl: Post.youtubeUrl,
                }}
              >
                <StEbutton>edit</StEbutton>
              </Link>
              </StFlexLists>
            </ol>
          </ul>
        )
      })}
    </div>
  )
}

export default Listadmin

export const StFlex = styled.div`
display:flex;
`
export const StFlexLists = styled.div`
display:flex;
`
export const StListTitle = styled.span`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const StListTitleBox = styled.div`
  border-bottom: 2px solid white;
  width: 250px;
  padding: 4px;
  margin-right:30px;
`
export const StListBodyBox = styled.div`
  border-bottom: 2px solid white;
  width: 600px;
  padding: 4px;
`
export const StListBody = styled.div`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const StDbutton = styled.button`
  transform: translate(20px, 5px);
  width:80px;
  height:30px;
  font-size:20px;
`
export const StEbutton = styled.button`
  transform: translate(30px, 5px);
  width:80px;
  height:30px;
  font-size:20px;
`
