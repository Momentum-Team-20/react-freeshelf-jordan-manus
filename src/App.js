import { useState } from 'react'
import React from 'react'
import './App.css'
import bookData from './book-data.json'


function App() {
  return (
    <div>
      <h1>Freeshelf</h1>
      {/* Use bookData to show books on the page*/}
      <section className='section is-flex-wrap-wrap my-2 book-list'>
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
      </section>
    </div>
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
    <div className='columns display'>
      <div className='column is-two-thirds'>
        <h2 className='title is-4 has-text-weight-bold'>{props.title}</h2>
        <p className='author subtitle is-italic has-text-weight-medium'>{props.author}</p>
        <p className='short-desc'>{props.short_description}</p>



        <button className='button is-small is-rounded' onClick={handleClick}>{expanded ? '^ show less' : '⌄ show more'}</button>


        {/* addind modal for expansion */}
        {/* <div className="modal">
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">{props.author}</p>
              <button className="delete" aria-label="close"></button>
            </header>
            <section className="modal-card-body">

            </section>

          </div>
        </div> */}


        {/* take div out if spacing is off */}
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
    </div >
  )
}





export default App
