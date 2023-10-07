
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import {
    Box,
    Heading,
    Image,
    Divider,
    FormControl,
    FormLabel,
    Input,
    Button,
    Text
} from '@chakra-ui/react';

export default function SignUp() {
  return (
    <Box bg={'indigo'} maxWidth='full' display='flex' flexDirection='column' alignItems={'center'} flexWrap={'wrap'}>
        {/* Import Komponen Header */}
        <Header/>
        {/* Import Komponen Header */}
        <Divider />
        {/* Import Komponen Navbar */}
        <Navbar/>
        {/* Import Komponen Navbar */}
        <Divider/>
        <Box display={'flex'} p={'50px'} flexWrap={'wrap'} background='purple.800' w={'full'} justifyContent={'center'} gap={'30px'}>
            <Box>
                <Image src='https://i.pinimg.com/originals/90/82/1b/90821be93849253197c9a5b7577013de.png' w={'300px'}></Image>
            </Box>
        </Box>
        <Divider/>
        <Box display={'flex'} gap={'50px'} my={'50px'} flexWrap={'wrap'}>
            <Box>
                <Heading color='white' marginBottom={'30px'}>SignUp</Heading>
                <FormControl marginBottom={'10px'}>
                    <FormLabel color={'white'}>Username</FormLabel>
                    <Input placeholder='Nama' background={'white'}/>
                </FormControl>
                <FormControl marginBottom={'10px'}>
                    <FormLabel color={'white'}>Email</FormLabel>
                    <Input placeholder='Email' type='email' background={'white'}/>
                </FormControl>
                <FormControl marginBottom={'30px'}>
                    <FormLabel color={'white'}>Password</FormLabel>
                    <Input placeholder='Password' type='password' background={'white'}/>
                </FormControl>
                <Box justifyContent={'end'} display={'flex'}  marginBottom={'30px'}>
                    <Button margin={'10px'} colorScheme='green' >Sign Up</Button>
                </Box>
            </Box>
        </Box>
        <Divider />
        <Box display={'flex'} gap={'50px'} my={'50px'}>
            <Text color={'white'}>
                Powered by LHT@2023
            </Text>
        </Box>
    </Box>
  )
}
