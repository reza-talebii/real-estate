import { Flex, Icon } from "@chakra-ui/react";
import { useContext } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleRight } from "react-icons/fa";

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Flex justifyContent="center" alignItems="center" mr="1">
      <Icon
        as={FaArrowAltCircleRight}
        onClick={() => scrollNext()}
        fontSize="2xl"
        cursor="pointer"
      />
    </Flex>
  );
};

export default RightArrow;
