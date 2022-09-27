import { Badge, Box, Button, Table, TableCaption, TableContainer, Tbody, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import SingleData from '../component/SingleData'
import { getData } from '../redux/action'


const Admin = () => {
 
 const dispatch = useDispatch()
 let data = useSelector(state=>state.user)
 
useEffect(()=>{
  dispatch(getData())
},[dispatch])
console.log(data)

  return (
    <div>
    <Navbar/>
    <div  style={{width:"70%",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",margin:"auto",marginTop:"30px",borderRadius:"10px"}}>
    <TableContainer>
  <Table variant='simple'>
    <Thead>
      <Tr>
        <Th >No.</Th>
        <Th>Name</Th>
        <Th>Email</Th>
        <Th>Country</Th>
        <Th>Status</Th>
        <Th>See Profile</Th>
      </Tr>
    </Thead>
    <Tbody>
      {
        data.length>0 && data.map((e,i)=>{
          return <Tr key={e.id}>
             <Th>{e.id}</Th>
             <Th>{e.name}</Th>
             <Th>{e.email}</Th>
             <Th>{e.country}</Th>
             <Th>{
              e.count===0?<Badge ml='1' fontSize='0.8em' colorScheme='green'>New</Badge>:<div>{
                Math.ceil(e.count/7*100)+"%"
              }</div>
             }</Th>
             <Th ><SingleData {...e} /></Th>
          </Tr>
        })
      }
    </Tbody>
    </Table>
    </TableContainer>
    <Box marginTop="20px"></Box>
    </div>
        <Footer/>
    </div>
  )
}

export default Admin