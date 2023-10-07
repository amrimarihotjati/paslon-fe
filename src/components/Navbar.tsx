import React from 'react'
import Login from './Login'
import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink
} from '@chakra-ui/react'
import UsersButton from './UsersButton'

export default function Navbar() {
  return (
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
            <BreadcrumbItem>
                <Login/>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <UsersButton/>
            </BreadcrumbItem>
        </Breadcrumb>
    </Box>
  )
}
