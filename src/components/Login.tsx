import React from 'react'
import {
    ModalOverlay,
    Button,
    Modal,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    Text,
    ModalFooter,
    useDisclosure,
    FormControl,
    FormLabel,
    Input
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';



export default function Login() {

    const OverlayOne = () => (
        <ModalOverlay
          backdropFilter='blur(10px)'
        />
    )
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)

    const navigate = useNavigate();

  return (
    <>
      <Button
        colorScheme='green'
        size={'sm'}
        onClick={() => {
          setOverlay(<OverlayOne />)
          onOpen()
        }}
      >
        Login
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent bgColor={'indigo'} color={'white'}>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody gap={'10px'} display={'flex'} flexDirection={'column'}>
            <FormControl>
                <FormLabel>Email</FormLabel>
                <Input background={'white'} placeholder='Your Email' type='email' color={'black'} ></Input>
            </FormControl>
            <FormControl>
                <FormLabel>Password</FormLabel>
                <Input background={'white'} placeholder='Your Passowrd' type='password' color={'black'} ></Input>
            </FormControl>
            <Button colorScheme='green' onClick={onClose}>Login</Button>
          </ModalBody>
          <ModalFooter gap={'10px'}>
            <Text>Belum punya akun? silahkan</Text>
            <Button  size={'sm'} onClick={() => {
                navigate('/signup'); // Navigasi ke halaman /signup
              }} colorScheme='orange'>Daftar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
