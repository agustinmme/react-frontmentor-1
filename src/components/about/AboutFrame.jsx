import { Heading, Box, Text, Stack } from "@chakra-ui/react";
import ProductCard from './ProductCard'
export default function About() {
  return (
    <Box maxW="4xl" mx={"auto"} p={5} mt={10} bg="white" borderRadius={10}>
      <Stack spacing={5}>
        <Heading fontSize={"xl"} fontFamily={"body"} color={"black"}>
          About this project
        </Heading>
        <Text color={"tex"}>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
        </Text>
        <Text color={"tex"}>
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </Text>
        <ProductCard/>
      </Stack>
    </Box>
  );
}
