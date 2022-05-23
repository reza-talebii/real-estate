import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import { baseUrl, fetchApi } from "../utils/fetchApi";

import { Property, SearchFilters } from "../components";

import { Flex, Box, Text, Icon } from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";

const Search = ({ properties }) => {
  const router = useRouter();
  const [searchFilters, setSearchFilters] = useState(null);

  return (
    <Box>
      <Flex
        borderBottom="1px"
        borderColor="gray.200"
        cursor="pointer"
        bg="gray.100"
        fontWeight="black"
        fontSize="lg"
        justifyContent="center"
        alignItems="center"
        onClick={() => setSearchFilters(!searchFilters)}
      >
        <Text>Search Property By Filters</Text>
        <Icon w="7" as={BsFilter} pl="2" />
      </Flex>

      {searchFilters && <SearchFilters />}

      <Text fontSize="3x1" p="4" fontWeight="bold">
        Properties {router.query.purpose}
      </Text>

      <Flex flexWrap="wrap" justifyContent="center">
        {properties?.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>

      {properties?.length === 0 && (
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          marginTop="5"
          mb="5"
        >
          <Image
            src="/assets/noresult.svg"
            alt="not found"
            width={200}
            height={200}
          />
          <Text fontSize="30px" mt="3">
            No Results Found
          </Text>
        </Flex>
      )}
    </Box>
  );
};

export async function getServerSideProps({ query }) {
  const purpose = query.purpose || "for-rent";
  const rentFrequency = query.rentFrequency || "yearly";
  const minPrice = query.minPrice || "0";
  const maxPrice = query.maxPrice || "1000000";
  const roomsMin = query.roomsMin || "0";
  const bathsMin = query.bathsMin || "0";
  const sort = query.sort || "price-desc";
  const areaMax = query.areaMax || "35000";
  const locationExternalIDs = query.locationExternalIDs || "5002";
  const categoryExternalID = query.categoryExternalID || "4";

  const data = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
  );

  return {
    props: {
      properties: data?.hits,
    },
  };
}

export default Search;
