import React, { useState, useRef } from 'react'
import * as St from '../style/StWriteStyled'
import DefaultImg from '../assets/DefaultImg.png'
import Select from '../components/Select'
import { doc, setDoc } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { storage, db } from '../firebase'
import { WriteButton, YoutubeButton, UpButton } from '../components/Button'
import { useNavigate } from 'react-router-dom'

const WritePage = () => {
  const [item, setItem] = useState({
    title: '',
    createdBy: '',
    body: '',
    director: '',
    youtubeUrl: '',
  })
  const { title, createdBy, body, director, youtubeUrl, category } = item

  const [imgFile, setImgFile] = useState(null)
  const [showYoutubePreview, setShowYoutubePreview] = useState(false)
  const imgRef = useRef()
  const YtRef = useRef('')
  const navigate = useNavigate()

  const onChange = (event) => {
    const { value, name } = event.target
    setItem((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

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
  // 카테고리 onchange
  const handleSaveOption = (option) => {
    setItem((prev) => ({
      ...prev,
      category: option,
    }))
  }

  const handleYoutubeUpload = () => {
    try {
      const url = new URL(youtubeUrl)
      const searchParams = new URLSearchParams(url.search)
      setItem((prev) => ({
        ...prev,
        youtubeUrl: searchParams.get('v') || '',
      }))
      setShowYoutubePreview(true)
      YtRef.current = youtubeUrl
    } catch (error) {
      alert('유효한 유튜브 URL을 입력해주세요!')
    }
  }
  const handleYoutubeDelete = () => {
    setItem((prev) => ({
      ...prev,
      youtubeUrl: '',
    }))
    setShowYoutubePreview(false)
  }

  const handleSave = async (event) => {
    event.preventDefault()
    if (!imgFile || !title || !createdBy || !body || !director || !youtubeUrl || !category) {
      alert('빈칸을 채워주세요!')
      return
    }

    const imageRef = ref(storage, `${title}/${imgRef.current.files[0].name}`)
    await uploadBytes(imageRef, imgRef.current.files[0])
    const downloadURL = await getDownloadURL(imageRef)
    const YtFullUrl = YtRef.current

    const newInfo = {
      id: title,
      title,
      createdBy,
      body,
      img: downloadURL,
      director,
      category,
      youtubeUrl: YtFullUrl,
    }

    const docRef = doc(db, 'infos', title)
    await setDoc(docRef, newInfo)

    alert('저장되었습니다!')
    setImgFile('')
    setItem({
      title: '',
      createdBy: '',
      body: '',
      director: '',
      youtubeUrl: '',
    })
    navigate('/admin')
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
                <label htmlFor='inputprofileImg'>사진 첨부</label>
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
          <div>category</div>
          {/* 카테고리 선택 드롭다운 */}
          <Select handleSaveOption={handleSaveOption} />
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
        <St.YoutubeContext>
          <div>youtube-privew</div>
          <St.InputYoutubeUrl
            name='youtubeUrl'
            placeholder='미리보기 유튜브 링크를 넣어주세요'
            value={youtubeUrl}
            onChange={onChange}
          />
          <YoutubeButton
            handleYoutubeDelete={handleYoutubeDelete}
            youtubeUrl={youtubeUrl}
            handleYoutubeUpload={handleYoutubeUpload}
            showYoutubePreview={showYoutubePreview}
          />
        </St.YoutubeContext>
        <WriteButton handleSave={handleSave} />
      </St.Grid>
      <UpButton />
    </div>
  )
}

export default WritePage
