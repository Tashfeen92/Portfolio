import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  Image,
  Card,
  CardBody,
} from "@chakra-ui/react";
import { aboutme, dev } from "../assets/txts";
import developer from "../assets/Developer.svg";
import certificate from "../assets/certification.png";
import "../Styles/Image.css";

const About = () => {
  return (
    <Box>
      <Card margin={"50px"} borderRadius={"20px"} shadow={"dark-lg"}>
        <CardBody>
          <Heading textAlign="center">About Me</Heading>
          <SimpleGrid
            textAlign={"center"}
            columns={{ sm: 1, md: 1, lg: 2, xl: 2 }}
            spacing={6}
            templateColumns={{
              base: "1fr",
              lg: "1fr 45%",
            }}
          >
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
                I am a Software engineer who can develop what you have in your
                mind
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
                  {aboutme}
                </Text>
              </Box>
              <br />
            </Box>
            <Image
              marginTop={"10"}
              className="moveArrow"
              alt="Image"
              src={developer}
            />
          </SimpleGrid>
        </CardBody>
      </Card>
      <Card
        style={{
          backgroundColor: "rgba(255, 255, 255, .10)",
          backdropFilter: "blur(10px)",
        }}
        margin={"60px"}
        borderRadius={"20px"}
        shadow={"dark-lg"}
        border={"3px solid aqua"}
      >
        <CardBody>
          <Heading textAlign="center">Certification</Heading>
          <SimpleGrid
            paddingBottom={"35px"}
            textAlign={"center"}
            columns={{ sm: 1, md: 1, lg: 2, xl: 2 }}
            spacing={6}
            templateColumns={{
              base: "1fr",
              lg: "45% 1fr",
            }}
          >
            <Image
              border={"2px solid gold"}
              borderRadius={"20px"}
              marginTop={"10"}
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
                Here is my Certification of MERN development from contour
                software house lahore
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
                  {dev}
                </Text>
              </Box>
              <br />
            </Box>
          </SimpleGrid>
        </CardBody>
      </Card>
    </Box>
  );
};

export default About;
