import React, { useEffect, useState } from 'react'
import {Box, Button, Center, Input, useToast} from "@chakra-ui/react"
import { useDispatch,useSelector } from "react-redux";
import {getData} from "../redux/action.js"
import {useNavigate} from "react-router-dom"
const Login = () => {
const dispatch = useDispatch()
const [email,setEmail] = useState("")
const [pass,setPass] = useState("")
const toast = useToast()
let userData = useSelector(state=>state.user)
let navigate = useNavigate()


useEffect(()=>{
    dispatch(getData())
},[dispatch])
let token = localStorage.getItem("token")

const logInHandler=()=>{
    let login = false
   for(let i in userData){
      if(email===userData[i].email && pass===userData[i].password){
        login=true
        let obj=userData[i].id
         console.log(obj)
         localStorage.setItem("token",JSON.stringify(obj))
        break
      }
   }
   if(login===true){
    toast({
        title: 'Logged in Successfull.',
        description: "Welcome",
        status: 'success',
        duration: 2000,
        isClosable: true,
        position:"top"
      })
      navigate("/user")
   }
   else{
    toast({
        title: 'Login Failed.',
        description: "Please enter correct Details.",
        status: 'error',
        duration: 3000,
        isClosable: true,
        position:"top"
      })
   }
}

  return (
    <Box>
        <Input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="email"/>
        <Box marginBottom="10px"></Box>
        <Input type="password" onChange={(e)=>setPass(e.target.value)} placeholder="password"/>
        <Box marginBottom="10px"></Box>
        <Center>
        <Button w="100%" onClick={logInHandler}>Login</Button>
        </Center>
    </Box>
  )
}

export default Login