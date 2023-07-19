import styled from 'styled-components'

export const HeaderImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: scale-down;
`
export const Grid = styled.div`
  display: grid;
  justify-content: center;
`
export const DramaImg = styled.img`
  /* transform: translate(0px, 0px); */
  margin: 50px;
`
export const Context = styled.div`
  background-color: #e9e6d8;
  border-radius: 30px;
  border: none;
  /* 2px solid black; */
  width: 780px;
  height: 400px;
  margin-bottom: 50px;
  display: grid;
  align-content: space-evenly;
  text-align: center;
`
export const YoutubeContext = styled.div`
  border: 2px solid black;
  border-radius: 30px;
  width: 780px;
  height: 350px;
  border: none;
  background-color: #d9d9d9;
  margin-bottom: 50px;
  display: grid;
  align-content: space-evenly;
  text-align: center;
`

// 버튼 스타일 컴포넌트에 따로 넣기!!!!
export const DetailButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 200px; /* 나중에 삭제할 것 */
`
export const WriteButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 200px; /* 나중에 삭제할 것 */
`
export const LikeButton = styled.button`
  background-color: #2d8675;
  color: ${({ liked }) => (liked ? '#af1f2b' : '#e9e6d8')};
  width: 120px;
  height: 40px;
  border: none;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bolder;
`
// export const EditButton = styled.button`
//   background-color: #2d8675;
//   color: #e9e6d8;
//   width: 120px;
//   height: 40px;
//   border: none;
//   border-radius: 8px;
//   font-size: 20px;
//   font-weight: bolder;
// `
export const CancelButton = styled.button`
  transform: translate(-10px, 0px);
  background-color: #2d8675;
  color: #e9e6d8;
  width: 120px;
  height: 40px;
  border: none;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bolder;
`
export const SaveButton = styled.button`
  transform: translate(10px, 0px);
  background-color: #2d8675;
  color: #e9e6d8;
  width: 120px;
  height: 40px;
  border: none;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bolder;
`
export const Up = styled.p`
  transform: translateY(-90%);
`
export const UpButton = styled.button`
  background-color: #2d8675;
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  font-size: 35px;
  font-weight: bolder;
  border-radius: 40px;
  position: fixed;
  bottom: 60px;
  right: 120px;
`
