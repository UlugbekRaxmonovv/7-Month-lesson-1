import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../public/pages/Home/Home'
import Admin from '../public/pages/Admin/Admin'
import Navbar from './component/Navbar/Navbar'
import Saidbar from '../public/pages/Admin/Saidbar/Saidbar'
import Mange from '../public/pages/Admin/Mange/Mange'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function App() {


  return (
    <>
    <Navbar/>
     <Routes>
     <Route path='/' element={<Home/>}/>

     <Route path='admin' element={<Admin/>}>
    <Route path='saidbar' element={<Saidbar/>}/>
    <Route path='mange' element={<Mange/>}/>
      </Route>
     </Routes>

<ToastContainer/>
    </>
  )
}

export default App
