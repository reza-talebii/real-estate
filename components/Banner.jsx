import Link from "next/link";
import Image from "next/image";

import { Flex, Box, Text, Button } from "@chakra-ui/react";

const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  linkName,
  imageUrl,
}) => {
  return (
    <Flex
      flexWrap={"wrap"}
      justifyContent="center"
      alignItems={"center"}
      m="10"
    >
      <Image src={imageUrl} width={500} height={500} alt="banner" />

      <Box p={5}>
        <Text color={"gray.500"} fontSize="sm" fontWeight={"medium"}>
          {purpose}
        </Text>
        <Text fontSize="3x1" fontWeight={"bold"}>
          {purpose}
        </Text>
        <Text
          color={"gray.700"}
          fontSize="lg"
          fontWeight={"medium"}
          paddingBottom={"3"}
          paddingTop="e"
        >
          {purpose}
        </Text>

        <Button fontSize={"xl"}>
          <Link href={linkName}>{buttonText}</Link>
        </Button>
      </Box>
    </Flex>
  );
};

export default Banner;
