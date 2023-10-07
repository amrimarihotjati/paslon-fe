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
    Textarea,
    Button,
    Card,
    Stack,
    CardBody,
    CardFooter,
    Text,
    Checkbox,
    Tag
} from '@chakra-ui/react';

interface Candidate {
    id: number;
    name: string;
    visi: string;
    party: Party[]; // Ini adalah array dari objek partai
}

interface Party {
    id: number;
    name: string;
}


interface Partie {
    id: number;
    name: string;
}

export default function Paslon() {
    const [candidates, setCandidates] = useState<Candidate[]>([]);
    const [parties, setParties] = useState<Partie[]>();
    const [name, setName] = useState('');
    const [visi, setVisi] = useState('');
    const [selectedParties, setSelectedParties] = useState<number[]>([]);

    useEffect(() => {
        // Fetch data dari API menggunakan Axios
        axios
          .get('http://localhost:5000/api/v1/paslons')
          .then((response) => {
            // Periksa status respons
            if (response.status !== 200) {
              throw new Error('Network response was not ok');
            }
            // Set data ke dalam state candidates
            setCandidates(response.data.data);
          })
          .catch((error) => console.error('Error Fetching Data', error));
    }, [candidates, parties, name, visi, selectedParties]);

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
    }, [candidates, parties, name, visi, selectedParties]);

    const handleCheckboxChange = (partieId: number) => {
        if (selectedParties.includes(partieId)) {
            // Jika partieId sudah ada dalam selectedParties, hapus dari daftar
            setSelectedParties(selectedParties.filter((id) => id !== partieId));
        } else {
            // Jika partieId belum ada dalam selectedParties, tambahkan ke daftar
            setSelectedParties([...selectedParties, partieId]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        try {
            // Mengirim data dengan metode POST
            const response = await axios.post('http://localhost:5000/api/v1/paslon', {
                name: name,
                visi: visi,
                party: selectedParties
            });
    
            // Menampilkan respons dari server jika diperlukan
            console.log('Response from server:', response.data);
    
            // Bersihkan formulir setelah berhasil
            setName('');
            setVisi('');
            setSelectedParties([]);
    
            // Menerapkan logika setelah berhasil, seperti menampilkan pesan sukses atau mengarahkan pengguna ke halaman lain
        } catch (error) {
            console.error('Error posting data:', error);
            // Menampilkan pesan kesalahan atau logika penanganan kesalahan lainnya
        }
    };

    const handleDelete = async (candidateId: number) => {
        try {
            // Mengirim permintaan DELETE ke server untuk menghapus kandidat
            await axios.delete(`http://localhost:5000/api/v1/paslon/${candidateId}`);

            // Menghapus kandidat dari daftar candidates setelah berhasil dihapus
            setCandidates(candidates.filter((candidate) => candidate.id !== candidateId));

            // Menampilkan pesan sukses atau tindakan lain yang sesuai
        } catch (error) {
            console.error('Error deleting data:', error);
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
            {candidates.map((candidate) =>(
                <Box display={'flex'} background='purple.800' w='full' justifyContent={'center'} p={'20px'}>
                    <Card direction={{base: 'column', sm: 'row'}} overflow='hidden' variant='outline' bgGradient='linear(to-l, #2442b1, #141547)'>
                        <Image objectFit={'cover'} maxW={{ base: '100%', sm: '200px' }} src='https://www.pinterpolitik.com/wp-content/uploads/2023/02/megawati-foto-artikel.jpg'>
                        </Image>
                        <Stack>
                            <CardBody color={'white'}>
                                <Heading size={'md'} >{candidate.name}</Heading>
                                <Text py='2'>{candidate.visi}</Text>
                                <Box display={'flex'} flexWrap={'wrap'}>
                                    {candidate.party.map((party) =>(
                                        <Box display={'flex'} flexWrap={'wrap'} key={party.id} flexDirection={'row'}>
                                            <Tag variant='solid' colorScheme='purple' m={'5px'}>{party.name}</Tag>
                                        </Box>
                                    ))}
                                </Box>
                            </CardBody>
                            <CardFooter gap={10}>
                                <Button variant='solid' colorScheme='orange'>Edit</Button>
                                <Button variant='solid' colorScheme='red' onClick={() => handleDelete(candidate.id)}>Delete</Button>
                            </CardFooter>
                        </Stack>
                    </Card>
                </Box>
            ))}
            <Divider/>
            <Box display={'flex'} gap={'50px'} my={'50px'}>
                <Box>
                    <Heading color='white' marginBottom={'30px'}>TAMBAH PASLON</Heading>
                    <FormControl marginBottom={'30px'}>
                        <FormLabel color={'white'}>Nama Paslon</FormLabel>
                        <Input placeholder='Masukkan Nama Paslon' background={'white'} value={name} onChange={(e) => setName(e.target.value)}/>
                    </FormControl>
                    <FormControl marginBottom={'30px'}>
                        <FormLabel color={'white'}>Visi Misi</FormLabel>
                        <Textarea placeholder='Tuliskan Visi Misi' background={'white'} value={visi} onChange={(e) => setVisi(e.target.value)}>
                        </Textarea>
                    </FormControl>
                    <FormControl marginBottom={'30px'}>
                        <FormLabel color={'white'}>Partai Pengusung</FormLabel>
                        <Box display={'flex'} gap={'10px'}>
                            {parties?.map((partie)=> (
                                <Checkbox color={'white'}   key={partie.id} onChange={() => handleCheckboxChange(partie.id)}
                                isChecked={selectedParties.includes(partie.id)}>{partie.name}</Checkbox>
                            ))}
                        </Box>
                    </FormControl>
                    <Box justifyContent={'end'} display={'flex'} >
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
