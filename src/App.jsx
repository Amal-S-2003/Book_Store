
import {  Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import AddBook from './Pages/AddBook'
import Header from './Components/Header'
import Footer from './Components/Footer'
import BookList from './Pages/BookList'
import UpdateBook from './Pages/UpdateBook'

function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<AddBook/>}/>
        <Route path='/update/:id' element={<UpdateBook/>}/>
        <Route path='/list' element={<BookList/>}/>
        <Route path='/*' element={<Navigate to={'/'}/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
