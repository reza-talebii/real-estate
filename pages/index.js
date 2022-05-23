import { Banner } from "../components";

import { Box, Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box>
      <Banner
        purpose="RENT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        desc1=" Explore from Apartments, builder floors, villas"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="/assets/banner.webp"
      />

      <Flex flexWrap={"wrap"}></Flex>

      <Banner
        purpose="BUY A HOME"
        title1=" Find, Buy & Own Your"
        title2="Dream Home"
        desc1=" Explore from Apartments, land, builder floors,"
        desc2=" villas and more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale"
        imageUrl="/assets/banner1.webp"
      />
    </Box>
  );
}
