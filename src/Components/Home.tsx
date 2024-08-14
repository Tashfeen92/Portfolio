import {
  Box,
  HStack,
  Text,
  Heading,
  Image,
  Button,
  Card,
  CardBody,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import {
  BsLinkedin,
  BsGithub,
  BsGoogle,
  BsMedium,
} from "react-icons/bs";
import { TbBrandUpwork, TbBrandFiverr } from "react-icons/tb";
import { Link } from "react-router-dom";
import img from "../assets/Developer.png";
import { about } from "../assets/txts";
import PieChart from "./chart";
import PieChartS from "./skillchart";
import { useColorModeValue } from "@chakra-ui/react";
import theme from "../theme";

const Home = () => {
  const gradient = useColorModeValue(
    theme.gradients.light,
    theme.gradients.dark
  );
  const bdrcolor = useColorModeValue(
    theme.bordercolors.light,
    theme.bordercolors.dark
  );
  const icolor = useColorModeValue(
    theme.iconcolors.light,
    theme.iconcolors.dark
  );
  const handleMailTo = (email: any) => {
    window.location.href = `mailto:${email}`;
  };
  return (
    <>
      <Box padding={10}>
        <VStack>
          <SimpleGrid
            columns={{ sm: 1, md: 2, lg: 2, xl: 2 }}
            padding={"10px"}
            marginBottom={8}
            spacing={6}
          >
            <Box marginTop={7} padding={10}>
              <HStack>
                <a
                  href="https://github.com/tashfeen92"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Box border={bdrcolor} borderRadius="20px" boxSize={"40px"}>
                    {" "}
                    <BsGithub
                      color={icolor}
                      style={{ margin: "auto", marginTop: "9px" }}
                    />
                  </Box>
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-tashfeen-717777180"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Box border={bdrcolor} borderRadius="20px" boxSize={"40px"}>
                    {" "}
                    <BsLinkedin
                      color={icolor}
                      style={{ margin: "auto", marginTop: "9px" }}
                    />
                  </Box>
                </a>
                <Box
                  border={bdrcolor}
                  borderRadius="20px"
                  boxSize={"40px"}
                  onClick={() =>
                    handleMailTo("tashfeenproduction92@gmail.com")
                  }
                  style={{ cursor: "pointer" }}
                >
                  <BsGoogle
                    color={icolor}
                    style={{ margin: "auto", marginTop: "9px" }}
                  />
                </Box>
                <a
                  href="https://www.fiverr.com/tashfeen92"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Box border={bdrcolor} borderRadius="20px" boxSize={"40px"}>
                    {" "}
                    <TbBrandFiverr
                      color={icolor}
                      style={{ margin: "auto", marginTop: "9px" }}
                    />
                  </Box>
                </a>
                <a
                  href="https://www.upwork.com/freelancers/~01f8a1d46b82284c3f"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Box border={bdrcolor} borderRadius="20px" boxSize={"40px"}>
                    {" "}
                    <TbBrandUpwork
                      color={icolor}
                      style={{ margin: "auto", marginTop: "9px" }}
                    />
                  </Box>
                </a>
                <a
                  href="https://medium.com/@muhammadtashfeen92"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Box border={bdrcolor} borderRadius="20px" boxSize={"40px"}>
                    {" "}
                    <BsMedium
                      color={icolor}
                      style={{ margin: "auto", marginTop: "9px" }}
                    />
                  </Box>
                </a>
              </HStack>
              <br></br>
              <Heading>Hi I'm Muhammad Hammad Tashfeen</Heading>
              <br></br>
              <Text>{about}</Text>
              <br></br>
              <Button
                _hover={{ backgroundColor: "pink", color: "white" }}
                variant="outline"
                bgGradient="linear(to-r, grey, orange)"
                as="a"
                href="https://www.linkedin.com/in/muhammad-tashfeen-717777180"
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow me
              </Button>
            </Box>
            <Box padding={5}>
              <Image
                className="moveArrow"
                style={{ width: "80%" }}
                src={img}
                alt="Image"
              ></Image>
            </Box>
          </SimpleGrid>
          <SimpleGrid
            textAlign={"center"}
            columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
            padding={"10px"}
            spacing={20}
            alignContent={"space-between"}
            templateColumns={{
              base: "1fr",
              lg: "1fr 1fr 1fr",
            }}
          >
            <Card
              border={bdrcolor}
              bgGradient={gradient}
              shadow={"lg"}
              borderRadius={20}
              id="grad"
            >
              <CardBody>
                <br></br>
                <Heading>Projects</Heading>
                <Heading>10+</Heading>
                <Text>
                  I have developed multiple projects using a variety of
                  technologies, including Ruby on Rails, ReactJS and SQL.
                </Text>
                <Button color={icolor} variant={"outline"}>
                  <Link to="/projects">See All Projects</Link>
                </Button>
              </CardBody>
            </Card>
            <Card
              border={bdrcolor}
              bgGradient={gradient}
              shadow={"lg"}
              borderRadius={20}
              id="grad"
            >
              <CardBody>
                <PieChart />
              </CardBody>
            </Card>
            <Card
              border={bdrcolor}
              bgGradient={gradient}
              shadow={"lg"}
              borderRadius={20}
              id="grad"
            >
              <CardBody>
                <PieChartS />
                <Link to="/skills">
                  <Button color={icolor} variant={"outline"}>
                    See All Skills
                  </Button>
                </Link>
              </CardBody>
            </Card>
          </SimpleGrid>
        </VStack>
      </Box>
    </>
  );
};

export default Home;
