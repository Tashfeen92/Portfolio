import {
  Box,
  Heading,
  HStack,
  Text,
  VStack,
  useBreakpointValue,
  SimpleGrid,
} from "@chakra-ui/react";
import { BsPhone, BsWhatsapp } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import {
  TiSocialInstagramCircular,
  TiSocialFacebookCircular,
  TiSocialGithubCircular,
  TiSocialLinkedinCircular,
} from "react-icons/ti";

const Footer = () => {
  const alignValue = useBreakpointValue({ base: "center", md: "flex-start" });

  return (
    <Box padding={"4"} bg="blackAlpha.900" minH={"8vh"}>
      <SimpleGrid
        textAlign={"center"}
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        padding={"10px"}
        spacing={6}
        templateColumns={{
          base: "1fr",
          lg: "1fr 1fr 1fr",
        }}
      >
        <VStack alignItems={alignValue} width={["full", "auto"]}>
          <Heading children="All Rights Reserved" color="white" />
          <Heading
            size="sm"
            children="Saeed Anwar"
            color="gold"
            fontFamily="body"
          />
        </VStack>
        <VStack width={["full", "auto"]} alignItems={["center", "flex-start"]}>
          <HStack align="center">
            <BsPhone color="white" />
            <Text marginTop={"4"} fontSize="sm" color="white" ml={2}>
              03251746179
            </Text>
          </HStack>
          <HStack align="center">
            <SiGmail color="white" />
            <Text marginTop={"3"} fontSize="sm" color="white" ml={2}>
              royxaeedanwarofficial@gmail.com
            </Text>
          </HStack>
          <HStack align="center">
            <BsWhatsapp color="white" />
            <Text marginTop={"3"} fontSize="sm" color="white" ml={2}>
              03174240437
            </Text>
          </HStack>
        </VStack>
        <HStack
          spacing={["2", "10"]}
          color="white"
          fontSize={"40"}
          justifyContent="center"
        >
          <a href="https://www.facebook.com/roy.saeed.58" target="_blank">
            <TiSocialFacebookCircular />
          </a>
          <a
            href="https://www.linkedin.com/in/saeed-anwar-b15a40184/"
            target="_blank"
          >
            <TiSocialLinkedinCircular />
          </a>
          <a href="https://github.com/xaeedcntr" target="_blank">
            <TiSocialGithubCircular />
          </a>
          <a href="https://www.instagram.com/roy.xaeed_anwar" target="_blank">
            <TiSocialInstagramCircular />
          </a>
        </HStack>
      </SimpleGrid>
    </Box>
  );
};

export default Footer;
