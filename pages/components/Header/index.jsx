import React, { useState } from 'react';
import {
  Flex, Image, useColorMode, Link as ChakraLink, useTheme, List, ListItem, IconButton,
} from '@chakra-ui/react';
import Link from 'next/link';
import { HamburgerIcon, SunIcon, StarIcon } from '@chakra-ui/icons';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const theme = useTheme();
  const [menuDisplay, setMenuDisplay] = useState('none');

  const toggleMenu = () => {
    if (menuDisplay === 'none') {
      setMenuDisplay('block');
    } else {
      setMenuDisplay('none');
    }
  };
  return (
    <Flex
      as="header"
      h={20}
      px={[4, 12, 16, 24]}
      w="100%"
    >
      <Flex
        direction={['column', 'column', 'column', 'row']}
        borderBottom={`1px solid ${colorMode === 'dark' ? theme.colors.brand[200] : theme.colors.brand[500]}`}
        h="100%"
        w="100%"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Flex minH="100%" w={['100%', '100%', '100%', 'auto']} justifyContent="space-between" alignItems="center">
          <Link href="/">
            <ChakraLink
              d="flex"
              h="100%"
            >
              <Image
                w={32}
                h={20}
                src={colorMode === 'dark' ? '/logowhite.svg' : '/logoblack.svg'}
                alt="ogo"
              />
            </ChakraLink>
          </Link>
          <Flex alignItems="center">
            <IconButton
              display={['inline-block', 'inline-block', 'inline-block', 'none']}
              w={10}
              h={10}
              aria-label="Light/Dark Theme"
              icon={colorMode === 'dark' ? <SunIcon /> : <StarIcon />}
              mr={4}
              onClick={toggleColorMode}
            />
            <IconButton
              display={['inline-block', 'inline-block', 'inline-block', 'none']}
              w={10}
              h={10}
              aria-label="Menu"
              icon={<HamburgerIcon />}
              colorScheme="secondary"
              onClick={toggleMenu}
            />
          </Flex>
        </Flex>
        <List
          bg={[
            colorMode === 'dark' ? 'gray.800' : 'white',
            colorMode === 'dark' ? 'gray.800' : 'white',
            colorMode === 'dark' ? 'gray.800' : 'white',
            'transparent',
          ]}
          borderBottom={[`1px solid ${theme.colors.brand[200]}`, `1px solid ${theme.colors.brand[200]}`, `1px solid ${theme.colors.brand[200]}`, 'none']}
          mt="-2px"
          display={[menuDisplay, menuDisplay, menuDisplay, 'flex']}
          alignItems="center"
          w="100%"
          textAlign="center"
          justifyContent="flex-end"
          zIndex="1"
          flexDir={['column', 'column', 'column', 'row']}
        >
          <ChakraLink w={['100%', '100%', '100%', 'auto']} href="#association" mx={4}>
            <ListItem fontWeight="bold" p={4}>
              L'Association
            </ListItem>
          </ChakraLink>

          <ChakraLink w={['100%', '100%', '100%', 'auto']} href="#partenariat" mx={4}>
            <ListItem fontWeight="bold" p={4}>
              Demande de Partenariat
            </ListItem>
          </ChakraLink>

          <ChakraLink w={['100%', '100%', '100%', 'auto']} href="#reseaux" mx={4}>
            <ListItem fontWeight="bold" p={4}>
              Nos Réseaux
            </ListItem>
          </ChakraLink>

          <ChakraLink w={['100%', '100%', '100%', 'auto']} href="#partenaires" mx={4}>
            <ListItem fontWeight="bold" p={4}>
              Nos Partenaires
            </ListItem>
          </ChakraLink>

          <IconButton
            display={['none', 'none', 'none', 'inline-block']}
            w={10}
            h={10}
            aria-label="Light/Dark Theme"
            icon={colorMode === 'dark' ? <SunIcon /> : <StarIcon />}
            onClick={toggleColorMode}
            ml={4}
          />
        </List>
      </Flex>
    </Flex>
  );
};

export default Header;
