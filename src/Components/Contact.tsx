import {
  Box,
  Button,
  Link,
  Card,
  CardBody,
  HStack,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsRocket } from "react-icons/bs";
import { FloatingLabel, Form, FormControl } from "react-bootstrap";
import { useForm, ValidationError } from "@formspree/react";
import theme from "../theme";

const Contact = () => {
  const grad = useColorModeValue(
    theme.formbackground.light,
    theme.formbackground.dark
  );
  const [state, handleSubmit] = useForm("xldrbzpp");
  if (state.succeeded) {
    return (
      <Box>
        <SimpleGrid
          textAlign={"center"}
          columns={{ sm: 1, md: 1, lg: 2, xl: 2 }}
          padding={"10px"}
          spacing={6}
          templateColumns={{
            base: "1fr",
            lg: "55% 1fr",
          }}
        >
          <Box
            marginLeft={"12"}
            marginRight={"10"}
            textAlign={"justify"}
            marginTop={"20"}
          >
            <br></br>
            <Heading fontSize={"50px"} textAlign={"justify"}>
              Let's Discuss.
            </Heading>
            <Heading>Tell me about your inovative idea</Heading>
            <br></br>
            <HStack>
              <Text marginTop="14px">Start your inovative Journey with me</Text>
              <BsRocket style={{ color: "red" }} />
            </HStack>
            <br></br>
            <Link
              href="https://www.linkedin.com/in/muhammad-tashfeen-717777180"
              isExternal
              display="inline-block"
              px={4}
              py={2}
              borderRadius="md"
              fontWeight="semibold"
              variant="outline"
              bgGradient="linear(to-r, grey, orange)"
              _hover={{
                textDecoration: "none",
                bg: "pink",
                color: "white",
              }}
            >
              Follow me
            </Link>
          </Box>
          <Box
            padding={5}
            margin={"8"}
            alignContent={"center"}
            marginTop={25}
            marginBottom={250}
          >
            <Card
              borderRadius={"30px"}
              border={"2px solid gold"}
              backdropBlur={"base"}
              boxShadow={"2xl"}
            >
              <CardBody>
                <Heading>Hurray Mail delivered</Heading>
              </CardBody>
            </Card>
          </Box>
        </SimpleGrid>
      </Box>
    );
  }

  return (
    <Box>
      <SimpleGrid
        textAlign={"center"}
        columns={{ sm: 1, md: 1, lg: 2, xl: 2 }}
        padding={"10px"}
        spacing={6}
        templateColumns={{
          base: "1fr",
          lg: "55% 1fr",
        }}
      >
        <Box
          marginLeft={"12"}
          marginRight={"10"}
          textAlign={"justify"}
          marginTop={"20"}
        >
          <br></br>
          <Heading fontSize={"50px"} textAlign={"justify"}>
            Let's Discuss.
          </Heading>
          <Heading>Tell me about your inovative idea</Heading>
          <br></br>
          <HStack>
            <Text marginTop="14px">Start your inovative Journey with me</Text>
            <BsRocket style={{ color: "red" }} />
          </HStack>
          <br></br>
          <Link
            href="https://www.linkedin.com/in/muhammad-tashfeen-717777180"
            isExternal
            display="inline-block"
            px={4}
            py={2}
            borderRadius="md"
            fontWeight="semibold"
            variant="outline"
            bgGradient="linear(to-r, grey, orange)"
            _hover={{
              textDecoration: "none",
              bg: "pink",
              color: "white",
            }}
          >
            Follow me
          </Link>
        </Box>
        <Box padding={5} margin={"8"} alignContent={"center"} marginTop={25}>
          <Card
            bgGradient={grad}
            borderRadius={"30px"}
            border={"2px solid gold"}
            backdropBlur={"base"}
            boxShadow={"2xl"}
          >
            <CardBody>
              <Form onSubmit={handleSubmit}>
                <Heading color={"white"} textAlign={"center"}>
                  Mail Me
                </Heading>

                <FloatingLabel
                  style={{
                    background: "transparent",
                    backgroundColor: "transparent",
                  }}
                  controlId="nameInput"
                  label="Name"
                  className="mb-3"
                >
                  <Form.Control
                    minLength={4}
                    style={{
                      color: "white",
                      background: "transparent",
                      backgroundColor: "transparent",
                    }}
                    required
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter name"
                  ></Form.Control>
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </FloatingLabel>
                <FloatingLabel
                  style={{
                    background: "transparent",
                    backgroundColor: "transparent",
                  }}
                  className="mb-3"
                  controlId="emailInput"
                  label="Email"
                >
                  <Form.Control
                    color="white"
                    minLength={10}
                    style={{
                      color: "white",
                      background: "transparent",
                      backgroundColor: "transparent",
                    }}
                    required
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                  ></Form.Control>
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </FloatingLabel>
                <FloatingLabel
                  style={{
                    background: "transparent",
                    backgroundColor: "transparent",
                  }}
                  className="mb-3"
                  controlId="subjectInput"
                  label="Subject"
                >
                  <FormControl
                    minLength={10}
                    style={{
                      color: "white",
                      background: "transparent",
                      backgroundColor: "transparent",
                    }}
                    required
                    id="subject"
                    type="text"
                    name="subject"
                    placeholder="Enter subject"
                  ></FormControl>
                  <ValidationError
                    prefix="Subject"
                    field="subject"
                    errors={state.errors}
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="messageInput"
                  label="Message"
                  style={{
                    background: "transparent",
                    backgroundColor: "transparent",
                  }}
                >
                  <FormControl
                    minLength={15}
                    style={{
                      color: "white",
                      background: "transparent",
                      height: "100px",
                      backgroundColor: "transparent",
                    }}
                    as={"textarea"}
                    required
                    id="message"
                    type="text"
                    name="message"
                    placeholder="Enter Your Message"
                  ></FormControl>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </FloatingLabel>
                <HStack marginTop={"5"}>
                  <Button
                    backgroundColor={"blue.300"}
                    type="submit"
                    disabled={state.submitting}
                  >
                    Send
                  </Button>
                  <Button type="reset">Reset</Button>
                </HStack>
              </Form>
            </CardBody>
          </Card>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Contact;
