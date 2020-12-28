import React from 'react';
import Head from 'next/head';
// import Link from 'next/link';
import {
  Button, useColorMode, Box, Image,
} from '@chakra-ui/react';
import Header from 'components/Header';

const Home = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        test
      </Header>
      <Button colorScheme="brand" onClick={toggleColorMode}>test1</Button>
      <Box boxSize="xs">
        <Image src={colorMode === 'dark' ? '/logowhite.svg' : '/logoblack.svg'} alt="Logo" />
      </Box>
    </>
  );
};

export default Home;
