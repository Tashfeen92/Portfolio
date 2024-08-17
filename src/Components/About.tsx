import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  Image,
  Card,
  CardBody,
  Button,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  aboutme_1,
  aboutme_2,
  aboutme_3,
  aboutme_4,
  aboutme_5,
  dev_1,
  dev_2,
  dev_3,
  dev_4,
} from "../assets/txts";
import theme from "../theme";
import { Link } from "react-router-dom";
import PieChart from "./chart";
import PieChartS from "./skillchart";
import certificate from "../assets/my_certification.png";
import "../Styles/Image.css";

const About = () => {
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
  return (
    <Box>
      <Card
        bgGradient={gradient}
        margin={"50px 60px 50px 60px"}
        borderRadius={"20px"}
        shadow={"dark-lg"}
      >
        <CardBody>
          <Heading textAlign="center">About Me</Heading>
          <SimpleGrid
            textAlign={"center"}
            columns={{ sm: 1, md: 1, lg: 2, xl: 2 }}
            spacing={6}
            templateColumns={{
              base: "1fr",
              lg: "1fr 0%",
            }}
          >
            <Box className="responsive-about" alignContent={"center"}>
              <br />
              <Text
                fontSize={"25px"}
                fontFamily={"cursive"}
                textAlign="justify"
              >
                "I am a Software Engineer who can bring your ideas to life
                through innovative development."
              </Text>
              <br />
              <Box
                position="relative"
                _before={{
                  content: '"“"',
                  fontSize: "5rem",
                  color: "gold",
                  position: "absolute",
                  top: "-3.5rem",
                  bottom: "-1rem",
                  left: "-2rem",
                }}
                _after={{
                  content: '"”"',
                  fontSize: "5rem",
                  color: "gold",
                  position: "absolute",
                  bottom: "-5.5rem",
                  right: "-2rem",
                }}
              >
                <Text fontFamily={"mono"} textAlign="justify">
                  {aboutme_1}
                  <br />
                  <br />
                  {aboutme_2}
                  <br />
                  <br />
                  {aboutme_3}
                  <br />
                  <br />
                  {aboutme_4}
                  <br />
                  <br />
                  {aboutme_5}
                </Text>
              </Box>
              <br />
            </Box>
          </SimpleGrid>
        </CardBody>
      </Card>
      <Card
        bgGradient={gradient}
        style={{
          backgroundColor: "rgba(255, 255, 255, .10)",
          backdropFilter: "blur(10px)",
        }}
        margin={"50px 60px 50px 60px"}
        borderRadius={"20px"}
        shadow={"dark-lg"}
      >
        <CardBody>
          <Heading textAlign="center">Certification</Heading>
          <SimpleGrid
            textAlign={"center"}
            columns={{ sm: 1, md: 1, lg: 2, xl: 2 }}
            spacing={6}
            templateColumns={{
              base: "1fr",
              lg: "40% 1fr",
            }}
          >
            <Image
              border={"2px solid gold"}
              borderRadius={"20px"}
              marginTop={"42"}
              className="moveArrow"
              alt="Image"
              src={certificate}
            />
            <Box
              className="responsive-about"
              alignContent={"center"}
              marginTop={25}
            >
              <br />
              <Text
                fontSize={"25px"}
                fontFamily={"cursive"}
                textAlign="justify"
              >
                "Presenting my MERN Development Certification from Contour
                Software House, Lahore."
              </Text>
              <br />
              <Box
                position="relative"
                _before={{
                  content: '"“"',
                  fontSize: "5rem",
                  color: "gold",
                  position: "absolute",
                  top: "-3.5rem",
                  bottom: "-1rem",
                  left: "-2rem",
                }}
                _after={{
                  content: '"”"',
                  fontSize: "5rem",
                  color: "gold",
                  position: "absolute",
                  bottom: "-5.5rem",
                  right: "-2rem",
                }}
              >
                <Text fontFamily={"mono"} textAlign="justify">
                  {dev_1}
                  <br />
                  <br />
                  {dev_2}
                  <br />
                  <br />
                  {dev_3}
                  <br />
                  <br />
                  {dev_4}
                </Text>
              </Box>
              <br />
            </Box>
          </SimpleGrid>
        </CardBody>
      </Card>
      <Box>
        <VStack>
          <SimpleGrid
            textAlign={"center"}
            columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
            padding={"5px 60px 60px 60px"}
            spacing={12}
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
                <Heading>5+</Heading>
                <Text>
                  I have developed multiple projects using a variety of
                  technologies, including Ruby on Rails, ReactJS and SQL.
                </Text>
                <Link to="/projects">
                  <Button color={icolor} variant={"outline"}>
                    See All Projects
                  </Button>
                </Link>
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
    </Box>
  );
};

export default About;
