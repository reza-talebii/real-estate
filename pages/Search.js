import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

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

      <Flex flexWrap="wrap">
        {properties.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>

      {properties.length === 0 && (
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

export default Search;
