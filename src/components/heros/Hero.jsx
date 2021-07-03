import { Flex, Stack, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "../navbar/NavBar";
export default function WithBackgroundImage() {
  return (
      <Flex
        w={"full"}
        h={"55vh"}
        backgroundImage={"./images/image-hero-desktop.jpg"}
        backgroundSize={"cover"}
      >
        <Stack
          w={"full"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-t,transparent, blackAlpha.700)"}
        >
          <NavBar />
        </Stack>
      </Flex>
  );
}
