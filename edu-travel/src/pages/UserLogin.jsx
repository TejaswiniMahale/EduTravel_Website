// import {Box, Button, Center, Input, Select, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import {postUser} from "../redux/action"
import { useNavigate} from 'react-router-dom'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Textarea,
  Select,
} from '@chakra-ui/react';
// import {useState } from 'react';
import "./User.css"
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import Navbar from '../component/Navbar';
import SignIn from '../component/SignIn';
import Footer from '../component/Footer';

const UserLogin = () => {
  let [name,setName] = useState("")
  let [email,setEmail] = useState("")
  let [mobile,setMobile] = useState()
  let [country,setCountry] = useState("")
  let [desc,setDesc] = useState("")
  let [password,setPassword]=useState("")
  let [count,setCount] = useState(0)
  let [doc,setDoc] = useState([])
  let [status,setStatus] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

const signUpHandler=()=>{
  const payload={
    name:name,
    email:email,
    mobile:mobile,
    country:country,
    password:password,
    desc:desc,
    doc:doc,
    count:count,
    status:status
  }
  dispatch(postUser(payload))
     .then(()=>{
      console.log("hello")
    })
    .then(()=>{
      navigate(`/`)
    })
}
const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
    <div  style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}}><Navbar/></div>
     
  <Flex
  minW={'80%'}
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.400')}>
      <Stack spacing={8} mx={'auto'} maxW={'xl'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to study in your dream country. ✌️
          </Text>
        </Stack>
        <Box
          w="100%"
          width='600px'
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            
                <FormControl  isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input type="text" onChange={(e)=>setName(e.target.value)} placeholder='enter your name'/>
                </FormControl>
             
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="email"/>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} onChange={(e)=>setPassword(e.target.value)} placeholder="password"/>
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Mobile Number</FormLabel>
              <Input type="number" onChange={(e)=>setMobile(e.target.value)} placeholder="mobile no."/>
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Select Country</FormLabel>
              <Select placeholder='Select Country' onChange={(e)=>setCountry(e.target.value)}>
        <option value="Australia">Australia</option>
        <option value="US">US</option>
        <option value="Germany">Germany</option>
        <option value="Canada">Canada</option>
        <option value="France">France</option>
        <option value="Switzerland">Switzerland</option>
        <option value="America">America</option>
        <option value="England">England</option>
        <option value="UK">UK</option>
        <option value="New-York">New-York</option>
      </Select>
            </FormControl>
            <FormControl  >
              <FormLabel>Comment</FormLabel>
              <Textarea onChange={(e)=>setDesc(e.target.value)} placeholder='description' />
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'rgb(0,112,117)'}
                color={'white'}
                _hover={{
                  bg: 'RGB(101 158 159)',
                }} onClick={signUpHandler}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link color={'rgb(0,112,117)'}><SignIn/></Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    <Footer/>
    </div>
  )
}

export default UserLogin