
import {
    Box,
    Heading,
    Image
} from '@chakra-ui/react'

export default function Header() {
  return (
    <Box display={'flex'} gap={'20px'} flexWrap={'wrap'} my={'20px'}>
        <Heading color='white'>PEMILU</Heading>
        <Image w='50px' h={'50px'} src='https://jombang.bawaslu.go.id/wp-content/uploads/2019/04/Logo-Bawaslu-2018-Icon-PNG-HD.png'></Image>
    </Box>
  )
}
