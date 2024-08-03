
import { Box, HStack, Text, Heading, Image, Button, Card, CardBody, SimpleGrid, VStack } from '@chakra-ui/react';
import { BsInstagram, BsLinkedin, BsGithub, BsGoogle, BsMailbox } from 'react-icons/bs';
import { Link } from 'react-router-dom'; // Import Link
import img from '../assets/Developer.png';
import { about } from '../assets/txts';
import PieChart from './chart';
import PieChartS from './skillchart';
import { useColorModeValue } from '@chakra-ui/react';
import theme from '../theme';


const Home = () => {
  const gradient = useColorModeValue(theme.gradients.light, theme.gradients.dark);
  const bdrcolor=useColorModeValue(theme.bordercolors.light,theme.bordercolors.dark);

  const icolor=useColorModeValue(theme.iconcolors.light,theme.iconcolors.dark);
  const handleMailTo = (email:any) => {
    window.location.href = `mailto:${email}`;
  };
  return (
    <>
    <Box padding={10}>
<VStack>
<SimpleGrid
            
            columns={{ sm: 1, md: 2, lg: 2, xl: 2 }}
            padding={'10px'}
            marginBottom={8}
            spacing={6}>

       
            <Box  marginTop={25} padding={10}>
                <HStack >
                <a href="https://www.instagram.com/roy.xaeed_anwar" target="_blank" rel="noopener noreferrer">
                <Box border={bdrcolor} borderRadius='20px' boxSize={'40px'}> <BsInstagram color={icolor} style={{  margin: 'auto', marginTop: '9px' }} /></Box>
              </a>
              <a href="https://github.com/xaeedcntr" target="_blank" rel="noopener noreferrer">
              <Box border={bdrcolor} borderRadius='20px' boxSize={'40px'}> <BsGithub color= {icolor} style={{margin:'auto', marginTop:'9px'}}/></Box>
              </a>
              <Box
          border={bdrcolor}
          borderRadius='20px'
          boxSize={'40px'}
          onClick={() => handleMailTo('royxaeedanwarofficial@gmail.com')}
          style={{ cursor: 'pointer' }}
        >
          <BsGoogle color= {icolor} style={{  margin: 'auto', marginTop: '9px' }} />
        </Box>
                    <a href="https://www.linkedin.com/in/saeed-anwar-b15a40184/" target="_blank" rel="noopener noreferrer">
                    <Box border={bdrcolor} borderRadius='20px' boxSize={'40px'}> <BsLinkedin color= {icolor} style={{margin:'auto', marginTop:'9px'}}/></Box>
                   </a>
                   <Box
          border={bdrcolor}
          borderRadius='20px'
          boxSize={'40px'}
          onClick={() => handleMailTo('saeedanwar3344bsseseca@hotmail.com')}
          style={{ cursor: 'pointer' }}
        >
          <BsMailbox color= {icolor} style={{ margin: 'auto', marginTop: '9px' }} />
        </Box>
                </HStack>
                <br></br>
                <Heading >Hi I'm Saeed Anwar</Heading>
                <br></br>
                <Text >{about}</Text>
                <br></br>
                <Button _hover={{backgroundColor:'pink', color:'white'}} variant={'outline'} bgGradient={'linear(to-r, grey, orange)'} >
            <a
              href="https://www.instagram.com/roy.xaeed_anwar"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow me
            </a>
          </Button>
            </Box>
            <Box padding={5}>
            <Image className='moveArrow'  style={{width:'80%'}} src={img} alt='Image'></Image>
            </Box>
            

        
        </SimpleGrid>

        <SimpleGrid
       
            textAlign={'center'}
            columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
            padding={'10px'}
            spacing={20}
            alignContent={'space-between'}
            templateColumns={{
              base: '1fr',
              lg: '1fr 1fr 1fr'
            }}
            >
       <Card border={bdrcolor} bgGradient={gradient} shadow={'lg'}  borderRadius={20}  id='grad'>
        <CardBody>
          <br></br>
          
          <Heading >Projects</Heading>
          <Heading>10+</Heading>
          <Text>I have Developed Different Projects in different technologies including web and android</Text>
          
          <Button color={icolor} variant={'outline'}>
                <Link to="/projects">See All Projects</Link>
              </Button>
        </CardBody>
       </Card >
       <Card border={bdrcolor} bgGradient={gradient}shadow={'lg'}  borderRadius={20}  id='grad'>
        <CardBody>
          <PieChart/>
        </CardBody>
       </Card>
       <Card border={bdrcolor} bgGradient={gradient}shadow={'lg'}  borderRadius={20}  id='grad'>
        <CardBody>
          
          <PieChartS/>
          <Button color={icolor} variant={'outline'}>
                <Link to="/skills">See All Skills</Link>
              </Button>
        </CardBody>
       </Card>
           

        
        </SimpleGrid>
</VStack>
    
    </Box>
    </>
  )
}

export default Home