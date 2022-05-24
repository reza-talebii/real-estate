import { Flex, Icon } from "@chakra-ui/react";
import { useContext } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Flex justifyContent="center" alignItems="center" mr="1">
      <Icon
        as={FaArrowAltCircleLeft}
        onClick={() => scrollPrev()}
        fontSize="2xl"
        cursor="pointer"
      />
    </Flex>
  );
};

export default LeftArrow;
