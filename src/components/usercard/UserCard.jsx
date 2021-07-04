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
import DrawSelect from "../backthisproject/DrawSelect";

export default function SocialProfileWithImage() {
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
          <DrawSelect nameButton={"Back this proyect"} disButton={false} />
          <Spacer />
            <Image display={["none", "none", "flex", "flex"]} src={mark ?"./images/bookmarket-off.svg":"./images/bookmarket-on.svg"}  onClick={() => {
              setMark(mark ? false : true);
            }} />
            <Image display={["flex", "flex", "none", "none"]} src={mark ?"./images/icon-bookmark-off.svg":"./images/icon-bookmark-on.svg"}  onClick={() => {
              setMark(mark ? false : true);
            }} />
        </Stack>
      </Box>
    </Box>
  );
}
