
import{
    Drawer,
    Button,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    Stack,
    Box,
    FormLabel,
    Input,
    Image,
    useDisclosure,
    
} from '@chakra-ui/react'

import {SettingsIcon } from '@chakra-ui/icons'



export default function UsersButton() {
  
    const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
        <Button leftIcon={<SettingsIcon />} colorScheme='teal' onClick={onOpen} size={'sm'}>
        Profile
        </Button>
        <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        >
        <DrawerOverlay backdropFilter='blur(5px)'/>
            <DrawerContent background={'indigo'} color={'white'}>
                <DrawerCloseButton />
                <DrawerHeader borderBottomWidth='1px'>
                Profile
                </DrawerHeader>

                <DrawerBody>
                <Stack spacing='24px'>
                    <Box display={'flex'} justifyContent={'center'} mt={'10px'}>
                        <Image
                        borderColor={'white'}
                        border={'4px'}
                        borderRadius='full'
                        boxSize='80px'
                        src='https://bit.ly/dan-abramov'
                        alt='Dan Abramov'/>
                    </Box>

                    <Box>
                        <FormLabel htmlFor='username'>Name</FormLabel>
                        <Input
                            value={'Marihots'}
                            color={'black'}
                            background={'white'}
                            id='username'
                            placeholder='Please enter user name'
                        />
                    </Box>

                    <Box>
                        <FormLabel htmlFor='email'>Email</FormLabel>
                        <Input
                            value={'amrimarihotjati@gmail.com'}
                            color={'black'}
                            background={'white'}
                            id='email'
                            placeholder='Please enter your email'
                        />
                    </Box>

                    <Box>
                        <FormLabel htmlFor='password'>Pasword</FormLabel>
                        <Input
                            value={'******'}
                            color={'black'}
                            background={'white'}
                            id='password'
                            placeholder='Please enter your password'
                        />
                    </Box>

                </Stack>
                </DrawerBody>

                <DrawerFooter borderTopWidth='1px'>
                <Button variant='outline' colorScheme='white' mr={3} onClick={onClose}>
                    Cancel
                </Button>
                <Button colorScheme='orange'>Submit</Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    </>
  )
}

    // <Menu>
    //     <MenuButton as={Button} colorScheme='green' size={'sm'}>
    //     <SettingsIcon mb={'2px'}/> Profile
    //     </MenuButton>
    //     <MenuList background={'indigo'}>
    //         <MenuGroup title='Profile'background={'indigo'}>
    //             <MenuItem background={'indigo'}>My Account</MenuItem>
    //             <MenuItem background={'indigo'}>Log Out </MenuItem>
    //         </MenuGroup>
    //     </MenuList>
    // </Menu>