import { useState } from 'react'
import React from 'react'
import './App.css'
import bookData from './book-data.json'


function App() {
  return (
    <div>
      <h1>Freeshelf</h1>
      {/* Use bookData to show books on the page*/}
      <section className='section book-list'>
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
    <div>
      <h2 className=''>{props.title}</h2>
      <p className='author'>{props.author}</p>
      <p className='short-desc'>{props.shortDescription}</p>
      <img className='image cover-art' src={props.image ? props.image : fallback_image} alt='book cover' onError={addDefaultSrc} />
      <button className='button' onClick={handleClick}>{expanded ? 'show less' : 'show more'}</button>

      {/* take div out if spacing is off */}
      {expanded && (
        <div>
          <p className='link url'>{props.url}</p>
          <p className='publisher'>{props.publisher}</p>
          <p className='pub-date'>{props.publication_date}</p>
          <p className='full-desc'>{props.expanded_description}</p>
        </div>
      )}
    </div>
  )
}


export default App
