import React from 'react';
import Head from 'next/head';
// import Link from 'next/link';
import { Button, useColorMode } from '@chakra-ui/react';

const Home = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button colorScheme="brand" onClick={toggleColorMode}>test1</Button>
    </>
  );
};

export default Home;
