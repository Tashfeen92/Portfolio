import {
  Box,
  Button,
  Card,
  CardBody,
  HStack,
  Heading,
  SimpleGrid,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import theme from "../theme";
import { projects } from "../assets/txts";
import {
  SiChakraui,
  SiMongodb,
  SiRedux,
  SiTypescript,
  SiJavascript,
  SiCplusplus,
  SiRubyonrails,
  SiExpress,
} from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { IoLogoNodejs } from "react-icons/io";
import { AiTwotoneLock } from "react-icons/ai";
import { PiFileSqlLight } from "react-icons/pi";
import { DiBootstrap, DiReact, DiRuby } from "react-icons/di";

const Projects = () => {
  const gradient = useColorModeValue(
    theme.tablebackground.light,
    theme.tablebackground.dark
  );
  return (
    <Box padding={10}>
      <Box marginTop={15}>
        <br></br>
        <Heading textAlign="center">My Projects</Heading>
        <br></br>
        <Text textAlign="center">{projects}</Text>
        <br></br>
      </Box>
      <SimpleGrid
        textAlign={"justify"}
        columns={{ sm: 1, md: 1, lg: 1, xl: 1 }}
        padding={"10px"}
        spacing={6}
      >
        <Card bgGradient={gradient} borderRadius={"30px"} boxShadow={"lg"}>
          <CardBody>
            <TableContainer overflowX={"auto"}>
              <Table variant="simple">
                <TableCaption>All Projects Done by me</TableCaption>
                <Thead>
                  <Tr>
                    <Th>Year</Th>
                    <Th>Project</Th>
                    <Th>Developed At</Th>
                    <Th>Technologies Used</Th>
                    <Th>Link</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>2023</Td>
                    <Td>Digital Dreams E-Commerce Application</Td>
                    <Td>Contour Software</Td>
                    <Td>
                      <HStack>
                        <DiReact size={40} color="#61DAFB" />
                        <SiRedux
                          size={40}
                          style={{ padding: "5px" }}
                          color="#764ABC"
                        />
                        <IoLogoNodejs
                          size={40}
                          style={{ padding: "3px" }}
                          color="#339933"
                        />
                        <SiMongodb
                          size={40}
                          style={{ padding: "4px" }}
                          color="#47A248"
                        />
                      </HStack>
                    </Td>
                    <Td>
                      <a
                        href="https://github.com/Tashfeen92/Digital_Dreams_E_Commerce"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        <Button variant={"outline"} width="175px">
                          <HStack>
                            <span>Click to Access</span>
                            <BsGithub />
                          </HStack>
                        </Button>
                      </a>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>2024</Td>
                    <Td>Essentials</Td>
                    <Td>Pie Cyfer</Td>
                    <Td>
                      <HStack>
                        <DiRuby
                          size={40}
                          style={{ padding: "2px" }}
                          color="#CC342D"
                        />
                        <SiRubyonrails size={40} color="#CC0000" />
                        <SiCplusplus
                          size={40}
                          style={{ padding: "2px" }}
                          color="#00599C"
                        />
                        <SiJavascript
                          size={40}
                          style={{ padding: "4px" }}
                          color="#F7DF1E"
                        />
                      </HStack>
                    </Td>
                    <Td>
                      <Button
                        isDisabled
                        outlineColor={"red"}
                        padding={"5"}
                        variant={"outline"}
                        width={"170px"}
                      >
                        <AiTwotoneLock size={40} />
                      </Button>
                    </Td>
                  </Tr>

                  <Tr>
                    <Td>2023</Td>
                    <Td>User Details Management System</Td>
                    <Td>Contour Software</Td>
                    <Td>
                      <HStack>
                        <SiJavascript
                          size={40}
                          style={{ padding: "4px" }}
                          color="#F7DF1E"
                        />
                        <DiReact size={40} color="#61DAFB" />
                        <IoLogoNodejs
                          size={40}
                          style={{ padding: "3px" }}
                          color="#339933"
                        />
                        <SiExpress
                          size={40}
                          style={{ padding: "4px" }}
                          color="#000000"
                        />
                      </HStack>
                    </Td>
                    <Td>
                      <a
                        href="https://github.com/Tashfeen92/User_Details_Application"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        <Button variant={"outline"} width="175px">
                          <HStack>
                            <span>Click to Access</span>
                            <BsGithub />
                          </HStack>
                        </Button>
                      </a>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>2024</Td>
                    <Td>Portfolio</Td>
                    <Td>Pie Cyfer</Td>
                    <Td>
                      <HStack>
                        <SiTypescript
                          size={40}
                          style={{ padding: "5px" }}
                          color="#3178C6"
                        />
                        <DiReact size={40} color="#61DAFB" />
                        <SiChakraui
                          size={40}
                          style={{ padding: "5px" }}
                          color="#319795"
                        />
                        <DiBootstrap size={40} color="#7952B3" />
                      </HStack>
                    </Td>
                    <Td>
                      <a
                        href="https://github.com/Tashfeen92/Portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        <Button variant={"outline"} width="175px">
                          <HStack>
                            <span>Click to Access</span>
                            <BsGithub />
                          </HStack>
                        </Button>
                      </a>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>2023</Td>
                    <Td>URL Shortener</Td>
                    <Td>Contour Software</Td>
                    <Td>
                      <HStack>
                        <SiJavascript
                          size={40}
                          style={{ padding: "4px" }}
                          color="#F7DF1E"
                        />
                        <DiReact size={40} color="#61DAFB" />
                        <SiRubyonrails size={40} color="#CC0000" />
                        <PiFileSqlLight size={40} color="#000000" />
                      </HStack>
                    </Td>
                    <Td>
                      <a
                        href="https://github.com/Tashfeen92/URL_Shortener"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        <Button variant={"outline"} width="175px">
                          <HStack>
                            <span>Click to Access</span>
                            <BsGithub />
                          </HStack>
                        </Button>
                      </a>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
