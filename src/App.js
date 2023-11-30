import { useState } from 'react'
import React from 'react'
import './App.css'
import bookData from './book-data.json'
import { sort_books, search_bar } from './main'


function App() {
  return (
    <div>
      {/* nav bar */}
      <div className='nav'>
        <nav className="navbar has-background-black is-fixed-top" role="navigation" aria-label="main navigation">
          <a className="navbar-item image" href="#"><img src="images/logo-for-book-project.png" className="logo-image is-square" /></a>
          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>

          {/* home and filter button */}
          <div id="nav" className="navbar-menu is-spaced">
            <div className="navbar-start">
              <a className="navbar-item has-text-white home-link" href="#root">Home</a>
              <div className="navbar-item">
                <button className="button filter-button" onClick={sort_books}>Filter</button>
              </div>
            </div>

            {/* search bar*/}
            <div className="navbar-end has-addons mt-2">
              <input id="searchbar" className="control input navbar-item" type="text" placeholder="search" />
              <button className="control button is-info" onClick={search_bar}>Search</button>
            </div>

            {/* login buttons */}
            <div className="navbar-end ml-0">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-primary ">
                    <strong>Sign up</strong>
                  </a>
                  <a className="button is-light">
                    Log in
                  </a>
                </div>
              </div>

            </div>
          </div>
        </nav>
      </div>

      {/* banner animations */}
      <div className='container'>
        <div className='title-display'>
          <h1 className='site-title'>Freeshelf</h1>
        </div>
        <div className='ghost'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      {/* Use bookData to show books on the page*/}
      <ul className='section is-flex-wrap-wrap my-2 book-list'>
        {bookData.map((book) => (
          <Display
            title={book.title}
            author={book.author}
            short_description={book.shortDescription}
            image={book.coverImageUrl}
            url={book.url}
            publisher={book.publisher}
            publication_date={book.publicationDate}
            expanded_description={book.detailedDescription}
          />
        ))}
      </ul>
    </div >
  )
}


function Display(props) {
  const [expanded, setExpanded] = useState(false)
  const handleClick = () => {
    setExpanded(!expanded)
  }

  const fallback_image = "images/no-image-icon.png"
  const addDefaultSrc = (ev) => {
    ev.target.src = fallback_image
  }

  return (


    <li id='display' className='columns'>
      <div className='column is-two-thirds'>

        {/* visible book info */}
        <h2 id='book-title' className='title is-4 has-text-weight-bold'><b className='is-sr-only'>Title: </b>{props.title}</h2>
        <p className='author subtitle is-italic has-text-weight-medium'><b className='is-sr-only'>Author: </b>{props.author}</p>
        <p className='short-desc'><b className='is-sr-only'>Short Description: </b>{props.short_description}</p>

        <button className='button is-small is-rounded' aria-expanded={expanded} onClick={handleClick}>{expanded ? '^ show less' : '⌄ show more'}</button>


        {/* hidden info until expanded button pressed */}
        {expanded && (
          <div>
            <p className='link url'><b>URL: </b>
              <a href={props.url} className='is-link '>{props.url}</a>
            </p>
            <p className='publisher'><b>Publisher:</b> {props.publisher}</p>
            <p className='pub-date'><b>Publication Date:</b> {props.publication_date}</p>
            <p className='full-desc'><b>Full Description:</b><br /> {props.expanded_description}</p>
          </div>)}
      </div>

      <img className='cover-art image column is-4by3 is-flex pt-1 my-3' src={props.image ? props.image : fallback_image} alt='book cover' onError={addDefaultSrc} />
    </li >

  )
}





export default App
