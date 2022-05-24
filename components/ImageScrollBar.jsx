import Image from "next/image";
import { Box, Icon, Flex } from "@chakra-ui/react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";

const ImageScrollBar = () => {
  return (
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      style={{ overflow: "hidden" }}
    ></ScrollMenu>
  );
};

export default ImageScrollBar;
