import React from 'react'
import './styles/SearchBar.css'

export const SearchBar = () => {
  return (
    <div class="wrapper">
    <div class="label">Search your Pokemon!</div>
    <div class="searchBar">
      <input id="searchQueryInput" type="text" name="searchQueryInput" placeholder="Search" value="" />
      <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit">
        <img style={{"width": "30px", "height": "30px"}} src="./pokeball.png" alt="Search" >
        </img>
      </button>
    </div>
  </div>
  )
}
