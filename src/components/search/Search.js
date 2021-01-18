import React from 'react'
import './Styles.scss'
import SearchResult from '../searchResult/SearchResult'
import axios from 'axios'
import '../../../secrets.js'

function Search() {
  const [search, setSearch] = React.useState('')
  const [searchResult, setSearchResult] = React.useState([])

  const handleClick = async e => {
    e.preventDefault()
    console.log(process.env.X_RAPIDAPI_KEY, process.env)
    const {data} = await axios.get(
      `http://www.omdbapi.com/?apikey=${process.env.KEY}&s=${search}`
    )
    const movies = data.Search
    setSearchResult(movies)
    setSearch('')
  }

  return (
    <div className="app">
      <div className="app--search">
        <input
          className="app--search-bar"
          type="text"
          key="searchBar"
          value={search}
          placeholder="Search movie"
          onChange={e => setSearch(e.target.value)}
        />
        <button className="app--search-button" onClick={handleClick}>
          Search
        </button>
      </div>
      <div className="app--result">
        <SearchResult searchResult={searchResult} />
      </div>
    </div>
  )
}

export default Search
