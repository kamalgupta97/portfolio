import {  Heading, Text, Stack, Link, HStack, IconButton, useColorModeValue } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import MotionBox from './MotionBox';

const Contact = () => (
  <MotionBox
    as="section"
    id="contact"
    py={{ base: 10, md: 16, xl: 24 }}
    textAlign="center"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: 0.4 }}
    mb={8}
    bg={useColorModeValue('whiteAlpha.80', 'gray.900')}
    boxShadow="2xl"
    borderRadius="2xl"
    px={{ base: 2, sm: 4, md: 12, xl: 4 }}
    backdropFilter="blur(10px)"
    maxW="4xl"
    mx="auto"
  >
    <Heading size="lg" mb={4} color={useColorModeValue('teal.600', 'teal.300')} fontSize={{ base: 'xl', md: '2xl', xl: '3xl' }}>
      Contact
    </Heading>
    <Text mb={4} color={useColorModeValue('gray.700', 'gray.100')} fontSize={{ base: 'md', md: 'lg', xl: 'xl' }}>
      Feel free to reach out via email or connect with me on social media!
    </Text>
    <Stack spacing={4} align="center">
      <Link href="mailto:Kamaldro97@gmail.com" color={useColorModeValue('teal.500', 'teal.200')} fontWeight="bold">
        Kamaldro97@gmail.com
      </Link>
      <HStack spacing={4} justify="center">
        <IconButton
          as={Link}
          href="https://github.com/kamalgupta97"
          aria-label="GitHub"
          icon={<FaGithub />}
          colorScheme="teal"
          variant="ghost"
          size="lg"
          target="_blank"
          _hover={{ bg: 'teal.600', color: 'white', transform: 'scale(1.05)' }}
          transition="all 0.2s"
        />
        <IconButton
          as={Link}
          href="https://linkedin.com/in/kamalgupta97"
          aria-label="LinkedIn"
          icon={<FaLinkedin />}
          colorScheme="teal"
          variant="ghost"
          size="lg"
          target="_blank"
          _hover={{ bg: 'teal.600', color: 'white', transform: 'scale(1.05)' }}
          transition="all 0.2s"
        />
        <IconButton
          as={Link}
          href="mailto:Kamaldro97@gmail.com"
          aria-label="Email"
          icon={<FaEnvelope />}
          colorScheme="teal"
          variant="ghost"
          size="lg"
          _hover={{ bg: 'teal.600', color: 'white', transform: 'scale(1.05)' }}
          transition="all 0.2s"
        />
      </HStack>
    </Stack>
  </MotionBox>
);

export default Contact; 