
import { Box, Card, CardBody, Heading, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react"
import { Android_Studio, Cplus, Express, GitHub, Java, JavaScript, MongoDB, Node, React, SQL, TypeScript, skillstxt, xml } from "../assets/txts"
import {SiTypescript, SiCplusplus, SiExpress} from 'react-icons/si'
import { DiReact, DiMongodb,DiJavascript} from 'react-icons/di'
import {IoLogoNodejs} from 'react-icons/io'
import {AiOutlineAndroid} from 'react-icons/ai'
import theme from "../theme"
import { BsFiletypeSql, BsFiletypeXml } from "react-icons/bs"
import { FaGithubSquare, FaJava } from "react-icons/fa"
const Skills = () => {
  const gradient=useColorModeValue(theme.gradients.light, theme.gradients.dark);
 
  return (
    <Box  padding={10}>
        
            <Box  marginTop={25} >
                <br></br>
                <Heading textAlign='center' >My Skills</Heading>
                <br></br>
                <Text textAlign='center' >{skillstxt}</Text>
                <br></br>
            </Box>
            <SimpleGrid
            textAlign={'center'}
            columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
            padding={'10px'}
            spacing={6}>
                <Card borderRadius={'30px'} boxShadow={'lg'} bgGradient={gradient}>
                  <CardBody >
                    <IoLogoNodejs size={70} style={{color:'#1c8710',margin:'auto'}}/>
                    <Heading fontSize={'15px'} >Node Js</Heading>
                  <br></br>
                  <Text   textAlign={'left'}>{Node}</Text>
                  </CardBody>
                </Card>
                <Card borderRadius={'30px'} bgGradient={gradient}>
                  <CardBody >
                  <DiReact size={50} style={{color:'blue' ,margin:'auto'}}/>
                  <br></br>
                  <Heading fontSize={'15px'} >React</Heading>
                  <br></br>
                  <Text  textAlign={'left'}>{React}</Text>
                  </CardBody>
                </Card>
                <Card borderRadius={'30px'} bgGradient={gradient}>
                <CardBody >
                <AiOutlineAndroid size={50} style={{color:'#2ded18' ,margin:'auto'}}/>
                <br></br>
                <Heading fontSize={'15px'} >Android</Heading>
                  <br></br>
                  <Text  textAlign={'left'}>{Android_Studio}</Text>
                  </CardBody>
                </Card>
            
              <Card borderRadius={'30px'} bgGradient={gradient}>
              <CardBody>
              <BsFiletypeSql size={50} style={{color:'#db4914' ,margin:'auto'}}/>
              <br></br>
              <Heading fontSize={'15px'} >SQL Database</Heading>
                  <br></br>
                  <Text  textAlign={'left'}>{SQL}</Text>
                  </CardBody>
                </Card>
                <Card borderRadius={'30px'} bgGradient={gradient}>
                <CardBody>
                <DiMongodb size={50} style={{color:'green' ,margin:'auto'}}/>
                <br></br>
                <Heading fontSize={'15px'} >Mongo DB</Heading>
                  <br></br>
                  <Text  textAlign={'left'}>{MongoDB}</Text>
                  </CardBody>
                </Card>
                <Card borderRadius={'30px'} bgGradient={gradient}>
                <CardBody>
                <FaGithubSquare size={50} style={{color:'#4d4644' ,margin:'auto'}}/>
                <br></br>
                <Heading fontSize={'15px'} >GitHub</Heading>
                  <br></br>
                  <Text  textAlign={'left'}>{GitHub}</Text>
                  </CardBody>
                </Card>


                <Card borderRadius={'30px'} bgGradient={gradient}>
              <CardBody>
              <FaJava size={50} style={{color:'#3f54a1' ,margin:'auto'}}/>
              <br></br>
              <Heading fontSize={'15px'} >Java</Heading>
                  <br></br>
                  <Text  textAlign={'left'}>{Java}</Text>
                  </CardBody>
                </Card>
                <Card borderRadius={'30px'} bgGradient={gradient}>
                <CardBody>
                <DiJavascript size={50} style={{color:'gold' ,margin:'auto'}}/>
                <br></br>
                <Heading fontSize={'15px'} >Java Script</Heading>
                  <br></br>
                  <Text  textAlign={'left'}>{JavaScript}</Text>
                  </CardBody>
                </Card>
                <Card borderRadius={'30px'} bgGradient={gradient}>
                <CardBody>
                <SiTypescript size={50} style={{color:'blue' ,margin:'auto'}}/>
                <br></br>
                <Heading fontSize={'15px'} >TypeScript</Heading>
                  <br></br>
                  <Text  textAlign={'left'}>{TypeScript}</Text>
                  </CardBody>
                </Card>

                <Card borderRadius={'30px'} bgGradient={gradient}>
              <CardBody>
              <BsFiletypeXml size={50} style={{color:'orange' ,margin:'auto'}}/>
              <br></br>
              <Heading fontSize={'15px'} >XML</Heading>
                  <br></br>
                  <Text  textAlign={'left'}>{xml}</Text>
                  </CardBody>
                </Card>
                <Card borderRadius={'30px'} bgGradient={gradient}>
                <CardBody>
                <SiCplusplus size={50} style={{ color:'red',margin:'auto'}}/>
                <br></br>
                <Heading fontSize={'15px'} >C++</Heading>
                  <br></br>
                  <Text  textAlign={'left'}>{Cplus}</Text>
                  </CardBody>
                </Card>
                <Card borderRadius={'30px'} bgGradient={gradient}>
                <CardBody>
                <SiExpress size={50} style={{color:'#9e53db' ,margin:'auto'}}/>
                <br></br>
                <Heading fontSize={'15px'} >Express</Heading>
                  <br></br>
                  
                  <Text  textAlign={'left'}>{Express}</Text>
                  </CardBody>
                </Card>
            </SimpleGrid> 
    </Box>
  )
}

export default Skills