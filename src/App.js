import './App.css';
import Main from './Container.js'
import { useState, useEffect } from 'react'
import axios from 'axios'

const RECOMMEND_URL = 'http://localhost:8080/api/books/book/recommended'
const WISHED_URL = 'http://localhost:8080/api/books/book/wished'

const App = () => {
  const [ recommendBooks, setRecommendBooks ] = useState([])
  const [ wishBooks, setWishBooks ] = useState([])

  const getRecommendedBooks = async () => {
    try {
      const resRecommend = await axios.get(RECOMMEND_URL)
      console.log(resRecommend)

      setRecommendBooks(resRecommend.data)
    } catch (err) {
      console.log(err)

      setRecommendBooks([])
    }
  }

  const getWishBooks = async () => {
    try {
      const resWish = await axios.get(WISHED_URL)
      console.log(resWish)

      setWishBooks(resWish.data)
    } catch (err) {
      console.log(err)

      setWishBooks([])
    }
  }

  useEffect(() => {
    getRecommendedBooks()
    getWishBooks()
  }, [])

  return (
    <div>
      <Main
        recommendBooks={recommendBooks} 
        wishBooks={wishBooks}/>
    </div>
  );
}

export default App;