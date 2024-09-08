import {
  Box,
  Heading,
  HStack,
  Text,
  Link,
  VStack,
  useBreakpointValue,
  SimpleGrid,
} from "@chakra-ui/react";
import { BsWhatsapp, BsLinkedin } from "react-icons/bs";
import {
  SiGmail,
  SiGithub,
  SiLinkedin,
  SiFiverr,
  SiUpwork,
  SiMedium,
} from "react-icons/si";

const Footer = () => {
  const alignValue = useBreakpointValue({ base: "center", md: "flex-start" });

  return (
    <Box padding={"4"} bg="blackAlpha.900" minH={"8vh"}>
      <SimpleGrid
        textAlign={"left"}
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        padding={"10px"}
        spacing={6}
        templateColumns={{
          base: "1fr",
          lg: "1fr 1fr 1fr",
        }}
      >
        <VStack alignItems={alignValue} justifyContent={"flex-start"} width={["full", "auto"]}>
          <Heading children="All Rights Reserved" color="white" />
          <Heading
            size="sm"
            children="Muhamad Hammad Tashfeen"
            color="gold"
            fontFamily="body"
          />
        </VStack>
        <VStack width={["full", "auto"]} alignItems={["center", "flex-start"]}>
          <HStack align="center">
            <BsWhatsapp color="white" />
            <Text marginTop={"4"} fontSize="sm" color="white" ml={2}>
              +92 316 4983858
            </Text>
          </HStack>
          <HStack align="center">
            <SiGmail color="white" />
            <Text marginTop={"4"} fontSize="sm" color="white" ml={2}>
              tashfeenproduction92@gmail.com
            </Text>
          </HStack>
          <HStack align="center">
            <BsLinkedin color="white" />
            <Link
              href="https://www.linkedin.com/in/muhammad-tashfeen-717777180"
              isExternal
            >
              <Text marginTop={5} fontSize="sm" color="white" ml={2} >
                https://www.linkedin.com/in/muhammad-tashfeen-717777180
              </Text>
            </Link>
          </HStack>
        </VStack>
        <HStack
          spacing={["2", "10"]}
          color="white"
          fontSize={"25"}
          justifyContent="center"
        >
          <a href="https://github.com/tashfeen92" target="_blank">
            <SiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-tashfeen-717777180"
            target="_blank"
          >
            <SiLinkedin />
          </a>
          <a href="https://www.fiverr.com/tashfeen92" target="_blank">
            <SiFiverr />
          </a>
          <a
            href="https://www.upwork.com/freelancers/~01f8a1d46b82284c3f"
            target="_blank"
          >
            <SiUpwork />
          </a>
          <a href="https://medium.com/@muhammadtashfeen92" target="_blank">
            <SiMedium />
          </a>
        </HStack>
      </SimpleGrid>
    </Box>
  );
};

export default Footer;
