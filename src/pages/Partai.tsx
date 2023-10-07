import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
    ListItem,
    UnorderedList,
    Text
} from '@chakra-ui/react';

interface Partie {
    id: number;
    name: string;
}

export default function Partai() {
    const [parties, setParties] = useState<Partie[]>();
    const [partiename, setPartiename] = useState('')

    useEffect(() => {
        // Fetch data dari API menggunakan Axios
        axios
          .get('http://localhost:5000/api/v1/parties')
          .then((response) => {
            // Periksa status respons
            if (response.status !== 200) {
              throw new Error('Network response was not ok');
            }
            // Set data ke dalam state candidates
            setParties(response.data.data);
          })
          .catch((error) => console.error('Error Fetching Data', error));
    }, [parties]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        try {
            // Mengirim data dengan metode POST
            const response = await axios.post('http://localhost:5000/api/v1/party', {
                name: partiename,
            });
    
            // Menampilkan respons dari server jika diperlukan
            console.log('Response from server:', response.data);
    
            // Bersihkan formulir setelah berhasil
            setPartiename('');
    
            // Menerapkan logika setelah berhasil, seperti menampilkan pesan sukses atau mengarahkan pengguna ke halaman lain
        } catch (error) {
            console.error('Error posting data:', error);
            // Menampilkan pesan kesalahan atau logika penanganan kesalahan lainnya
        }
    };

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
                <Image src='https://traingolkar.org/wp-content/uploads/2023/05/01.-Grafis-Hero-Train-Golkar-A.png' w={'250px'}></Image>
            </Box>
            <Box display={'flex'} flexDirection={'column'} gap={'10px'}>
                <Heading color={'yellow.400'}>Partai Terdaftar</Heading>
                <UnorderedList color={'white'} fontSize={'2xl'}>
                    {parties?.map((partie) => (
                        <ListItem>{partie.name}</ListItem>
                    ))}
                </UnorderedList>
            </Box>
        </Box>
        <Divider/>
        <Box display={'flex'} gap={'50px'} my={'50px'} flexWrap={'wrap'}>
            <Box>
                <Heading color='white' marginBottom={'30px'}>TAMBAH PARTAI</Heading>
                <FormControl marginBottom={'30px'}>
                    <FormLabel color={'white'}>Nama Partai</FormLabel>
                    <Input placeholder='Masukkan Nama Partai' background={'white'} value={partiename} onChange={(e) => setPartiename(e.target.value)}/>
                </FormControl>
                <Box justifyContent={'end'} display={'flex'}  marginBottom={'30px'}>
                    <Button margin={'10px'} onClick={handleSubmit}>Tambah</Button>
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
