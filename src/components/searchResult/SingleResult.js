import React from 'react'
import './Styles.scss'
import {Link} from 'react-router-dom'

function SearchResult(props) {
  const {movie, action, button} = props

  const handleClick = (movie, e) => {
    e.preventDefault()
    action(movie)
  }

  return (
    <div className="searchResult-movies--singleMovie">
      <Link
        to={{
          pathname: `/movies/${movie.imdbID}`
        }}
      >
        <h1>{movie.Title}</h1>
      </Link>
      <h2>Year: {movie.Year}</h2>
      <button
        disabled={props.disableNominate}
        type="button"
        onClick={e => handleClick(movie, e)}
      >
        {button}
      </button>
    </div>
  )
}

export default SearchResult
