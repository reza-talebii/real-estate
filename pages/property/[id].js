import { Box, Flex, Spacer, Text } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";

import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";

import millify from "millify";
import { baseUrl, fetchApi } from "../../utils/fetchApi";
import { ImageScrollBar } from "../../components";

const PropertyDetail = ({ propertyDetail }) => {
  const {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
  } = propertyDetail;

  return (
    <Box maxWidth="1000px" m="auto" p="4">
      {photos && <ImageScrollBar data={photos} />}
    </Box>
  );
};

export async function getServerSideProps({ params: { id } }) {
  const property = await fetchApi(
    `${baseUrl}/properties/detail?externalID=${id}`
  );

  return {
    props: {
      propertyDetail: property,
    },
  };
}

export default PropertyDetail;
