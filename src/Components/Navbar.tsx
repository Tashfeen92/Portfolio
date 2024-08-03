import { useState, useEffect } from "react";// Import useState
import {
  Box,
  Image,
  Flex,
  useBreakpointValue,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  HStack,
  Button,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons"; // Import the hamburger icon
import logo from "../assets/logo.png";
import ColorModeSwitch from "./colomodeswitcher";

const Navbar = () => {
  const displayValue = useBreakpointValue({ base: "none", md: "flex" });

  // Add state to control the drawer
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the drawer
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  // Close the drawer when a navigation link is clicked
  const closeDrawer = () => {
    setIsOpen(false);
  };

  // Close the drawer when screen size becomes larger
  useEffect(() => {
    if (displayValue === "flex") {
      setIsOpen(false);
    }
  }, [displayValue]);

  return (
    <Box  justifyContent="space-between">
      <Flex alignItems="center" justifyContent="space-between" px={[4, 8]} py={3}>
        <Image src={logo} width="230px" />
        {/* Show the menu button on smaller screens */}
        <IconButton
          aria-label="Open menu"
          icon={<HamburgerIcon />}
          variant="ghost"
          
          display={displayValue === "none" ? "flex" : "none"}
          onClick={toggleDrawer}
        />
        {/* Show the navigation links on larger screens */}
        <HStack as="nav" spacing={4}  display={displayValue}>
        <Link to="/">
            <Button  variant="outline" _hover={{ color: "gold" }}>
              Home
            </Button>
            </Link>
          <Link to="/services"><Button  variant="outline" _hover={{ color: "gold" }}>
              Services
            </Button></Link>
          <Link to="/about">
            <Button  variant="outline" _hover={{ color: "gold" }}>
              About
            </Button>
            </Link>
          <Link to="/skills"><Button  variant="outline" _hover={{ color: "gold" }}>
              Skills
            </Button></Link>
          <Link to="/projects"><Button  variant='outline' _hover={{ color: "gold" }}>
              Projects
            </Button></Link>
          <Link to="/contactus"><Button  variant="outline" _hover={{ color: "gold" }}>
              Contact Me
            </Button></Link>
            <ColorModeSwitch/>
        </HStack>
      </Flex>
      {/* Drawer for smaller screens */}
      <Drawer placement="right" onClose={toggleDrawer} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
            <DrawerBody>
              <VStack spacing={4}>
                <Link to="/" onClick={closeDrawer}>
                  Home
                </Link>
                <Link to="/services" onClick={closeDrawer}>
                  Services
                </Link>
                <Link to="/about" onClick={closeDrawer}>
                  About
                </Link>
                <Link to="/skills" onClick={closeDrawer}>
                  Skills
                </Link>
                <Link to="/projects" onClick={closeDrawer}>
                  Projects
                </Link>
                <Link to="/contactus" onClick={closeDrawer}>
                  Contact me
                </Link>
                <Button colorScheme={'orange'} onClick={closeDrawer}>
                <ColorModeSwitch/>
                </Button>
                
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default Navbar;
