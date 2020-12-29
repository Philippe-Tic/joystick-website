import React from 'react';
import {
  Flex, useTheme, IconButton, useColorMode,
} from '@chakra-ui/react';
import { FaTwitter, FaTwitch, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const theme = useTheme();
  const { colorMode } = useColorMode();

  return (
    <Flex
      h={16}
      px={[4, 12, 16, 24]}
      position="absolute"
      bottom="0"
      w="100%"
    >
      <Flex
        h="100%"
        w="100%"
        borderTop={`1px solid ${colorMode === 'dark' ? theme.colors.secondary[200] : theme.colors.secondary[500]}`}
        alignItems="center"
        justifyContent="space-between"
        fontWeight="bold"
      >
        Joystick 2020-2021
        <Flex>
          <IconButton
            as="a"
            href="https://twitter.com/Joystick_Asso"
            target="_blank"
            w={10}
            h={10}
            icon={<FaTwitter />}
            colorScheme="brand"
          />
          <IconButton
            as="a"
            href="https://www.youtube.com/channel/UCfvdfrLlTvt7MshQTaE86qg"
            target="_blank"
            w={10}
            h={10}
            icon={<FaYoutube />}
            colorScheme="brand"
            ml={4}
          />
          <IconButton
            as="a"
            href="https://twitch.tv/tic_gg"
            target="_blank"
            w={10}
            h={10}
            icon={<FaTwitch />}
            colorScheme="brand"
            ml={4}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
