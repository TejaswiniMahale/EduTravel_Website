import React from 'react'
import { FcGoogle } from 'react-icons/fc';
import {FaFacebook} from "react-icons/fa"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    Text,
    useDisclosure,
    Button,
    Box,
    Divider,
    Flex,
    Center,
  } from '@chakra-ui/react'

import { Link, useNavigate } from 'react-router-dom'
import Login from '../pages/Login'

const SignIn = () => {
  const navigate = useNavigate()
  let token = localStorage.getItem("token")
  const handleClick=()=>{
    localStorage.removeItem("token")
    navigate(`/`)
  }
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        {
          token?<Button color="black" backgroundColor="RGB(101 158 159)" borderRadius="20px" onClick={handleClick}>Log Out</Button>:<Button color="black" backgroundColor="RGB(101 158 159)" borderRadius="20px"  onClick={onOpen}>Login</Button>
        }
  
        <Modal size="xl" isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <Flex>
            <Box padding="20px">
            <p style={{fontSize:"24px",fontWeight:"700",marginBottom:"10px"}}>Login To Get Started</p>
                <Login/>
                <Box marginBottom="10px"></Box>
                <Divider />
                {/* <Box marginBottom="10px"></Box> */}
            <Box padding="10px">
                <Text fontSize="14px" textAlign="center">If you Dont have acount please Signup</Text>
                <Text fontSize="14px" textAlign="center">Click here to <Link to={`/userlogin`}><span style={{color:"blue",textDecoration:"underline"}}>SignUp</span></Link></Text>
            </Box>
            </Box>
            <Box w="50%" padding="20px" >
             <Box marginTop="20px">
             <Button 
        w={'full'}
        maxW={'md'}
        variant={'outline'}
        leftIcon={<FcGoogle />}>
        <Center>
          <Text>Sign in with Google</Text>
        </Center>
      </Button>
             </Box>
             {/* <br></br> */}
             <Box marginTop="10px" marginBottom="10px">
             <Button w={'full'} colorScheme={'facebook'} leftIcon={<FaFacebook />}>
          <Center>
            <Text>Continue with Facebook</Text>
          </Center>
        </Button>
             </Box>
             <Box marginTop="10px" marginBottom="10px"></Box>
             <Divider/>
             <Box marginTop="10px" marginBottom="10px"></Box>
             <Box marginBottom="10px">
                <Text fontSize="14px" textAlign="center">If you want to login with facebook or google click the above buttons.</Text>
             </Box>
             <Divider/>
             <Box marginTop="10px">
              <Text fontSize="14px" textAlign="center">
                If you are counceler, click here to <Link to={`/adminlogin`}><span style={{color:"blue",textDecoration:"underline"}}>Login</span></Link>
              </Text>
             </Box>
            </Box>
            </Flex>
          </ModalContent>
        </Modal>
      </>
    )
}

export default SignIn