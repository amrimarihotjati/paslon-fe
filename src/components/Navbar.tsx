
import Login from './Login'
import {
    Box,
    Link,

} from '@chakra-ui/react'
import UsersButton from './UsersButton'
import { useLoginContext } from '../hooks/LoginContext'

export default function Navbar() {
    const { isLogin } = useLoginContext();

  return (
    <Box background={'purple.900'} w={'full'} display={'flex'} justifyContent={'center'} flexWrap={'wrap'}>
        <Box  color={'white'} fontWeight={'bold'} display={'flex'} flexWrap={'wrap'} gap={'20px'} my={'10px'} justifyContent={'center'}>
            <Box>
                <Link href='/' >Perolehan Suara</Link>
            </Box>
            <Box>
                <Link href='paslon' >Paslon</Link>
            </Box>
            <Box>
                <Link href='partai' >Partai</Link>
            </Box>
            <Box>
                <Link href='kontak' >Kontak</Link>
            </Box>
            {!isLogin &&(
                <Box>
                    <Login/>
                </Box>
            )}
            {isLogin && (
                <Box>
                    <UsersButton/>
                </Box>
            )}
        </Box>
    </Box>
  )
}
