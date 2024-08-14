import {
  Box,
  Card,
  CardBody,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  android,
  design,
  development,
  database_development,
  presentation,
  research,
  service,
} from "../assets/txts";
import { DiCode } from "react-icons/di";
import theme from "../theme";
import { GiArchiveResearch } from "react-icons/gi";
import { RiPresentationFill } from "react-icons/ri";
import { CgWebsite } from "react-icons/cg";
import { SiAndroidstudio } from "react-icons/si";
import { GiDatabase } from "react-icons/gi";

const Services = () => {
  const gradient = useColorModeValue(
    theme.gradients.light,
    theme.gradients.dark
  );
  return (
    <Box padding={10}>
      <Box marginTop={25}>
        <br></br>
        <Heading textAlign="center">My Services</Heading>
        <br></br>
        <Text textAlign="center">{service}</Text>
        <br></br>
      </Box>
      <SimpleGrid
        textAlign={"center"}
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        padding={"10px"}
        spacing={6}
      >
        <Card bgGradient={gradient} borderRadius={"30px"} boxShadow={"lg"}>
          <CardBody>
            <DiCode size={50} style={{ color: "gold", margin: "auto" }} />
            <br></br>
            <Heading fontSize={"15px"}>Web Development</Heading>
            <br></br>
            <Text textAlign={"left"}>{development}</Text>
          </CardBody>
        </Card>
        <Card bgGradient={gradient} borderRadius={"30px"}>
          <CardBody>
            <CgWebsite size={50} style={{ color: "#48bad4", margin: "auto" }} />
            <br></br>
            <Heading fontSize={"15px"}>Web Design</Heading>
            <br></br>
            <Text textAlign={"left"}>{design}</Text>
          </CardBody>
        </Card>
        <Card bgGradient={gradient} borderRadius={"30px"}>
          <CardBody>
            <GiDatabase 
              size={50}
              style={{ color: "#880000", margin: "auto" }} 
            />
            <br></br>
            <Heading fontSize={"15px"}>Database Development</Heading>
            <br></br>
            <Text textAlign={"left"}>{database_development}</Text>
          </CardBody>
        </Card>
        <Card bgGradient={gradient} borderRadius={"30px"}>
          <CardBody>
            <SiAndroidstudio
              size={50}
              style={{ color: "#24c90e", margin: "auto" }}
            />
            <br></br>
            <Heading fontSize={"15px"}>Android Development</Heading>
            <br></br>
            <Text textAlign={"left"}>{android}</Text>
          </CardBody>
        </Card>
        <Card bgGradient={gradient} borderRadius={"30px"}>
          <CardBody>
            <GiArchiveResearch
              size={50}
              style={{ color: "#e64d27", margin: "auto" }}
            />
            <br></br>
            <Heading fontSize={"15px"}>Research</Heading>
            <br></br>
            <Text textAlign={"left"}>{research}</Text>
          </CardBody>
        </Card>
        <Card bgGradient={gradient} borderRadius={"30px"}>
          <CardBody>
            <RiPresentationFill
              size={50}
              style={{ color: "#f241bd", margin: "auto" }}
            />
            <br></br>
            <Heading fontSize={"15px"}>Presentations</Heading>
            <br></br>
            <Text textAlign={"left"}>{presentation}</Text>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Box>
  );
};

export default Services;
