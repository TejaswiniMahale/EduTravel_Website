import { Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import SignIn from './SignIn'
import "./navbar.css"
import { VscAccount } from "react-icons/vsc";


const Navbar = () => {
  let token = localStorage.getItem("token")
  
  return (
    <div style={{display:"flex"}} className="Navbar">
      <div  style={{display:"flex"}}>
        <img style={{width:"60px",height:"60px",borderRadius:"15px",marginLeft:"20px"}} src="data:image/jpeg;base64,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" alt='img'/>
        <div style={{marginLeft:"20px"}}>
        <h1 style={{fontSize:"20px" ,fontWeight:"700",color:"RGB(32 178 246)"}}>Edutravel</h1>
        <h1 style={{fontSize:"20px",fontWeight:"700",color:"RGB(32 178 246)"}}>Flyboard Venture</h1>
      </div>
      </div>
      
      <div style={{display:"flex",marginTop:"9px"}}>
      <div style={{fontSize:"20px", marginLeft:"150px",fontWeight:"500",color:"white"}}><Link to={`/`} >Home</Link></div>
      <div style={{fontSize:"20px", marginLeft:"150px",fontWeight:"500",color:"white"}}><Link to={`/`} >About</Link></div>
      <div style={{fontSize:"20px", marginLeft:"150px",fontWeight:"500",color:"white"}}><Link to={`/`} >Contact</Link></div>
      <div style={{ marginLeft:"140px"}}><Link to={`/userlogin`}><Button  color="black" backgroundColor="RGB(101 158 159)" borderRadius="20px">SignUp</Button></Link></div>
      <div style={{ marginLeft:"20px"}}><SignIn/></div>
      <div style={{fontSize:"20px", marginLeft:"20px",fontWeight:"500",color:"white"}}>
      {
        token?<div style={{color:"white"}}><Link to={`/user`}><VscAccount size="35px"/></Link></div>:<div></div>
       }
      </div>
      </div>
    </div>
  )
}

export default Navbar