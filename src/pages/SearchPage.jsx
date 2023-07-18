import React, { useState } from 'react'
import Cards from '../components/Cards'

const SearchPage = () => {
  // state to keep track of the selected category
  const [selectedCategory, setSelectedCategory] = useState(null)

  // state to keep track of the searched result
  // const [search, setSearch] = useState(null)

  // function to handle category button clicks
  const openCategoryHandler = (category) => {
    setSelectedCategory(category)
  }

  return (
    <>
      <h1>SearchPage</h1>
      <input type='text' placeholder='Search Here' />
      <button>Search</button>
      <div>
        <button onClick={() => openCategoryHandler('Category 1')}>Category 1</button>
        <button onClick={() => openCategoryHandler('Category 2')}>Category 2</button>
        <button onClick={() => openCategoryHandler('Category 3')}>Category 3</button>
        <button onClick={() => openCategoryHandler('Category 4')}>Category 4</button>
      </div>

      {/* Show the selected category's card list */}
      {selectedCategory && (
        <div>
          <h2>Results In ... {selectedCategory}</h2>
          <div>카테고리별 카드리스트</div>
        </div>
      )}

      <div>
        <h2>Results For ...</h2>
        <div>검색값 카드리스트</div>
      </div>
      <div>
        <h2>No Results...</h2>
        <div>검색값이 없습니다</div>
      </div>
      <div>
        <Cards></Cards>
      </div>
    </>
  )
}

export default SearchPage
