/** @format */

import React from 'react'
import BookcontextProvider from './contexts/BookContext'
import Navbar from './components/Navbar'
import BookList from './components/BookList'
import NewBookform from './components/NewBookForm'

function App() {
  return (
    <div className='App'>
      <BookcontextProvider>
        <Navbar />
        <BookList />
        <NewBookform />
      </BookcontextProvider>
    </div>
  )
}

export default App
