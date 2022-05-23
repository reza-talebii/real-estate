import React from "react";

import { Box } from "@chakra-ui/react";

import { Navbar } from "./";

const Layout = ({ children }) => {
  return (
    <>
      <Box maxWidth={"1280px"} m="auto">
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>footer</footer>
      </Box>
    </>
  );
};

export default Layout;
