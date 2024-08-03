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
import { projects } from "../assets/txts";
import {
  DiAndroid,
  DiBootstrap,
  DiCss3,
  DiHtml5,
  DiJava,
  DiMongodb,
  DiMysql,
  DiNodejs,
  DiReact,
  DiWebplatform,
} from "react-icons/di";
import {
  SiChakraui,
  SiCsharp,
  SiFirebase,
  SiMongodb,
  SiPostman,
  SiReacthookform,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
import { BsFiletypeXml, BsGithub } from "react-icons/bs";
import theme from "../theme";
import { AiTwotoneLock } from "react-icons/ai";

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
                    <Td>Game-Hub</Td>
                    <Td>Pie-Cyfer</Td>
                    <Td>
                      <HStack>
                        <DiReact size={40} color="aqua" />
                        <SiTypescript size={35} color="blue" />
                        <SiChakraui size={35} color="aqua" />
                        <DiCss3 size={35} color="orange" />
                      </HStack>
                    </Td>
                    <Td>
                      <Button variant={"outline"}>
                        <HStack>
                          <a
                            href="https://github.com/xaeedcntr/Game-hub"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Click to Access
                          </a>
                          <BsGithub />
                        </HStack>
                      </Button>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>2023</Td>
                    <Td>Todo List</Td>
                    <Td>Pie-Cyfer</Td>
                    <Td>
                      <HStack>
                        <DiReact size={40} color="aqua" />
                        <SiTypescript size={35} color="blue" />
                        <DiBootstrap size={35} color="aqua" />
                        <SiRedux size={35} color="orange" />
                      </HStack>
                    </Td>
                    <Td>
                      <Button variant={"outline"}>
                        <HStack>
                          <a
                            href="https://github.com/xaeedcntr/Todo-Project"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Click to Access
                          </a>
                          <BsGithub />
                        </HStack>
                      </Button>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>2023</Td>
                    <Td>User-Registration</Td>
                    <Td>Pie-Cyfer</Td>
                    <Td>
                      <HStack>
                        <DiReact size={40} color="aqua" />
                        <SiTypescript size={35} color="blue" />
                        <SiReacthookform size={35} color="gold" />
                        <DiBootstrap size={35} color="Aqua" />
                      </HStack>
                    </Td>
                    <Td>
                      <Button
                        isDisabled
                        outlineColor={"red"}
                        padding={"5"}
                        variant={"outline"}
                        width={"160px"}
                      >
                        <AiTwotoneLock size={40} />
                      </Button>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>2023</Td>
                    <Td>User-Regsistraion</Td>
                    <Td>Pie-Cyfer</Td>
                    <Td>
                      <HStack>
                        <DiNodejs size={40} color="aqua" />
                        <SiTypescript size={35} color="blue" />
                        <SiMongodb size={35} color="green" />
                        <SiPostman size={35} color="orange" />
                      </HStack>
                    </Td>
                    <Td>
                      <Button
                        isDisabled
                        outlineColor={"red"}
                        padding={"5"}
                        variant={"outline"}
                        width={"160px"}
                      >
                        <AiTwotoneLock size={40} />
                      </Button>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>2023</Td>
                    <Td>CET-Portal</Td>
                    <Td>Contour Software</Td>
                    <Td>
                      <HStack>
                        <DiReact size={40} color="aqua" />
                        <DiNodejs size={35} color="green" />
                        <SiChakraui size={35} color="aqua" />
                        <DiMongodb size={35} color="green" />
                      </HStack>
                    </Td>
                    <Td>
                      <Button variant={"outline"}>
                        <HStack>
                          <a
                            href="https://github.com/xaeedcntr/CET-Portal"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Click to Access
                          </a>
                          <BsGithub />
                        </HStack>
                      </Button>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>2022</Td>
                    <Td>Todo project</Td>
                    <Td>Contour Software</Td>
                    <Td>
                      <HStack>
                        <DiReact size={40} color="aqua" />
                        <DiNodejs size={35} color="green" />
                        <SiChakraui size={35} color="aqua" />
                        <DiMongodb size={35} color="green" />
                      </HStack>
                    </Td>
                    <Td>
                      <Button variant={"outline"}>
                        <HStack>
                          <a
                            href="https://github.com/xaeedcntr/mid-project"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Click to Access
                          </a>
                          <BsGithub />
                        </HStack>
                      </Button>
                    </Td>
                  </Tr>

                  <Tr>
                    <Td>2022</Td>
                    <Td>Sports For Everyone</Td>
                    <Td>LGU</Td>
                    <Td>
                      <HStack>
                        <DiAndroid size={40} color="green" />
                        <SiFirebase size={35} color="orange" />
                        <BsFiletypeXml size={35} color="blue" />
                        <DiJava size={35} color="aqua" />
                      </HStack>
                    </Td>
                    <Td>
                      <Button
                        isDisabled
                        outlineColor={"red"}
                        padding={"5"}
                        variant={"outline"}
                        width={"160px"}
                      >
                        <AiTwotoneLock size={40} />
                      </Button>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>2022</Td>
                    <Td>Orange Store</Td>
                    <Td>LGU</Td>
                    <Td>
                      <HStack>
                        <DiAndroid size={40} color="green" />
                        <SiFirebase size={35} color="orange" />
                        <BsFiletypeXml size={35} color="blue" />
                        <DiJava size={35} color="aqua" />
                      </HStack>
                    </Td>
                    <Td>
                      <Button
                        isDisabled
                        outlineColor={"red"}
                        padding={"5"}
                        variant={"outline"}
                        width={"160px"}
                      >
                        <AiTwotoneLock size={40} />
                      </Button>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>2021</Td>
                    <Td>E Banking</Td>
                    <Td>LGU</Td>
                    <Td>
                      <HStack>
                        <DiWebplatform size={40} color="green" />
                        <DiMysql size={35} color="blue" />
                        <SiCsharp size={35} color="blue" />
                        <DiHtml5 size={35} color="aqua" />
                      </HStack>
                    </Td>
                    <Td>
                      <Button
                        isDisabled
                        outlineColor={"red"}
                        padding={"5"}
                        variant={"outline"}
                        width={"160px"}
                      >
                        <AiTwotoneLock size={40} />
                      </Button>
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
