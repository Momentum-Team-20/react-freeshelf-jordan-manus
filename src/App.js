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
  return (
    <h2 className=''>{props.title}</h2>
  )
}


export default App
