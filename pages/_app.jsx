/* eslint-disable */
import React from 'react';
import { ChakraProvider, extendTheme, useTheme } from '@chakra-ui/react';

const config = {
  useSystemColorMode: true,
  initialColorMode: "dark",
}

const colors = {
  brand: {
    100: '#bfcaf5',
    200: '#95a6e9',
    300: '#6c83df',
    400: '#435fd5',
    500: '#2b46bc',
    600: '#203693',
    700: '#16276a',
    800: '#0b1742',
    900: '#02081b'
  },
  secondary: {
    100: '#fabad9',
    200: '#f18ec0',
    300: '#ea62a5',
    400: '#e3368b',
    500: '#c91c72',
    600: '#9d1458',
    700: '#720c3f',
    800: '#460426',
    900: '#1d0010'
  },
  gray: {
    50: '#f2f2f2',
    100: '#d9d9d9',
    200: '#bfbfbf',
    300: '#a6a6a6',
    400: '#8c8c8c',
    500: '#737373',
    600: '#595959',
    700: '#404040',
    800: '#101214',
    900: '#0d0d0d',
  }
}

const theme = extendTheme({ config, colors })

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
