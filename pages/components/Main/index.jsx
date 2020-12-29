import React from 'react';
import { Box } from '@chakra-ui/react';

const index = ({ children, ...props }) => (
  <Box
    as="main"
    px={[4, 12, 16, 24]}
    mt={8}
    pb={24}
    {...props}
  >
    {children}
  </Box>
);

export default index;
