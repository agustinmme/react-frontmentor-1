import {
  Heading,
  Box,
  Text,
  Stack,
  Spacer,
  List,
  ListItem,
} from "@chakra-ui/react";
import ModalSelect from "../backthisproject/DrawSelect";
import lista from './data.json'
function ProductCard() {
  return (
    <List spacing={3}>
      {lista.map((item) => (
        <ListItem key={item.id}>
          <Box
            maxW="4xl"
            mx={"auto"}
            p={10}
            mt={10}
            borderWidth="3px"
            borderRadius="lg"
            borderColor={item.stock===0?"gray.100":"gray.300"}
          >
            <Stack 
              direction={"row"}
              justify={"center"}
              align={"center"}
            >
              <Heading fontSize={"xl"} fontFamily={"body"} color={item.stock===0?"tex":"black"}>
                {item.title}
              </Heading>
              <Spacer />
              <Box as="a" color={item.stock===0?"tex":"prim.100"} href="#" fontWeight="bold">
                {item.ofert}
              </Box>
            </Stack>
            <Text color={"tex"} mt={7}  mb={7}>
              {item.text}
            </Text>
            <Stack
              direction={"row"}
              justify={"center"}
              spacing={0}
              align={"center"}
            >
              <Heading
                as="h3"
                fontSize={"3xl"}
                fontFamily={"body"}
                color={item.stock===0?"tex":"black"}
              >
                {item.stock}
              </Heading>
              <Text color={"grey"} pl={2}>
                left
              </Text>
              <Spacer />
              <ModalSelect nameButton={'Select Reward'}  disButton={item.stock===0?true:false}/>
            </Stack>
          </Box>
        </ListItem>
      ))}
    </List>
  );
}

export default ProductCard;
