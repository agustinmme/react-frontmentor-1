import React, { useState } from "react";
import {
  Heading,
  Avatar,
  Box,
  Flex,
  Text,
  Stack,
  Spacer,
  Image,
} from "@chakra-ui/react";
import ModalSelect from "../backthisproject/ModalSelect";

export default function Banner() {
  const [mark, setMark] = useState(false);
  return (
    <Box maxW="4xl" mx={"auto"} p={5} mt={-100} bg="white" borderRadius={10}>
      <Flex justify={"center"} mt={-12}>
        <Avatar size={"lg"} src={"./images/logo-mastercraft.svg"} alt={"H"} />
      </Flex>

      <Box p={6}>
        <Stack spacing={0} align={"center"} mb={5}>
          <Heading fontSize={"3xl"} fontFamily={"body"} color={"black"}>
            Mastercraft Bamboo Monitor Riser
          </Heading>
          <Text color={"tex"}>
            A beutiful handcrafted monitor stand to reducer neck and eye strain
          </Text>
        </Stack>

        <Stack
          direction={"row"}
          justify={"center"}
          spacing={0}
          align={"center"}
        >
          <ModalSelect nameButton={"Back this proyect"} disButton={false} />
          <Spacer />
          <Image
            borderRadius={50}
            p={1}
            display={["none", "none", "flex", "flex"]}
            src={
              mark
                ? "./images/bookmarket-off.svg"
                : "./images/bookmarket-on.svg"
            }
            _hover={{ bg: "#ebedf0" }}
            _active={{
              bg: "#dddfe2",
              transform: "scale(0.98)",
              borderColor: "#bec3c9",
            }}
            _focus={{
              boxShadow:
                "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
            }}
            onClick={() => {
              setMark(mark ? false : true);
            }}
          />
          <Image
            borderRadius={50}
            p={2}
            display={["flex", "flex", "none", "none"]}
            src={
              mark
                ? "./images/icon-bookmark-off.svg"
                : "./images/icon-bookmark-on.svg"
            }
            _hover={{ bg: "#ebedf0" }}
            _active={{
              bg: "#dddfe2",
              transform: "scale(0.98)",
              borderColor: "#bec3c9",
            }}
            _focus={{
              boxShadow:
                "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
            }}
            onClick={() => {
              setMark(mark ? false : true);
            }}
          />
        </Stack>
      </Box>
    </Box>
  );
}
