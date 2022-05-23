import Router from "next/router";
import Head from "next/head";

import Nprogress from "nprogress";
import { ChakraProvider } from "@chakra-ui/react";

import { Layout } from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Real Estate</title>
      </Head>

      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
