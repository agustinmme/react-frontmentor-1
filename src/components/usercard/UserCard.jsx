import React, { useState } from 'react'
import {
  Heading,
  Avatar,
  Box,
  Flex,
  Text,
  Stack,
  Spacer,IconButton,Tooltip
} from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";
import DrawSelect from '../backthisproject/DrawSelect';

export default function SocialProfileWithImage() {

  const [mark,setMark] = useState(false);
  return (
    <Box maxW="4xl" mx={"auto"} p={5} mt={-100} bg="white" borderRadius={10}>
      <Flex justify={"center"} mt={-12}>
        <Avatar
          size={"lg"}
          src={"./images/logo-mastercraft.svg"}
          alt={"H"}
        />
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
        <DrawSelect nameButton={'Back this proyect'} disButton={false}/>
          <Spacer />
          <Tooltip label={mark?"UnBookmark":"Bookmark"} closeDelay={600}>
          <IconButton
            colorScheme={mark?"secon":"gris"}
            color={mark?"white":"gray"}
            onClick={() =>{setMark(mark?false:true)}}
            rounded={"full"}
            aria-label="Call Segun"
            size="lg"
            icon={<BellIcon />}
          />
              </Tooltip>
        </Stack>
        
      </Box>
      
    </Box>
  );
}
