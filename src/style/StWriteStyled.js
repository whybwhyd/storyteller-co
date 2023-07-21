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
export const ImgUpload = styled.div`
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
  color: #000;
`
export const UploadImgFile = styled.img`
  transform: translate(0px, 10px);
  width: 680px;
  height: 381px;
`
export const UdLabels = styled.div`
  display: flex;
  justify-content: center;
`
export const UploadLabel = styled.div`
  transform: translate(-20px, 25px);
  font-weight: bolder;
`
export const DeleteLabel = styled.div`
  transform: translate(10px, 25px);
  font-weight: bolder;
`
export const InputprofileImg = styled.input`
  display: none;
`
export const DeleteprofileImg = styled.input`
  display: none;
`
export const DramaImg = styled.img`
  /* transform: translate(0px, 0px); */
  margin: 50px;
`
export const Body = styled.div`
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
  color: #000;
`
export const Director = styled.div`
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
  color: #000;
`
export const InputYoutubeUrl = styled.input`
  transform: translate(50px, 0px);
  margin:30px auto 30px auto;
  width: 600px;
  height: 34px;
  border: none;
  &::placeholder {
    font-weight: bold;
    font-size: 15px;
  }
`
export const YtBtn = styled.button`
  z-index:999;
  transform: translate(-50px, 3px);
  background-color: #2d8675;
  color: #e9e6d8;
  width: 100px;
  height: 36px;
  border: 4px solid #2d8675;
  font-size: 18px;
  font-weight: bolder;
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
  color: #000;
`
export const Ytimg = styled.img`
  width: 640px;
  height:360px;
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
export const InputTitle = styled.input`
  transform: translate(80px, 0px);
  width: 600px;
  height: 30px;
  border: none;
  &::placeholder {
    font-weight: bold;
    font-size: 15px;
  }
`
export const InputCreatedBy = styled.input`
  transform: translate(80px, 0px);
  width: 600px;
  height: 30px;
  border: none;
  &::placeholder {
    font-weight: bold;
    font-size: 15px;
  }
`
export const BodyTextarea = styled.textarea`
  transform: translate(80px, 0px);
  width: 600px;
  height: 150px;
  border: none;
  &::placeholder {
    font-size: 15px;
  }
`
export const DirectorTextarea = styled.textarea`
  transform: translate(80px, 0px);
  width: 600px;
  height: 280px;
  border: none;
  &::placeholder {
    font-size: 15px;
  }
`
