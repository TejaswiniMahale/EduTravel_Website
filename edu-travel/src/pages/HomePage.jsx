import React from 'react'
import Footer from '../component/Footer'
import Navbar from "../component/Navbar"
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverCloseButton,
  PopoverArrow,
  Badge,
  Box,
  Input
} from '@chakra-ui/react'
import { BsWhatsapp } from "react-icons/bs";
import "./Homepage.css"
import SlidingImages from '../component/SlidingImages'



const HomePage = () => {
  return (
    <div>
    <div><SlidingImages/></div>
    <Navbar/>
   <div className='WhatsApp'> <Popover>
  <PopoverTrigger>
    <div style={{display:"flex",width:"220px"}}><Text backgroundColor="rgb(245,247,249)" borderRadius="3px" margin="auto" fontSize="12px" padding="2px"><span style={{color:"gray"}}>Need Help!</span> <span style={{color:"black",fontWeight:"500"}}>Contact Us</span></Text><div style={{borderRadius:"28px",background:"rgb(45,183,66)",padding:"9px",width:"61px"}}><BsWhatsapp color="white" size="40px"/></div></div>
  </PopoverTrigger>
  <PopoverContent w="250px" border="none">
    <div className='whatsapp_inner'><PopoverArrow/>
    <PopoverCloseButton />
      <Box backgroundColor="rgb(45,183,66)" padding="20px" borderTopRadius="5px">
      <Text fontSize="18" fontWeight="600" color="white">We can talk! Just call me</Text>
      <Text fontSize="14"  color="white">Hi! Click one of our member below to chat on WhatsApp</Text>
      </Box>
      <Text padding="20px" fontSize="12"  color="gray">The team typically replies in a few minutes.</Text>
      <Box margin="auto" border="1px solid gray" borderRadius="5px" padding="7px">
      <Text textAlign="center" marginLeft="80px" display="flex" color="black" fontWeight="400"><BsWhatsapp color="green" size="20px"/>0987654321</Text>
      <Text textAlign="center" color="black" fontWeight="400">Edutravel</Text>
      </Box></div>
  </PopoverContent>
</Popover></div>

<div style={{background:"#454258 url(https://images.shiksha.ws/public/images/homeSearchBG.jpg)  0 0 no-repeat",marginTop:"-40px",padding:"50px"}}>
  <div style={{textAlign:"center"}}>
  <Box marginTop="40px"></Box>
  <Text color= "#fff" textAlign='center' fontSize="28px" fontWeight="700" textShadow="1px 1px 3px rgb(0 0 0 / 70%)">Find Universities Abroad that are Right for You</Text>
  <Text color= "#fff" textAlign='center' fontSize="22px" fontWeight="400" textShadow="1px 1px 3px rgb(0 0 0 / 70%)">Discover. Research. Decide.</Text>
  <Box marginTop="30px"></Box>
  <div style={{textAlign:"center"}}><Button colorScheme="orange">Search</Button> <Input width="500px" variant="filled" placeholder='Enter College, Course, Country' /></div>
  <Box marginTop="50px"></Box>
  <Text color= "#fff" textAlign='center' fontSize="16px" fontWeight="400" textShadow="1px 1px 3px rgb(0 0 0 / 70%)">Get insights into</Text>
  <Text color= "#fff" textAlign='center' fontSize="16px" fontWeight="600" textShadow="1px 1px 3px rgb(0 0 0 / 70%)">Universities | Courses | Exams | Admissions | Scholarships | Loans | Student | Visas</Text>
  <Box marginTop="40px"></Box>
  </div>
</div>
<div style={{textAlign:"center",padding:"30px",margin:"60px",boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
  <Text fontSize="24px"
    lineHeight="24px"
    fontWeight="600"
    marginBottom='8px'
    color='#000'
    letter-spacing= '.5px'>Find the right university with help of a Edutravel Counselor</Text>
    <Box marginTop="10px"></Box>
  <Text fontSize="16px" color="gray.400"
    lineHeight="24px">India's largest website for abroad study tavelling</Text>
  <Text fontSize="16px" color="gray.400"
    lineHeight="24px">Shiksha Study Abroad has information about</Text>
    <Box marginTop="10px"></Box>
  <Text marginLeft="450px" backgroundColor="orange" padding="12px" fontSize="15px" width="300px" borderRadius="4.2px" color="white" >Know more about Shiksha Counseling</Text>
</div>
<div style={{width:"80%" ,margin:"auto"}}>
<Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{  md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              // position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({  }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
              Edutravel
            </Text>
            <br />{' '}
            <Text color={'orange.400'} as={'span'}>
              Study In Your Dream Country
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              bg={'orange.400'}
              color={'white'}
              _hover={{
                bg: 'orange.500',
              }}>
              Signup For More
            </Button>
            <Button rounded={'full'}>Learn More</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          height="500px"
          borderRadius="20px"
          src={
            'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
          }
        />
      </Flex>
    </Stack>
</div>
    <Footer/>
    </div>
  )
}

export default HomePage