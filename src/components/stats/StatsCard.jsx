import {
    Stat,
    StatLabel,
    StatNumber,
    useBreakpointValue,
  } from "@chakra-ui/react";
  
function StatsCard({ subtext, num, flag }) {
    const variant1 = useBreakpointValue({
      base: 0,
      md: flag ? 1 : 0,
      lg: flag ? 1 : 0,
    });
    const variant2 = useBreakpointValue({ base: flag ? 1 : 0, md: 0, lg: 0 });
    return (
      <Stat
        px={{ base: 4, md: 8 }}
        py={"5"}
        borderRightWidth={variant1}
        borderBottomWidth={variant2}
        borderColor={"grey"}
      >
        <StatNumber fontSize={"4xl"} fontWeight={"medium"} color="black">
          {num}
        </StatNumber>
        <StatLabel fontWeight={"medium"} isTruncated color="black">
          {subtext}
        </StatLabel>
      </Stat>
    );
  }

export default StatsCard
