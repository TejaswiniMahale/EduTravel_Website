import React, { useEffect, useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Checkbox,
    Divider,
    Box,
    Stack,
  } from '@chakra-ui/react'
  import {Text} from "@chakra-ui/react"
import { useDispatch } from 'react-redux'
import { editUser, getData } from '../redux/action'

const SingleData = (prop) => {
  const dispatch = useDispatch()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [visa,visaChecked] = useState(false)
    const [letter,letterChecked] = useState(false)
    const [visaReturn,visaRetChecked] = useState(false)
    const [ticket,ticketChecked] = useState(false)
    const [payment,paymentChecked] = useState(false)
    const [final,finalChecked] = useState(false)
    // console.log(prop)
    let [number1,setNumber]=useState(0)
    const [data,setData]=useState([])
    
  
    const handleChangeVisa=(e)=>{
       if(visa===false){
        visaChecked(true)
        setData([...data,e.target.value])
       setNumber(number1+1)
       
       }
    }
    const handleChangeLetter=(e)=>{
        if(letter===false){
          setData([...data,e.target.value])
          letterChecked(true)
          setNumber(number1+1)
        }
    }
    const handleChangeVisaReturn=(e)=>{
        if(visaReturn===false){
          setData([...data,e.target.value])
          visaRetChecked(true)
          setNumber(number1+1)
        }
    }
    const handleChangePayment=(e)=>{
        if(payment===false){
          paymentChecked(true)
          setData([...data,e.target.value])
          setNumber(number1+1)
        }
    }
    const handleChangeTicket=(e)=>{
        if(ticket===false){
          ticketChecked(true)
          setData([...data,e.target.value])
          setNumber(number1+1)
        }
    }
    const handleChangeFinal=(e)=>{
        if(final===false){
          finalChecked(true)
          setData([...data,e.target.value])
          setNumber(number1+1)
          
        }
    }
  //   const handleSubmit=(e)=>{
  //     e.preventDefault()
  //    if(title && price){
  //      const payload = {
  //        title:title,
  //        price:Number(price)
  //      }
  //      dispatch(updateProduct(id,payload))
  //      .then(()=>{
  //        dispatch(getData())
  //      })
  //      .then(()=>{
  //        navigate(comingFrom,{replace:true})
  //      })
  //    }
  //    setPrice("")
  //    setTitle("")
  //  }
  
 

console.log(data)
  const saveData=()=>{
    if(data && number1){
      const payload={
        doc:data,
        count:number1,
        status:true
      }
      dispatch(editUser(prop.id,payload))
      .then(()=>onClose())
    }
  }
    
  return (
    <>
            <Button  onClick={onOpen}>View</Button>
            <Modal size="xl" closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
        <ModalContent>
          <ModalHeader>Documents</ModalHeader>
          <ModalCloseButton/>
          <ModalBody pb={6}>
            <Text>Name : {prop.name}</Text>
            <Text>Email : {prop.email}</Text>
            <Text>Mobile : {prop.mobile}</Text>
            <Text>Country : {prop.country}</Text>
            <Text>Comment : {prop.desc}</Text>
            <Box marginTop="10px" ></Box>
            <Divider/>
            <Box marginTop="10px" ></Box>
            <Text fontSize="18px" marginBottom="10px" fontWeight="500">Check The Documents</Text>
           <Stack spacing={4} direction='row'>
           <Checkbox size='md' value="Send for offer letter" isChecked={letter} onChange={handleChangeLetter} colorScheme='green'>Send for offer letter</Checkbox>
            <Checkbox size='md' value="Payement Recived" isChecked={payment} onChange={handleChangePayment} colorScheme='green'>Payement Recived</Checkbox>
            <Checkbox size='md' value="Visa Application" isChecked={visa} onChange={ handleChangeVisa}  colorScheme='green'>Visa Application</Checkbox></Stack>
            <Stack spacing={4} direction='row'>
            <Checkbox size='md' value="Visa Return" isChecked={visaReturn} onChange={handleChangeVisaReturn} colorScheme='green'>Visa Return</Checkbox>
            <Checkbox size='md' value="Ticketing" isChecked={ticket} onChange={handleChangeTicket} colorScheme='green'>Ticketing</Checkbox>
            <Checkbox size='md' value="Final" isChecked={final} onChange={handleChangeFinal} colorScheme='green'>Final</Checkbox>
            </Stack>
           
          </ModalBody>
          <ModalFooter>
            <Button onClick={saveData}  colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default SingleData