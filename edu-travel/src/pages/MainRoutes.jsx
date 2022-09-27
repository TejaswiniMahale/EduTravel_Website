import React from 'react'
import {Route, Routes} from "react-router-dom"
import HomePage from './HomePage'
import AdminLogin from "./AdminLogin"
import UserLogin from "./UserLogin"
import Admin from "./Admin"
import User from "./User"
import Login from './Login'
import SignIn from '../component/SignIn'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/after_signup' element={<SignIn/>} />
      <Route path='/adminlogin' element={<AdminLogin/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/userlogin' element={<UserLogin/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/user' element={<User/>}/>
    </Routes>
  )
}

export default MainRoutes