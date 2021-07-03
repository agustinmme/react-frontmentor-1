import {
  Box,
  Flex,
  Image,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Spacer,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
export default function Simple() {
  return (
    <Box p={5}>
      <Flex display={["none", "none", "none", "flex"]} align="center">
        <Flex  >
          <Image src={"./images/logo.svg"} alt="Logo" my={5} />
        </Flex>
        <Spacer />
        <Flex >
          <Button as="a" variant="ghost" arial-label="About" my={5} w="100%">
            About
          </Button>
          <Button as="a" variant="ghost" arial-label="Discover" my={5} w="100%">
            Discover
          </Button>
          <Button
            as="a"
            variant="ghost"
            arial-label="Get Started"
            my={5}
            w="100%"
          >
            Get Started
          </Button>
        </Flex>
      </Flex>
      <Flex display={["flex", "flex", "flex", "none"]}>
        <Image
          src={"./images/logo.svg"}
          alt="Logo"
          pos="absolute"
          top="3rem"
          left="3rem"
        />
        <Spacer />
        <Box my={5}>
          <Menu arial-label="Open menu" bg="transparent" >
            {({ isOpen }) => (
              <>
                <MenuButton
                  isActive={isOpen}
                  as={Button}
                  bg="transparent"
                  _active={{
                    bg: "transparent",
                  }}
                  _hover={{
                    bg: "transparent",
                  }}
                >
                  {isOpen ? <CloseIcon /> : <HamburgerIcon />}
                </MenuButton>
                <MenuList bg="white">
                  <MenuItem
                    bg="white"
                    color="black"
                    p={5}
                    onClick={() => alert("No link")}
                    _hover={{
                      bg: "bck",
                    }}
                  >
                    About
                  </MenuItem>
                  <MenuItem
                    bg="white"
                    color="black"
                    p={5}
                    onClick={() => alert("No link")}
                    _hover={{
                      bg: "bck",
                    }}
                  >
                    Discover
                  </MenuItem>
                  <MenuItem
                    bg="white"
                    color="black"
                    p={5}
                    onClick={() => alert("No link")}
                    _hover={{
                      bg: "bck",
                    }}
                  >
                    Get Started
                  </MenuItem>
                </MenuList>
              </>
            )}
          </Menu>
        </Box>
      </Flex>
    </Box>
  );
}
