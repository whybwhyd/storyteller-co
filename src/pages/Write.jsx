import React, { useState, useRef } from 'react'
import * as St from '../style/StWriteStyled'
import DefaultImg from '../assets/DefaultImg.png'
import { v4 as uuidv4 } from 'uuid'
import { doc, setDoc} from 'firebase/firestore'
import { db } from '../firebase'
import { WriteButton, UpButton } from '../components/Button'
import { useNavigate } from 'react-router-dom'

const Write = () => {
  const [imgFile, setImgFile] = useState(null)
  const [infos, setInfos] = useState([])
  const [item, setItem] = useState({
    title: '',
    createdBy: '',
    introduction: '',
    authorContext: '',
  })
  const imgRef = useRef()
  const onChange = (event) => {
    const { value, name } = event.target
    setItem({
      ...item,
      [name]: value,
    })
  }
  const { title, createdBy, introduction, authorContext } = item

  const navigate = useNavigate()
  const newId = uuidv4()

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
    const newInfo = {
      title,
      createdBy,
      introduction,
      authorContext,
      imgFile,
    }
    setInfos((prev) => {
      return [...prev, newInfo]
    })

    const DocRef = doc(db, 'infos', title)
    await setDoc(DocRef, newInfo)
    alert('저장되었습니다!')
    setImgFile('')
    setItem({
      title: '',
      createdBy: '',
      introduction: '',
      authorContext: '',
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
        <St.IntroductonContext>
          <div>Title</div>
          <St.InputTitle type='text' name='title' placeholder='제목' value={title} onChange={onChange} />
          <div>editor</div>
          <St.InputCreatedBy type='text' placeholder='작성자' name='createdBy' value={createdBy} onChange={onChange} />
          <div>introduction</div>
          <St.Introduction
            name='introduction'
            cols='30'
            rows='10'
            placeholder='작품 소개를 입력해주세요'
            value={introduction}
            onChange={onChange}
          />
        </St.IntroductonContext>

        <St.AuthorContext>
          <div>author-context</div>
          <St.Textarea
            name='authorContext'
            cols='30'
            rows='10'
            placeholder='제작 정보를 입력해주세요'
            value={authorContext}
            onChange={onChange}
          />
        </St.AuthorContext>
        <St.YoutubeContext>youtube-privew</St.YoutubeContext>
        {/* api 불러온 후 수정 */}
        <WriteButton handleSave={handleSave} />
      </St.Grid>
      <UpButton />
    </div>
  )
}

export default Write
