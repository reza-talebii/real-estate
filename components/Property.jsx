import Link from "next/link";
import Image from "next/image";

import { Box, Flex, Text } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";

import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";

const Property = ({ property }) => {
  const {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  } = property;

  const defaultImage = "/assets/default.webp";

  console.log(coverPhoto);

  return (
    <Link href={`/property/${externalID}`} passHref>
      <Flex
        flexWrap={"wrap"}
        w="420px"
        p="5"
        pt="0"
        justifyContent={"flex-start"}
        cursor="pointer"
      >
        <Box>
          <Image
            src={coverPhoto ? coverPhoto.url : defaultImage}
            alt="house"
            width={400}
            height={260}
          />
        </Box>

        <Box w={"full"}>
          <Flex pt={"2"} alignItems="center" justifyContent="space-between">
            <Flex alignItems="center">
              <Box pr="3" color="green.400">
                {isVerified && <GoVerified />}
              </Box>

              <Text fontWeight="bold" fontSize="lg">
                AED {price} {rentFrequency && `/${rentFrequency}`}
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Link>
  );
};

export default Property;
