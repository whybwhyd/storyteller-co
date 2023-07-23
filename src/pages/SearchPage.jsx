import React, { useState } from 'react'
import Cards from '../components/Cards'
import { useQuery } from 'react-query'
import { getPosts } from '../axios/api'
import { FaSearch } from 'react-icons/fa'

import * as St from '../style/StSearchStyled'
import Recommend from '../components/Recommend'

const SearchPage = () => {
  // useQuery로 데이터 전체 불러오기
  const { data, isLoading } = useQuery('infos', getPosts)

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
    setSelectedCategory(category)

    // Clear the search results when a category is selected
    setSearchResults(null)
    setRecommendBySearch(null)
    setNoResults(false)

    // Filter the data based on the selected category
    const filteredCategoryResults = data?.filter((post) => post.category === category)
    setCategoryResults(filteredCategoryResults)

    if (filteredCategoryResults.length > 0) {
      setCategoryResults(filteredCategoryResults)
      setNoResults(false)
      setRecommend(false)
      setNowTrending(true)
    } else {
      setSearchResults(null)
      setNoResults(true)
      setRecommend(true)
      setNowTrending(false)
    }
  }

  // function to handle Search button clicks
  const openSearchResultsHandler = (title) => {
    setSelectedCategory(null)
    setRecommend(null)
    const filteredSearchResults = data.filter((post) => post.title.includes(title))

    if (filteredSearchResults.length > 0) {
      setSearchResults(filteredSearchResults)
      setNowTrending(true)
    } else {
      setSearchResults(null)
      setNoResults(true)
      setRecommendBySearch(true)
      setNowTrending(false)
    }
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
        <St.CategoryBtn onClick={() => openCategoryHandler('로맨스')}>로맨스</St.CategoryBtn>
        <St.CategoryBtn onClick={() => openCategoryHandler('액션')}>&nbsp;&nbsp;액션&nbsp;&nbsp;</St.CategoryBtn>
        <St.CategoryBtn onClick={() => openCategoryHandler('공포')}>&nbsp;&nbsp;공포&nbsp;&nbsp;</St.CategoryBtn>
        <St.CategoryBtn onClick={() => openCategoryHandler('SF')}>&nbsp;&nbsp;SF&nbsp;&nbsp;</St.CategoryBtn>
      </St.CategoryButtons>
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
