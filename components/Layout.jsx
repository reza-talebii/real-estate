import React from "react";

import { Box } from "@chakra-ui/react";

import { Navbar, Footer } from "./";

const Layout = ({ children }) => {
  return (
    <>
      <Box maxWidth={"1280px"} m="auto">
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
