
import {
    Box,
    Heading,
    Divider,
    Text
} from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

export default function Kontak() {
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
        <Box display={'flex'} flexWrap={'wrap'} flexDirection='column' backgroundImage={'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_1280/v1556692172/f2yebzkr8dhrdn5bpvjr.jpg'} w={'full'} height={'800px'} justifyContent={'end'} p={'50px'} backgroundSize={'cover'}>
            <Box display={'flex'} flexDirection={'column'} gap={'10px'}>
                <Heading color={'yellow.400'}>Mau Menang? Hubungi Kami</Heading>
                <Text color={'white'}>perdana.menteri.indonesia@rezim.id</Text>
            </Box>
        </Box>
        <Divider/>
        <Divider />
        <Box display={'flex'} gap={'50px'} my={'50px'}>
            <Text color={'white'}>
                Powered by LHT@2023
            </Text>
        </Box>
    </Box>
  )
}
