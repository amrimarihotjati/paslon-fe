import React from 'react'
import {
    Box,
    Heading,
    Image,
    Divider,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Text
} from '@chakra-ui/react';

export default function Kontak() {
  return (
    <Box bg={'indigo'} maxWidth='full' display='flex' flexDirection='column' alignItems={'center'} flexWrap={'wrap'}>
        <Box display={'flex'} gap={'20px'} flexWrap={'wrap'} my={'20px'}>
            <Heading color='white'>PEMILU</Heading>
            <Image w='50px' h={'50px'} src='https://jombang.bawaslu.go.id/wp-content/uploads/2019/04/Logo-Bawaslu-2018-Icon-PNG-HD.png' ></Image>
        </Box>
        <Divider />
        <Box background={'purple.900'} w={'full'} display={'flex'} justifyContent={'center'} flexWrap={'wrap'} p={'20px'}>
            <Breadcrumb separator={'-'} color={'white'} fontWeight={'bold'}>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/'>
                        Perolehan Suara
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/'>
                        Vote
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink href='paslon'>
                        Paslon
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink href='partai'>
                        Partai
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink href='kontak'>
                        Kontak
                    </BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </Box>
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
