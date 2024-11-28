
import {  Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import AddBook from './Pages/AddBook'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<AddBook/>}/>
        <Route path='/*' element={<Navigate to={'/'}/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
