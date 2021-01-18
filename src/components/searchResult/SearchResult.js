import React, {useEffect} from 'react'
import './Styles.scss'
import {Link} from 'react-router-dom'
import SingleResult from './SingleResult'

function SearchResult(props) {
  const [nominated, setNominated] = React.useState([])

  const nominate = movie => {
    setNominated([...nominated, movie])
  }

  const remove = movie => {
    setNominated(nominated.filter(el => el.imdbID !== movie.imdbID))
  }

  useEffect(
    () => {
      if (nominated.length === 5) {
        alert('Thanks! You have selected 5 movies for nomination!')
      }
    },
    [nominated]
  )

  return (
    <div className="searchResult">
      <div className="searchResult-movies">
        <h2>Search Results: </h2>
        {props.searchResult.length
          ? props.searchResult.map(el => (
              <SingleResult
                action={nominate}
                movie={el}
                button="Nominate"
                disableNominate={
                  nominated.length === 5 ||
                  nominated.some(({imdbID}) => imdbID === el.imdbID)
                }
              />
            ))
          : 'No movies found'}
      </div>
      <div className="searchResult-nominations">
        <h2>Your Nominations:</h2>
        {nominated.length
          ? nominated.map(el => (
              <SingleResult action={remove} movie={el} button="Remove" />
            ))
          : 'You have not nominated any movies yet'}
      </div>
    </div>
  )
}

export default SearchResult
