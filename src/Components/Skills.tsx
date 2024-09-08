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
  skillstxt,
  Ruby,
  Rails,
  Node,
  Express,
  RestfulApi,
  ApiTesting,
  SQL,
  MongoDB,
  JavaScript,
  JQuery,
  React,
  Redux,
  Hotwire,
  EmbeddedRuby,
  GitHub,
  Cplus,
} from "../assets/txts";
import {
  SiCplusplus,
  SiExpress,
  SiRubyonrails,
  SiInsomnia,
  SiPostman,
  SiRedux,
  SiJquery,
  SiRuby,
} from "react-icons/si";
import { DiReact, DiMongodb, DiJavascript } from "react-icons/di";
import { PiFileSqlLight } from "react-icons/pi";
import { FaGithubSquare } from "react-icons/fa";
import { GrTurbolinux } from "react-icons/gr";
import { IoLogoNodejs } from "react-icons/io";

import theme from "../theme";

const Skills = () => {
  const gradient = useColorModeValue(
    theme.gradients.light,
    theme.gradients.dark
  );

  return (
    <Box padding={10}>
      <Box marginTop={25}>
        <br></br>
        <Heading textAlign="center">My Skills</Heading>
        <br></br>
        <Text textAlign="center">{skillstxt}</Text>
        <br></br>
      </Box>
      <SimpleGrid
        textAlign={"center"}
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        padding={"10px"}
        spacing={6}
      >
        <Card borderRadius={"30px"} boxShadow={"lg"} bgGradient={gradient}>
          <CardBody>
            <SiRuby />
            <SiRuby
              size={40}
              style={{ color: "#CC342D", margin: "auto", marginBottom: "30px" }}
            />
            <Heading fontSize={"15px"}>Ruby</Heading>
            <br></br>
            <Text textAlign={"left"}>{Ruby}</Text>
          </CardBody>
        </Card>
        <Card borderRadius={"30px"} boxShadow={"lg"} bgGradient={gradient}>
          <CardBody>
            <SiRubyonrails />
            <SiRubyonrails
              size={70}
              style={{ color: "CC0000", margin: "auto" }}
            />
            <Heading fontSize={"15px"}>Ruby on Rails</Heading>
            <br></br>
            <Text textAlign={"left"}>{Rails}</Text>
          </CardBody>
        </Card>
        <Card borderRadius={"30px"} boxShadow={"lg"} bgGradient={gradient}>
          <CardBody>
            <IoLogoNodejs />
            <IoLogoNodejs
              size={50}
              style={{ color: "#339933", margin: "auto", marginBottom: "20px" }}
            />
            <Heading fontSize={"15px"}>Node Js</Heading>
            <br></br>
            <Text textAlign={"left"}>{Node}</Text>
          </CardBody>
        </Card>
        <Card borderRadius={"30px"} bgGradient={gradient}>
          <CardBody>
            <SiExpress />
            <SiExpress
              size={50}
              style={{ color: "#000000", margin: "auto", marginBottom: "20px" }}
            />
            <Heading fontSize={"15px"}>Express</Heading>
            <br></br>
            <Text textAlign={"left"}>{Express}</Text>
          </CardBody>
        </Card>
        <Card borderRadius={"30px"} boxShadow={"lg"} bgGradient={gradient}>
          <CardBody>
            <SiInsomnia />
            <SiInsomnia
              size={50}
              style={{ color: "#4000BF", margin: "auto", marginBottom: "20px" }}
            />
            <Heading fontSize={"15px"}>RESTful API</Heading>
            <br></br>
            <Text textAlign={"left"}>{RestfulApi}</Text>
          </CardBody>
        </Card>
        <Card borderRadius={"30px"} bgGradient={gradient}>
          <CardBody>
            <SiPostman />
            <SiPostman
              size={50}
              style={{ color: "#FF6C37", margin: "auto", marginBottom: "20px" }}
            />
            <Heading fontSize={"15px"}>Api Testing</Heading>
            <br></br>
            <Text textAlign={"left"}>{ApiTesting}</Text>
          </CardBody>
        </Card>
        <Card borderRadius={"30px"} bgGradient={gradient}>
          <CardBody>
            <PiFileSqlLight />
            <PiFileSqlLight
              size={45}
              style={{ color: "#808080", margin: "auto" }}
            />
            <br></br>
            <Heading fontSize={"15px"}>SQL Database</Heading>
            <br></br>
            <Text textAlign={"left"}>{SQL}</Text>
          </CardBody>
        </Card>
        <Card borderRadius={"30px"} bgGradient={gradient}>
          <CardBody>
            <DiMongodb />
            <DiMongodb
              size={50}
              style={{ color: "#47A248", margin: "auto", marginBottom: "20px" }}
            />
            <Heading fontSize={"15px"}>Mongo DB</Heading>
            <br></br>
            <Text textAlign={"left"}>{MongoDB}</Text>
          </CardBody>
        </Card>
        <Card borderRadius={"30px"} bgGradient={gradient}>
          <CardBody>
            <DiJavascript />
            <DiJavascript
              size={50}
              style={{ color: "#F7DF1E", margin: "auto" }}
            />
            <br></br>
            <Heading fontSize={"15px"}>Java Script</Heading>
            <br></br>
            <Text textAlign={"left"}>{JavaScript}</Text>
          </CardBody>
        </Card>
        <Card borderRadius={"30px"} bgGradient={gradient}>
          <CardBody>
            <SiJquery />
            <SiJquery
              size={40}
              style={{ color: "#0769AD", margin: "auto", marginBottom: "10px" }}
            />
            <br></br>
            <Heading fontSize={"15px"}>JQuery</Heading>
            <br></br>
            <Text textAlign={"left"}>{JQuery}</Text>
          </CardBody>
        </Card>
        <Card borderRadius={"30px"} bgGradient={gradient}>
          <CardBody>
            <DiReact />
            <DiReact
              size={50}
              style={{ color: "#61DAFB", margin: "auto", marginBottom: "20px" }}
            />
            <Heading fontSize={"15px"}>React Js</Heading>
            <br></br>
            <Text textAlign={"left"}>{React}</Text>
          </CardBody>
        </Card>
        <Card borderRadius={"30px"} bgGradient={gradient}>
          <CardBody>
            <SiRedux />
            <SiRedux
              size={50}
              style={{ color: "#764ABC", margin: "auto", marginBottom: "20px" }}
            />
            <Heading fontSize={"15px"}>Redux</Heading>
            <br></br>
            <Text textAlign={"left"}>{Redux}</Text>
          </CardBody>
        </Card>
        <Card borderRadius={"30px"} bgGradient={gradient}>
          <CardBody>
            <GrTurbolinux />
            <GrTurbolinux
              size={50}
              style={{ color: "#E34F26", margin: "auto" }}
            />
            <br></br>
            <Heading fontSize={"15px"}>Hotwire</Heading>
            <br></br>
            <Text textAlign={"left"}>{Hotwire}</Text>
          </CardBody>
        </Card>
        <Card borderRadius={"30px"} boxShadow={"lg"} bgGradient={gradient}>
          <CardBody>
            <SiRuby />
            <SiRuby
              size={40}
              style={{ color: "#CC342D", margin: "auto", marginBottom: "30px" }}
            />
            <Heading fontSize={"15px"}>Embedded Ruby</Heading>
            <br></br>
            <Text textAlign={"left"}>{EmbeddedRuby}</Text>
          </CardBody>
        </Card>
        <Card borderRadius={"30px"} bgGradient={gradient}>
          <CardBody>
            <FaGithubSquare />
            <FaGithubSquare
              size={50}
              style={{ color: "#181717", margin: "auto" }}
            />
            <br></br>
            <Heading fontSize={"15px"}>GitHub</Heading>
            <br></br>
            <Text textAlign={"left"}>{GitHub}</Text>
          </CardBody>
        </Card>
        <Card borderRadius={"30px"} bgGradient={gradient}>
          <CardBody>
            <SiCplusplus />
            <SiCplusplus
              size={50}
              style={{ color: "#00599C", margin: "auto" }}
            />
            <br></br>
            <Heading fontSize={"15px"}>C++</Heading>
            <br></br>
            <Text textAlign={"left"}>{Cplus}</Text>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Box>
  );
};

export default Skills;
