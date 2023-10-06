import React, { useRef,useState, useEffect } from 'react';
import axios from 'axios';

import {
    Box,
    Heading,
    Grid,
    GridItem,
    Card,
    CardBody,
    Image,
    Text,
    CardFooter,
    FormControl,
    FormLabel,
    Input,
    Button,
    RadioGroup,
    Stack,
    Radio,
    Divider,
    Tag,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    SimpleGrid,
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


interface Voter {
    id: number;
    voter_name: string;
    paslon: {
        id: number;
        name: string;
        visi: string;
    }
}



export default function Home() {
    const [candidates, setCandidates] = useState<Candidate[]>([]);
    const [votes, setVotes] = useState<Voter[]>([]);
    const paslonBoxRef = useRef<HTMLDivElement | null>(null);
    const voteSectionRef = useRef<HTMLDivElement | null>(null);

    // Hitung perolehan suara untuk setiap paslon
    const voteCounts: { [key: string]: number } = {};

    votes.forEach((vote) => {
    const paslonName = vote.paslon.name;
    voteCounts[paslonName] = (voteCounts[paslonName] || 0) + 1;
    });

    //Menjalankan Vote
    const [voterName, setVoterName] = useState<string>('');
    const [selectedPaslon, setSelectedPaslon] = useState<string | undefined>(undefined);

    const handleVote = () => {
        if (!voterName || !selectedPaslon) {
          // Pastikan nama dan paslon telah diisi sebelum melakukan vote
          alert('Nama dan Paslon harus diisi.');
          return;
        }
      
        // Temukan ID paslon berdasarkan nama yang dipilih
        const selectedPaslonId = candidates.find((candidate) => candidate.name === selectedPaslon)?.id;
      
        if (selectedPaslonId === undefined) {
          alert('Paslon tidak valid.');
          return;
        }
      
        // Lakukan permintaan POST untuk melakukan vote dengan format yang benar
        axios
          .post('http://localhost:5000/api/v1/vote', {
            paslon_id: selectedPaslonId,
            voter_name: voterName,
          })
          .then((response) => {
            if (response.status === 201) {
              // Vote berhasil, tambahkan vote ke state votes
              const newVote = {
                id: response.data.data.id,
                voter_name: voterName,
                paslon: {
                  id: selectedPaslonId,
                  name: selectedPaslon,
                  visi: '',
                },
              };
              setVotes([...votes, newVote]);
      
              // Reset nama pemilih dan paslon yang dipilih
              setVoterName('');
              setSelectedPaslon(undefined);
            } else {
              console.error('Error Voting', response); // Cetak respons ke konsol
            }
          })
          .catch((error) => {
            console.error('Error Voting', error);
        });
    };
      
      
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
    }, [candidates,votes, voteCounts, voterName, selectedPaslon]);

    
    useEffect(() => {
        // Fetch data dari API menggunakan Axios
        axios
          .get('http://localhost:5000/api/v1/votes')
          .then((response) => {
            // Periksa status respons
            if (response.status !== 200) {
              throw new Error('Network response was not ok');
            }
            // Set data ke dalam state votes
            setVotes(response.data.data);
          })
          .catch((error) => console.error('Error Fetching Data', error));
    }, [candidates,votes, voteCounts, voterName, selectedPaslon]);

    const scrollToPaslonBox = () => {
        if (paslonBoxRef.current) {
          paslonBoxRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Function to handle scrolling to the vote section
    const scrollToVoteSection = () => {
        if (voteSectionRef.current) {
        voteSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

  return (
    <Box bg={'indigo'} maxWidth='full' display='flex' flexDirection='column' alignItems={'center'} flexWrap={'wrap'}>
        <Box display={'flex'} gap={'20px'} flexWrap={'wrap'} my={'20px'}>
            <Heading color='white'>PEMILU</Heading>
            <Image w='50px' h={'50px'} src='https://jombang.bawaslu.go.id/wp-content/uploads/2019/04/Logo-Bawaslu-2018-Icon-PNG-HD.png'></Image>
        </Box>
        <Divider />
        <Box background={'purple.900'} w={'full'} display={'flex'} justifyContent={'center'} flexWrap={'wrap'} p={'20px'}>
            <Breadcrumb separator={'-'} color={'white'} fontWeight={'bold'}>
                <BreadcrumbItem>
                    <BreadcrumbLink onClick={scrollToPaslonBox}>
                        Perolehan Suara
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink onClick={scrollToVoteSection}>
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
        <Box className='paslon-box' ref={paslonBoxRef}  backgroundImage={'https://media.npr.org/assets/img/2020/10/21/20-10-22-throughlinevoting_01_wide-90c68824497a58b2aab0188fdd9027e5cf33bfa6-s1300-c85.webp'} backgroundSize={'cover'} w={'full'} h={'full'} alignItems={'center'} flexDirection={'column'} display={'flex'}  flexWrap={'wrap'}>
            <Box p='20px' display={'flex'} flexDirection={'column'} alignItems={'center'}>
                <Grid templateColumns={'repeat(4, 1fr)'} gap={6} alignItems={'center'}>
                    {candidates.map((candidate) => (
                        <GridItem key={candidate.id} w='100%' h='100%' colSpan={{base:3, sm: 2, md: 2, lg:1}}>
                            <Card maxWidth='sm' borderRadius={'10px'} bgGradient='linear(to-l, #2442b1, #141547)'>
                                <CardBody>
                                    <Image src='https://www.pinterpolitik.com/wp-content/uploads/2023/02/megawati-foto-artikel.jpg' borderRadius={'10px'} objectFit={'cover'} height={'200px'}/>
                                    <Heading className='namaPaslon' textAlign={'center'} margin={'10px'} color={'white'}>{candidate.name}</Heading>
                                    <Text color={'white'}>{candidate.visi}</Text>
                                    <Box>
                                        <Heading as='h2' fontSize={'md'} color={'white'} my={'10px'}>
                                            Partai Pengusung
                                        </Heading>
                                        <Box display={'flex'} flexWrap={'wrap'}>
                                            {candidate.party.map((party) =>(
                                                <Box display={'flex'} flexWrap={'wrap'} key={party.id} flexDirection={'row'}>
                                                    <Tag variant='solid' colorScheme='orange' m={'5px'}>{party.name}</Tag>
                                                </Box>
                                            ))}
                                        </Box>
                                    </Box>
                                </CardBody>
                                <CardFooter>
                                    <Box>
                                        <Text color={'green.200'}>Perolehan Suara</Text>
                                        <Heading className='namaPaslon' textAlign={'center'} color={'green.300'} fontSize={'7xl'}> {voteCounts[candidate.name] || 0}</Heading>
                                    </Box>
                                </CardFooter>
                            </Card>
                        </GridItem>
                    ))}
                </Grid>
            </Box>
        </Box>
        <Divider />
        {/* Voter */}
        <Box my={'10px'}>
            <Heading color={'white'}>Voter</Heading>
        </Box>
        <Box ref={voteSectionRef} id="vote-section" display={'flex'} flexDirection={'column'} my={'25px'} alignItems={'center'} flexWrap={'wrap'} w={'90%'} bg={'purple.900'} borderRadius={'5px'} color={'white'} padding={'10px'}>
                <SimpleGrid columns={{base: 1, sm: 1, md: 2, lg:4}} gap={'10px'}>
                    {votes.map((vote)=>(
                        <Box display={'flex'} gap={'10px'} my={'5px'} key={vote.id} >
                                <Text fontWeight={'bold'}>{vote.voter_name}</Text>
                                Memilih
                                <Tag variant={'solid'} colorScheme='green' >{vote.paslon.name}</Tag>
                        </Box>
                    ))}
                </SimpleGrid>
        </Box>
        {/* VoteSuara */}
        <Box ref={voteSectionRef} id="vote-section" display={'flex'} flexDirection={'column'} my={'25px'} alignItems={'center'} flexWrap={'wrap'}>
            <Heading color={'white'}>Vote Suara</Heading>
            <Box display={'flex'} flexDirection={'row'} my={'20px'} justifyContent={'center'} justifyItems={'center'} gap={'50px'}  flexWrap={'wrap'}>
                <Box w={'275px'}>
                    <Image src='https://harmonyvotes.org.au/wp-content/uploads/2022/02/Home.png' />
                </Box>
                <Box>
                    <FormControl>
                        <FormLabel color={'white'} my='10px'>Masukan Nama</FormLabel>
                        <Input required placeholder='Masukkan Nama Anda' background={'white'} my='10px' id='nama-voter' value={voterName} onChange={(e) => setVoterName(e.target.value)}></Input>
                        <Text color={'white'} my='10px'>
                            Pilih Paslon Sesuai Dengan Kehendak Hati Anda!
                        </Text>
                        <RadioGroup value={selectedPaslon} onChange={(value) => setSelectedPaslon(value)}>
                            <Stack color={'white'} direction={'row'}>
                                {candidates.map((candidate)=>(
                                    <Radio value={candidate.name} key={candidate.id}>{candidate.name}</Radio>
                                ))}
                            </Stack>
                        </RadioGroup>
                        <Box my={'20px'} display={'flex'} justifyContent={'end'}>
                            <Button width={'40%'} onClick={handleVote}>Vote</Button>
                        </Box>
                    </FormControl>
                </Box>
            </Box>
        </Box>
        {/* Page Lain */}
        <Divider />
        <Box display={'flex'} gap={'50px'} my={'50px'}>
            <Text color={'white'}>
                Powered by LHT@2023
            </Text>
        </Box>
    </Box>
  )
}
