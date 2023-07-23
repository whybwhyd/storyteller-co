import React, { useState, useRef } from 'react'
import * as St from '../style/StWriteStyled'
import DefaultImg from '../assets/DefaultImg.png'
import EditCategory from '../components/EditCategory'
import { doc, updateDoc } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { storage, db } from '../firebase'
import { YoutubeButton, EditButton, UpButton } from '../components/Button'
import { useNavigate, useParams, useLocation } from 'react-router-dom'

const EditPage = () => {
  const { state } = useLocation()
  const { title, createdBy, body, director, img, category, youtubeUrl } = state
  const [imgFile, setImgFile] = useState(img)
  const [showYoutubePreview, setShowYoutubePreview] = useState(false)
  const { id } = useParams()
  const imgRef = useRef()
  const YtRef = useRef('')
  const navigate = useNavigate()
  const [item, setItem] = useState({
    title,
    createdBy,
    body,
    director,
    category,
    youtubeUrl,
  })
  const onChange = (event) => {
    const { value, name } = event.target
    setItem({
      ...item,
      [name]: value,
    })
  }
  // 이미지 업로드 input의 onChange
  const saveImgFile = async () => {
    const file = imgRef.current.files[0]
    if (file) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        setImgFile(reader.result)
      }
    }
  }
  const deleteImg = () => {
    setImgFile('')
  }
  const handleSaveOption = (option) => {
    setItem((prev) => {
      if (prev.category === option) {
        return prev
      } else {
        return {
          ...prev,
          category: option,
        }
      }
    })
  }
  const handleYoutubeUpload = () => {
    try {
      const url = new URL(item.youtubeUrl)
      const searchParams = new URLSearchParams(url.search)
      setItem((prev) => ({
        ...prev,
        youtubeUrl: searchParams.get('v') || '',
      }))
      setShowYoutubePreview(true)
      YtRef.current = item.youtubeUrl
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

  const handleEdit = async (event) => {
    event.preventDefault()
    if (!imgFile || !title || !createdBy || !body || !director) {
      alert('빈칸을 채워주세요!')
      return
    }
    let downloadURL = imgFile
    if (imgFile !== img) {
      const imageRef = ref(storage, `${title}/${imgRef.current.files[0].name}`)
      await uploadBytes(imageRef, imgRef.current.files[0])
      downloadURL = await getDownloadURL(imageRef)
    }
    const newInfo = {
      id: item.title,
      title: item.title,
      createdBy: item.createdBy,
      body: item.body,
      img: downloadURL,
      director: item.director,
      category: item.category,
      youtubeUrl: item.youtubeUrl,
    }
    const infoRef = doc(db, 'infos', title)
    await updateDoc(infoRef, newInfo)
    alert('저장되었습니다!')
    navigate(`/detail/:${id}`)
  }
  return (
    <div id='1'>
      <St.Grid>
        <div>
          <St.ImgUpload>
            <div>
              <St.UploadImgFile src={imgFile ? imgFile : DefaultImg} alt='이미지 업로드' />
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
            </div>
          </St.ImgUpload>
          <St.Body>
            <div>Title</div>
            <St.InputTitle type='text' name='title' placeholder='제목' value={title} onChange={onChange} />
            <div>editor</div>
            <St.InputCreatedBy
              type='text'
              placeholder='작성자'
              name='createdBy'
              value={item.createdBy}
              onChange={onChange}
            />
            {/* 카테고리 드롭다운 컴포넌트*/}
            <EditCategory handleSaveOption={handleSaveOption} category={category} />
            <div>body</div>
            <St.BodyTextarea
              name='body'
              cols='30'
              rows='10'
              placeholder='작품 소개를 입력해주세요'
              value={item.body}
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
              value={item.director}
              onChange={onChange}
            />
          </St.Director>
          <St.YoutubeContext>
            <div>youtube-privew</div>
            <St.InputYoutubeUrl
              name='youtubeUrl'
              placeholder='미리보기 유튜브 링크를 넣어주세요'
              value={item.youtubeUrl}
              onChange={onChange}
            />
            <YoutubeButton
              handleYoutubeDelete={handleYoutubeDelete}
              youtubeUrl={item.youtubeUrl.split('v=')[1].split('&')[0]}
              handleYoutubeUpload={handleYoutubeUpload}
              showYoutubePreview={showYoutubePreview}
            />
          </St.YoutubeContext>
          <EditButton handleEdit={handleEdit} id={id} />
        </div>
      </St.Grid>
      <UpButton />
    </div>
  )
}

export default EditPage
