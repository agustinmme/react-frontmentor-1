import {
  Heading,
  Box,
  Text,
  Stack,
  Spacer,
  List,
  ListItem,
  Divider,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import React, { useState } from "react";
import ModalFin from "../backthisproject/ModalFin";
import lista from "./dataInput.json";
function ProductCard() {
  const format = (val) => `$` + val;
  const parse = (val) => val.replace(/^\$/, "");

  const [value, setValue] = useState("10");
  const [select, setSelect] = useState([false, false, false,false]);
  const tipo = {
    0: [true, false, false,false],
    1: [false, true, false,false],
    2: [false, false, true,false],
    3: [false, false, false,false],
  };
  return (
    <List spacing={3}>
      {lista.map((item) => (
        <ListItem key={item.id}>
          <Box
            onClick={() => {
              setSelect(tipo[item.id]);
            }}
            maxW="4xl"
            mx={"auto"}
            p={10}
            mt={10}
            mb={10}
            borderWidth="3px"
            borderRadius="lg"
            borderColor={
              select[item.id]
                ? item.stock === 0
                  ? "gray.100"
                  : "prim.100"
                : "gray.100"
            }
          >
            <Stack direction={"row"} align={"center"}>
              <Box
                p={1}
                borderWidth="2px"
                rounded={"full"}
                borderColor={item.stock === 0 ? "white" : "gray.200"}
              >
                <Box
                  rounded={"full"}
                  p={1.5}
                  bg={
                    select[item.id]
                      ? item.stock === 0
                        ? "white"
                        : "prim.100"
                      : "white"
                  }
                />
              </Box>
              <Heading
                  fontSize={"xl"}
                  fontFamily={"body"}
                  color={item.stock === 0 ? "tex" : "black"}
                >
                  {item.title}
                </Heading>
                <Spacer />
              <Stack spacing={5} direction={"row"}>
                <Box
                  display={item.stock === 0 ? "none" : "flex"}
                  as="a"
                  color={item.stock === 0 ? "tex" : "prim.100"}
                  href="#"
                  fontWeight="bold"
                >
                  {item.ofert}
                </Box>
                <Stack direction={"row"} align="center" spacing={-1}>
                  <Heading
                    display={item.stock === 0 ? "none" : "flex"}
                    as="h3"
                    fontSize={"2xl"}
                    fontFamily={"body"}
                    color={item.stock === 0 ? "tex" : "black"}
                  >
                    {item.stock}
                  </Heading>
                  <Text
                    display={item.stock === 0 ? "none" : "flex"}
                    color={"grey"}
                    pl={2}
                  >
                    left
                  </Text>
                </Stack>
              </Stack>
            </Stack>
            <Text color={"tex"} mt={7} mb={7}>
              {item.text}
            </Text>
            <Divider
              display={
                select[item.id] ? (item.stock === 0 ? "none" : "flex") : "none"
              }
            />
            <Stack
              display={
                select[item.id] ? (item.stock === 0 ? "none" : "flex") : "none"
              }
              mt={2}
              direction={"row"}
              justify={"center"}
              spacing={5}
              align={"center"}
            >
              <Text color={"tex"}>Enter your pledge</Text>
              <Spacer />
              <NumberInput
                borderColor={"gray.300"}
                size="md"
                maxW={24}
                color={"gray"}
                onChange={(valueString) => setValue(parse(valueString))}
                value={format(value)}
                max={100}
              >
                <NumberInputField rounded={"full"} color={"black"} />
                <NumberInputStepper color={"black"}>
                  <NumberIncrementStepper color={"gray"} />
                  <NumberDecrementStepper color={"gray"} />
                </NumberInputStepper>
              </NumberInput>
              <ModalFin
                display={item.stock === 0 ? "none" : "flex"}
                nameButton={"Continue"}
                disButton={item.stock === 0 ? true : false}
              />
            </Stack>
          </Box>
        </ListItem>
      ))}
    </List>
  );
}

export default ProductCard;
