import ChartStat from "./components/stats/ChartStat";
import Card from "./components/banner/Banner";
import AboutFrame from "./components/about/AboutFrame";
import Hero from "./components/heros/Hero";
import { Box } from "@chakra-ui/react";
function App() {
  return (
    <Box bg="bck"  w={"full"}>
      <Hero/>
      <Card />
      <ChartStat />
      <AboutFrame />
    </Box>
  );
}

export default App;
