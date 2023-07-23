import React, { useState } from 'react'
import Cards from '../components/Cards'
import { useQuery } from 'react-query'
import { getPosts } from '../axios/api'
import { FaSearch } from 'react-icons/fa'

import * as St from '../style/StSearchStyled'
import Recommend from '../components/Recommend'

const SearchPage = () => {
  // useQuery로 데이터 전체 불러오기
  const { data, isLoading } = useQuery('infos', getPosts) // isLoading  속성으로 데이터 로딩상태 확인 → 데이터가 로드되지 않은 상태에서 map 사용하려는 에러 방지 성공!!

  // state to keep track of the selected category
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [categoryResults, setCategoryResults] = useState(null)

  // state to keep track of the searched result
  const [searchResults, setSearchResults] = useState(null)
  const [searchInput, setSearchInput] = useState('')

  // state to keep track of the searched result
  const [noResults, setNoResults] = useState(null)

  const [nowTrending, setNowTrending] = useState(null)
  const [recommend, setRecommend] = useState(null)
  const [recommendBySearch, setRecommendBySearch] = useState(null)

  // function to handle category button clicks
  const openCategoryHandler = (category) => {
    // Results In ..."~" state 변경
    setSelectedCategory(category)

    // Clear the search results when a category is selected
    setSearchResults(null) // Clear search results
    setRecommendBySearch(null)
    // Reset the noResults state if it was set
    setNoResults(false)

    // Filter the data based on the selected category
    const filteredCategoryResults = data?.filter((post) => post.category === category)
    setCategoryResults(filteredCategoryResults)

    if (filteredCategoryResults.length > 0) {
      setCategoryResults(filteredCategoryResults) // 결과가 있을 경우 결과로 보여주고
      setNoResults(false) // 결과없음 섹션 숨기기
      setRecommend(false)
      setNowTrending(true)
    } else {
      setSearchResults(null) // 결과가 없을 경우 검색 결과를 초기화
      setNoResults(true) // 결과없음 섹션 추가
      setRecommend(true)
      setNowTrending(false)
    }

    console.log(selectedCategory) // 셀렉한 카테고리값 확인
    console.log(categoryResults) // 필터링 된 정보
    // console.log(categoryResults)
  }

  // function to handle Search button clicks
  const openSearchResultsHandler = (title) => {
    setSelectedCategory(null) // 기존 선택한 카테고리 정보 초기화
    setRecommend(null)
    // 검색한 값을 포함하는 데이터만 필터링하여 결과로 저장
    const filteredSearchResults = data.filter((post) => post.title.includes(title))

    if (filteredSearchResults.length > 0) {
      setSearchResults(filteredSearchResults) // 결과가 있을 경우 결과로 저장
      setNoResults(false)
      setRecommendBySearch(false)
      setNowTrending(true)
    } else {
      setSearchResults(null) // 결과가 없을 경우 검색 결과를 초기화
      setNoResults(true) // 결과 없음 섹션 추가
      setRecommendBySearch(true) // 검색어 관련 추천 드라마
      setNowTrending(false)
    }
    // console.log('Search Input', searchInput)
    // console.log('Search Results', filteredSearchResults)
  }

  return (
    <>
      <h1>Search Home</h1>
      <St.SearchInput>
        <St.Input
          type='text'
          placeholder='Search Here'
          onChange={(e) => {
            setSearchInput(e.target.value)
          }}
        />
        <St.SearchBtn onClick={() => openSearchResultsHandler(searchInput)}>
          <FaSearch />
        </St.SearchBtn>
      </St.SearchInput>
      <St.CategoryButtons>
        <St.CategoryBtn onClick={() => openCategoryHandler('category1')}>Category 1</St.CategoryBtn>
        <St.CategoryBtn onClick={() => openCategoryHandler('category2')}>Category 2</St.CategoryBtn>
        <St.CategoryBtn onClick={() => openCategoryHandler('category3')}>Category 3</St.CategoryBtn>
        <St.CategoryBtn onClick={() => openCategoryHandler('category4')}>Category 4</St.CategoryBtn>
      </St.CategoryButtons>
      {/* Show the selected category's card list */}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        selectedCategory && (
          <div>
            <h1>Results In "{selectedCategory}"</h1>
            <p>카테고리별 카드리스트</p>
            <Cards data={categoryResults} />
          </div>
        )
      )}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        searchResults && (
          <div>
            <h1>Results For "{searchInput}"</h1>
            <p>검색값 카드리스트</p>
            <Cards data={searchResults}></Cards>
          </div>
        )
      )}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        noResults && (
          <div>
            <h1>No Results...</h1>
            <p>검색값이 없습니다</p>
          </div>
        )
      )}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        recommend && (
          <div>
            <h1>Recommend Stories</h1>
            <p> because you have searched..."{selectedCategory}"</p>
            <Recommend data={selectedCategory} />
          </div>
        )
      )}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        recommendBySearch && (
          <div>
            <h1>Recommend Stories</h1>
            <p> because you have searched..."{searchInput}"</p>
            <Recommend data={searchInput} />
          </div>
        )
      )}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        nowTrending || (
          <div>
            <h1>Now Trending</h1>
            <Cards data={data} />
          </div>
        )
      )}
    </>
  )
}

export default SearchPage
