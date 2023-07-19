import React, { useState, useRef } from 'react'
import * as St from '../style/StWriteStyled'
import DefaultImg from '../assets/DefaultImg.png'
import { doc, setDoc } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes, uploadString } from 'firebase/storage'
import { storage, db } from '../firebase'
import { WriteButton, UpButton } from '../components/Button'
import { useNavigate } from 'react-router-dom'

const Write = () => {
  const [imgFile, setImgFile] = useState(null)
  const [infos, setInfos] = useState([])
  const [item, setItem] = useState({
    title: '',
    createdBy: '',
    body: '',
    director: '',
  })
  const imgRef = useRef()
  const onChange = (event) => {
    const { value, name } = event.target
    setItem({
      ...item,
      [name]: value,
    })
  }
  const { title, createdBy, body, director } = item

  const navigate = useNavigate()

  // 이미지 업로드 input의 onChange
  const saveImgFile = async () => {
    const file = imgRef.current.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setImgFile(reader.result)
    }
  }
  const deleteImg = () => {
    setImgFile('')
  }

  const handleSave = async (event) => {
    event.preventDefault()
    if (!imgFile||!title || !createdBy || !body || !director) {
      alert('빈칸을 채워주세요!')
      return
    }
    const newInfo = {
      title,
      createdBy,
      body,
      director,
    }
    setInfos((prev) => {
      return [...prev, newInfo]
    })

    const docRef = doc(db, 'infos', title)
    await setDoc(docRef, newInfo)
    const imageRef = ref(storage, `${title}/${imgRef.current.files[0].name}`)
    await uploadBytes(imageRef, imgRef.current.files[0])

    // 파일 URL 가져오기
    const downloadURL = await getDownloadURL(imageRef)
    console.log(imageRef)
    alert('저장되었습니다!')
    setImgFile('')
    setItem({
      title: '',
      createdBy: '',
      body: '',
      director: '',
    })
  }

  return (
    <div id='1'>
      <St.Grid>
        <St.ImgUpload>
          <div>
            <St.UploadImgFile src={imgFile ? imgFile : DefaultImg} alt='이미지 업로드' />
            <br />
            <St.UdLabels>
              <St.UploadLabel>
                <label htmlFor='inputprofileImg'>사진 업로드</label>
                <form>
                  <St.InputprofileImg
                    id='inputprofileImg'
                    type='file'
                    accept='image/png, image/jpeg, image/jpg'
                    onChange={saveImgFile}
                    ref={imgRef}
                  />
                </form>
              </St.UploadLabel>
              <St.DeleteLabel>
                <label htmlFor='deleteprofileImg'>삭제하기</label>
                <St.DeleteprofileImg id='deleteprofileImg' type='button' onClick={deleteImg} />
              </St.DeleteLabel>
            </St.UdLabels>
            <br />
            <br />
          </div>
        </St.ImgUpload>
        <St.Body>
          <div>Title</div>
          <St.InputTitle type='text' name='title' placeholder='제목' value={title} onChange={onChange} />
          <div>editor</div>
          <St.InputCreatedBy type='text' placeholder='작성자' name='createdBy' value={createdBy} onChange={onChange} />
          <div>body</div>
          <St.BodyTextarea
            name='body'
            cols='30'
            rows='10'
            placeholder='작품 소개를 입력해주세요'
            value={body}
            onChange={onChange}
          />
        </St.Body>

        <St.Director>
          <div>author-context</div>
          <St.DirectorTextarea
            name='director'
            cols='30'
            rows='10'
            placeholder='제작 정보를 입력해주세요'
            value={director}
            onChange={onChange}
          />
        </St.Director>
        <St.YoutubeContext>youtube-privew</St.YoutubeContext>
        {/* api 불러온 후 수정 */}
        <WriteButton handleSave={handleSave} />
      </St.Grid>
      <UpButton />
    </div>
  )
}

export default Write
