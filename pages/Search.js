import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import { SearchFilters } from "../components";

import { Flex, Box, Text, Icon } from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";

const Search = () => {
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
    </Box>
  );
};

export default Search;
