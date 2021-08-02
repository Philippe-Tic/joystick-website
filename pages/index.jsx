import React from 'react';
import Head from 'next/head';
import {
  useColorMode, Box, Image, Heading, Text, Flex, SimpleGrid, Button, Link,
} from '@chakra-ui/react';
import Header from 'components/Header';
import Main from 'components/Main';
import Footer from 'components/Footer';
import { FaTwitter, FaTwitch, FaYoutube } from 'react-icons/fa';

const Home = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#031428" />
        <meta name="msapplication-TileColor" content="#031428" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="Joystick, Association Loi 1901 demeurant à Rouen. Actif dans la communauté
          Super Smash Bros Ultimate et e-sportive en général."
        />
        <title>Joystick 🕹</title>
      </Head>
      <Box minH="100vh">
        <Header />
        <Main>
          <Flex
            borderRadius={4}
            bg={colorMode === 'dark' ? 'brand.800' : 'brand.100'}
            p={10}
            justifyContent="center"
            direction="column"
            alignItems="center"
          >
            <Image maxW="30rem" src={colorMode === 'dark' ? '/logowhite.svg' : '/logoblack.svg'} alt="Logo Joystick" />
            <Heading as="h1" size="xl" textAlign="center" mt={[16, 16, 32]}>
              Joystick - Association Loi 1901 - Rouen
            </Heading>
          </Flex>
          <Box mx={['3rem', '4rem', '8rem', '12rem', '15rem']} as="hr" my={12} />
          <Heading id="association" as="h2" size="lg">
            L'Association
          </Heading>
          <Text mt={2}>
            Créée le 23 décembre 2020 à la suite du Joy'sTic (tournoi en ligne sur Super Smash Bros Ultimate),
            Joystick est une association à but non lucratif ayant pour but l'organisation d'évènements e-sportifs
            en France. Notre ambition est de développer la scène e-sportive localement, en organisant différents
            évènements tels que des tournois, des sessions ouvertes et en proposant diverses activités en association
            avec d'autres acteurs des communautés e-sportives existantes.
          </Text>
          <SimpleGrid mt={8} columns={[1, 1, 2, 2]} spacing={8}>
            <Flex justifyContent="center">
              <Image objectFit="cover" maxH="20rem" borderRadius={4} src="joystic1.jpg" alt="Photo des organisateurs du Joy'sTic" />
            </Flex>
            <Flex flexDir="column" justifyContent="center" alignItems="center">
              <Heading as="h3" size="md" textAlign="center">
                Joy'sTic évènement 128 joueurs en ligne
              </Heading>
              <Text mt={4} textAlign="center">
                Le Joy'sTic, notre premier évènement regroupait 128 joueurs en ligne le samedi 19 décembre 2020.
                L'évènement a réussi à captiver près de 100 spectateurs en moyenne sur Twitch, pour un pic a 143
                avec 800 spectateurs uniques sur live de 7h sur la chaîne de Tic, président de l'association.
                Le live consistant a commenter de manière professionnelle l'évènement en étant regroupé au studio
                de notre partenaire, le Stormwin de Rouen, sponsorisant l'évènement et nous aidant sur la partie
                montage financier du tournoi.
              </Text>
              <Flex>
                <Button
                  as="a"
                  href="https://stormwin.bar/"
                  target="_blank"
                  mt={8}
                  mx={4}
                  colorScheme="brand"
                >
                  Stormwin
                </Button>
                <Button
                  as="a"
                  href="https://twitch.tv/tic_gg/"
                  target="_blank"
                  mt={8}
                  mx={4}
                  colorScheme="secondary"
                >
                  Twitch de Tic
                </Button>
              </Flex>
            </Flex>
          </SimpleGrid>

          <SimpleGrid mt={12} columns={[1, 1, 2, 2]} spacing={8}>
            <Flex order={[2, 2, 1, 1]} flexDir="column" justifyContent="center" alignItems="center">
              <Heading textAlign="center" as="h3" size="md">
                Un évènement sponsorisé Stormwin, Reveal Agency & BearStudio
              </Heading>
              <Text mt={4} textAlign="center">
                Cet évènement a pu être organisé par le travail acharné de notre équipe,
                de Reveal Agency qui nous a accompagné sur la production et la régie de
                tout l'évènement ainsi que le BearStudio, qui a sponsorisé l'évènement à
                hauteur de 500€, entièrement reversé pour le top 8 du tournoi.
              </Text>
              <Flex>
                <Button
                  as="a"
                  href="https://facebook.com/WeAreReveal/"
                  target="_blank"
                  mt={8}
                  mx={4}
                  colorScheme="brand"
                >
                  Reveal Agency
                </Button>
                <Button
                  as="a"
                  href="https://www.bearstudio.fr/"
                  target="_blank"
                  mt={8}
                  mx={4}
                  colorScheme="secondary"
                >
                  BearStudio
                </Button>
              </Flex>
            </Flex>
            <Flex justifyContent="center" order={[1, 1, 2, 2]}>
              <Image objectFit="cover" maxH="20rem" borderRadius={4} src="smashgg.jpg" alt="Affiche Joy'sTic, tournoi SSBU" />
            </Flex>
          </SimpleGrid>
          <Box mx={['3rem', '4rem', '8rem', '12rem', '15rem']} as="hr" mb={8} mt={12} />
          <Flex flexDir="column" alignItems="flex-start">
            <Heading id="partenariat" as="h2" size="lg">
              Demande de Partenariat
            </Heading>
            <Text mt={2}>
              Notre association naissante est composée aujourd'hui de 7 membres actifs. Nous mettons
              tout en oeuvre pour pouvoir proposer des évènements dignes de ce nom d'ici peu.
              Pour pouvoir proposer des évènements qualitatifs, nous avons besoin de moyens matériels
              et financiers. C'est pourquoi nous recherchons activement des partenaires et des sponsors
              qui nous permettraient d'organiser toujours plus d'évènements, en mettant bien entendu en avant
              les diverses entités qui auront choisis de nous suivre.
            </Text>
            <Text w="100%" textAlign="center" fontWeight="bold" mt={4}>
              Pour toute question ou renseignement, nous sommes disponibles par mail ou par téléphone au 0603018079.
            </Text>
            <Flex mt={4} w="100%" justifyContent="center">
              <Button as="a" href="mailto:joystick.asso@gmail.com" size="lg" colorScheme="brand">Nous envoyer un mail</Button>
            </Flex>
          </Flex>
          <Box mx={['3rem', '4rem', '8rem', '12rem', '15rem']} as="hr" my={12} />
          <Flex flexDir="column" alignItems="flex-start" my={12}>
            <Heading id="reseaux" as="h2" size="lg">
              Nos réseaux
            </Heading>
            <Text mt={2}>
              Nous sommes actifs sur plusieurs réseaux sociaux, où vous pouvez retrouver nos
              évènements et nos actualités.
            </Text>
            <Flex mt={8} w="100%" justifyContent="space-around">
              <Button target="_blank" colorScheme="blue" as="a" href="https://twitter.com/Joystick_Asso">
                <Box as={FaTwitter} mr={4} />
                Twitter
              </Button>
              <Button target="_blank" colorScheme="purple" as="a" href="https://twitch.tv/tic_gg">
                <Box as={FaTwitch} mr={4} />
                Twitch
              </Button>
              <Button target="_blank" colorScheme="red" as="a" href="https://www.youtube.com/channel/UCfvdfrLlTvt7MshQTaE86qg">
                <Box as={FaYoutube} mr={4} />
                Youtube
              </Button>
            </Flex>
          </Flex>
          <Flex flexDir="column" alignItems="flex-start">
            <Heading id="partenariat" as="h2" size="lg">
              Nos Partenaires
            </Heading>
            <Flex mt={2} w="100%" justifyContent="space-between">
              <Link d="flex" alignItems="center" justifyContent="center" href="https://bearstudio.fr/" target="_blank" w="100%">
                <Image maxW="14rem" src="/bearstudio.svg" alt="Logo Bearstudio" />
              </Link>
              <Link d="flex" alignItems="center" justifyContent="center" href="https://ldlc.com/" target="_blank" w="100%">
                <Image maxW="9rem" src="/ldlc.svg" alt="Logo LDLC" />
              </Link>
            </Flex>
          </Flex>
        </Main>
        <Footer />
      </Box>
    </>
  );
};

export default Home;
