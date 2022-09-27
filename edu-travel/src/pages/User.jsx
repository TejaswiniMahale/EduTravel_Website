import { Box, Button, Center, Divider, List, ListIcon, ListItem, Stack } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../redux/action'
import Navbar from "../component/Navbar"
import {Text} from "@chakra-ui/react"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./User.css"
import Footer from '../component/Footer'
import { CheckCircleIcon } from '@chakra-ui/icons'

const User = () => {
  const [data,setData] = useState({})
  const [full_data,setFull_data] = useState({})
  
  const ok=()=>{
    localStorage.removeItem("token");
  }
  let id = localStorage.getItem("token")

  
const singleData = (id) =>{
  return axios.get(`https://warm-headland-49821.herokuapp.com/user/${id}`)
  .then((r)=>{
    let date = r.data.doc
    let res = r.data
    setData(date)
    setFull_data(res)
  })
}
useEffect(()=>{
 
  singleData(id)
//  setData()
},[id])
console.log(data)
const percentage = Math.ceil((data.length/7)*100)
console.log(percentage)

  return (
    <div style={{backgroundColor:"rgb(249,249,249)"}}>
      <Navbar/>
      <div  style={{display:"flex"}}>
        <div className='User_Data_Sidebar' style={{padding:"40px",background:"RGB(101 158 159)",width:"250px",height:"100vh"}}>
          <div style={{marginBottom:"30px",fontSize:"18px",fontWeight:"600"}}><Button  borderRadius="20px" backgroundColor="rgb(0,112,117)" width="190px">Documents</Button></div>
          <div style={{marginBottom:"30px",fontSize:"18px",fontWeight:"600"}}><Button borderRadius="20px" backgroundColor="rgb(0,112,117)" width="190px">Information</Button></div>
          <div style={{marginBottom:"30px",fontSize:"18px",fontWeight:"600"}}><Button borderRadius="20px" backgroundColor="rgb(0,112,117)" width="190px">Help</Button></div>
        </div>
        <div className='User_Data' style={{backgroundColor:"white",borderRadius:"15px",padding:'30px'}}>
         {
          data.length>0?<div style={{}}>
          <Text fontSize="24px" marginBottom="20px" fontWeight="700">Hey <span style={{color:"green"}}>{full_data.name}!</span> Here your Profile data</Text>
        <div style={{display:"flex",justifyContent:"space-evenly"}}>
        <div style={{marginTop:"15px",margin:"auto",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",padding:"20px",width:"250px",borderRadius:"5px"}}>
          <List spacing={3}>
          {
            data.map((e,i)=>{
              return <ListItem color="grey" key={i+1}><ListIcon as={CheckCircleIcon} color='green.500' />{data[i]}</ListItem>
            })
          }
          </List>
        </div>
        
        <div  >
        <div style={{width:"150px",margin:"auto"}}><CircularProgressbar value={percentage} text={`${percentage}%`} /></div>
        <div style={{margin:"auto",marginTop:"10px",textAligin:"center"}}>{
          data.length===7?<Button fontSize="20px"  fontWeight="500 " textShadow="1px 0px 0px rgb(0 0 0 / 10%)" textAlign="center" marginBottom="10px" marginTop="15px" padding="10px" color="white" backgroundColor="green.400"  marginLeft="80px" borderRadius="15px">Congratulations! Your Process Completed</Button>:<Button padding="15px" fontSize="20px"  fontWeight="500 " textShadow="1px 0px 0px rgb(0 0 0 / 10%)" textAlign="center" marginBottom="10px" marginTop="15px" color="white" backgroundColor="orange.400"   marginLeft="50px" borderRadius="15px">Your documents is in Process</Button>
        }</div>
        </div>
        </div>
        <Text backgroundColor="gray.100" borderRadius="10px" fontSize="16px"  fontWeight="500 " textShadow="1px 0px 0px rgb(0 0 0 / 10%)" textAlign="center" marginBottom="10px" marginTop="15px" padding="10px" color="black">You Completed this Documentes, wait for other document review</Text>
       
        
          </div>:<h1>Wait for the counceler to review your Profile data</h1>
         }
        </div>
        
      </div>
      
      <Footer/>
    </div>
  )
}

export default User