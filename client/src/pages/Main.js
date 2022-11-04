import React from 'react'
import { BrowserRouter, Router, Route } from 'react-router-dom'
import List from '../components/List'

const Main = () => {
  return (
    <h1 className='ms-4 me-4'>
        <List />
    </h1>
  )
}

export default Main