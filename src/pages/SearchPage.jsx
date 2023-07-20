import React, { useState } from 'react'
import Cards from '../components/Cards'
import { useQuery } from 'react-query'
import { getPosts } from '../axios/api'

import * as St from '../style/StSearchStyled'

const SearchPage = () => {
  // useQuery로 데이터 전체 불러오기
  const { data } = useQuery('infos', getPosts)

  // state to keep track of the selected category
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [categoryResults, setCategoryResults] = useState(null)

  // state to keep track of the searched result
  const [searchResults, setSearchResults] = useState(null)

  // state to keep track of the searched result
  const [noResults, setNoResults] = useState(null)

  // function to handle category button clicks
  const openCategoryHandler = async (category) => {
    // Results In ..."~" state 변경
    setSelectedCategory(category)

    // Clear the search results when a category is selected
    setSearchResults(null) // Clear search results

    // Reset the noResults state if it was set
    setNoResults(false)

    // Filter the data based on the selected category
    const filteredCategoryResults = await data.filter((post) => post.category === category)
    setCategoryResults(filteredCategoryResults)

    console.log(selectedCategory) // 셀렉한 카테고리값 확인
    console.log(categoryResults) // 필터링 된 정보
    // console.log(categoryResults)
  }

  // function to handle search button clicks
  // *** 조건문으로 noReults까지 구현해보기
  const openSearchResultsHandler = async (title) => {
    setSelectedCategory(null) // 기존 선택한 카테고리 정보 초기화

    // 검색한 값을 포함하는 데이터만 필터링하여 결과로 저장
    const filteredSearchResults = await data.filter((post) => post.title.includes(title))

    // ***확인필요***
    if (filteredSearchResults.length > 0) {
      setSearchResults(filteredSearchResults) // 결과가 있을 경우 결과로 저장
      setNoResults(false) // Reset the noResults state if it was set
    } else {
      setSearchResults(null) // 결과가 없을 경우 검색 결과를 초기화
      setNoResults(true) // Show the noResults message
    }
  }

  return (
    <>
      <h1>SearchPage</h1>
      <input type='text' placeholder='Search Here' />
      <St.SearchBtn onClick={() => openSearchResultsHandler('title')}>Search</St.SearchBtn>
      <div>
        <St.CategoryBtn onClick={() => openCategoryHandler('category1')}>Category 1</St.CategoryBtn>
        <St.CategoryBtn onClick={() => openCategoryHandler('category2')}>Category 2</St.CategoryBtn>
        <St.CategoryBtn onClick={() => openCategoryHandler('category3')}>Category 3</St.CategoryBtn>
        <St.CategoryBtn onClick={() => openCategoryHandler('category4')}>Category 4</St.CategoryBtn>
      </div>

      {/* Show the selected category's card list */}
      {selectedCategory && (
        <div>
          <h2>Results In ... {selectedCategory}</h2>
          <div>카테고리별 카드리스트</div>
          <Cards data={categoryResults} />
        </div>
      )}

      {searchResults && (
        <div>
          <h2>Results For ...</h2>
          <div>검색값 카드리스트</div>
          <Cards data={searchResults}></Cards>
        </div>
      )}
      <div>
        <h2>Now Trending</h2>
        <Cards data={data} />
      </div>

      {noResults && (
        <div>
          <h2>No Results...</h2>
          <div>검색값이 없습니다</div>
        </div>
      )}
    </>
  )
}

export default SearchPage
