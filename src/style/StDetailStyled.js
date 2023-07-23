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
  margin: 50px;
  width: 680px;
  height: 381px;
`
export const DramaImgBox = styled.div`
  border: 2px solid black;
  border-radius: 30px;
  width: 780px;
  height: 500px;
  border: none;
  background-color: #d9d9d9;
  display: grid;
  align-content: space-evenly;
  text-align: center;
  margin: 50px auto 50px auto;
`
export const Context = styled.div`
  background-color: #e9e6d8;
  border-radius: 30px;
  border: none;
  width: 780px;
  height: 400px;
  margin-bottom: 50px;
  display: grid;
  align-content: space-evenly;
  text-align: center;
  color: black;
`
export const YoutubeContext = styled.div`
  border: 2px solid black;
  border-radius: 30px;
  width: 780px;
  height: 550px;
  border: none;
  background-color: #d9d9d9;
  margin-bottom: 50px;
  display: grid;
  align-content: space-evenly;
  text-align: center;
  color: black;
`

export const DetailButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 200px;
`
export const WriteButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 200px;
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
export const EditButton = styled.button`
  background-color: #2d8675;
  color: #e9e6d8;
  width: 120px;
  height: 40px;
  border: none;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bolder;
`
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
export const Ytimg = styled.img`
  width: 640px;
  height: 360px;
`
export const YtBtn = styled.button`
  transform: translate(-34px, 3px);
  background-color: #2d8675;
  color: #e9e6d8;
  width: 100px;
  height: 36px;
  border: 4px solid #2d8675;
  font-size: 18px;
  font-weight: bolder;
`
