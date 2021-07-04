import { Box, SimpleGrid, Progress } from "@chakra-ui/react";
import lista from "./data.json";
import StatsCard from "./StatsCard";

export default function BasicStatistics() {
  return (
    <Box maxW="4xl" mx={"auto"} p={10} mt={5} bg="white" borderRadius={10}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        {lista.map((item) => (
          <StatsCard
            key={item.id}
            subtext={item.subtext}
            num={item.num}
            flag={item.flag}
          />
        ))}
      </SimpleGrid>
      <Progress
        height="13px"
        colorScheme="prim"
        bg="gray.100"
        mt={5}
        value={80}
        borderRadius={10}
      />
    </Box>
  );
}
