import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";

import {
  Flex,
  Select,
  Box,
  Text,
  Input,
  Spinner,
  Icon,
  Button,
} from "@chakra-ui/react";

import { MdCancel } from "react-icons/md";

const SearchFilter = () => {
  const [filters, setFilters] = useState({});

  return (
    <Flex bg="gray.100" p="4" justifyContent="center" flexWrap="wrap"></Flex>
  );
};

export default SearchFilter;
