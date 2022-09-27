import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';

export default function AdminLogin() {
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')
  const navigate=useNavigate()
  const toast = useToast()
  const loginCheck=()=>{
          if(username=="admin@gmail.com" && password=="admin"){
            toast({
              title: 'Login Succefull',
              description: "You login succefully to your admin account.",
              status: 'success',
              duration: 9000,
              isClosable: true,
            })
            navigate("/admin")
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
    <>
      <Navbar/>
      <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to counseler</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
           account to enjoy your <Link color={'blue.400'}>job</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={username} onChange={(e)=>setusername(e.target.value)}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
                bg={'rgb(0,112,117)'}
                color={'white'}
                _hover={{
                  bg: 'RGB(101 158 159)',
                }} onClick={loginCheck}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    <Footer/>
    </>
  );
}