import React, { useState } from 'react'
import { styled } from 'styled-components'

const EditCategory = (props) => {
  const { handleSaveOption, category } = props
  const options = ['category1', 'category2', 'category3', 'category4']
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(category)

  const handleOption = (option) => {
    setIsOpen(false)
    setSelectedOption(option)
    handleSaveOption(option)
  }

  return (
    <div>
      <div>category</div>
      <DropdownWrapper>
        <DropdownHeader
          onClick={() => {
            setIsOpen((prev) => !prev)
          }}
        >
          <span>{selectedOption || '선택하세요'}</span>
          <span>▽</span>
        </DropdownHeader>
        {isOpen && (
          <DropdownList>
            {options.map((option) => (
              <DropdownItem
                key={option}
                onClick={() => {
                  handleOption(option)
                }}
              >
                {option}
              </DropdownItem>
            ))}
          </DropdownList>
        )}
      </DropdownWrapper>
    </div>
  )
}

export default EditCategory

const DropdownWrapper = styled.div`
  position: relative;
  z-index: 999;
  width: 600px;
  border: 1px solid #ccc;
  background-color: white;
  transform: translate(80px, 0px);
`
const DropdownHeader = styled.div`
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`
const DropdownList = styled.div`
  border-top: 1px solid #ccc;
  position: absolute;
  width: 600px;
  border: 1px solid #ccc;
  background-color: #ffffff;
`

const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
  `