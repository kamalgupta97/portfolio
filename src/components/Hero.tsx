import { Box, Heading, Text, Button, Avatar, Icon, Center, useColorModeValue } from '@chakra-ui/react';
import MotionBox from './MotionBox';
import { FaArrowDown, FaArrowRight } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import profileImg from '../assets/profile.jpeg';

const gradientText = {
  bgGradient: 'linear(to-r, teal.400, blue.400, pink.400)',
  bgClip: 'text',
  fontWeight: 'extrabold',
  fontSize: { base: '3xl', md: '5xl' },
  animation: 'gradientMove 3s ease-in-out infinite',
  style: {
    backgroundSize: '200% 200%',
    animation: 'gradientMove 3s ease-in-out infinite',
  },
};

const taglines = [
  'Crafting beautiful UIs.',
  'Building performant web apps.',
  'Turning ideas into reality.',
];

function type(
  taglines: string[],
  taglineIdx: number,
  setDisplayed: React.Dispatch<React.SetStateAction<string>>,
  setTaglineIdx: React.Dispatch<React.SetStateAction<number>>
) {
  let timeout: ReturnType<typeof setTimeout> | undefined;
  let char = 0;
  setDisplayed('');
  function innerType() {
    if (char < taglines[taglineIdx].length) {
      setDisplayed((prev) => prev + taglines[taglineIdx][char]);
      char++;
      timeout = setTimeout(innerType, 40);
    } else {
      timeout = setTimeout(() => {
        setTaglineIdx((i) => (i + 1) % taglines.length);
      }, 1200);
    }
  }
  innerType();
  return () => clearTimeout(timeout);
}

const Hero = () => {
  // Typing effect for tagline
  const [taglineIdx, setTaglineIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    return type(taglines, taglineIdx, setDisplayed, setTaglineIdx);
  }, [taglineIdx]);

  return (
    <MotionBox
      as="section"
      id="hero"
      py={{ base: 16, md: 24, xl: 32 }}
      px={{ base: 2, sm: 4, md: 8, xl: 4 }}
      textAlign="center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      position="relative"
      maxW="5xl"
      mx="auto"
    >
      <Center mb={8}>
        <Avatar
          size="2xl"
          boxSize="300px"
          name="Kamal Gupta"
          src={profileImg}
          boxShadow="2xl"
          border="6px solid"
          borderColor="whiteAlpha.900"
        />
      </Center>
      <Heading {...gradientText} mb={2} fontSize={{ base: '2xl', sm: '3xl', md: '5xl', xl: '6xl' }}>
        Kamal Gupta
      </Heading>
      <Text fontSize="xl" color={useColorModeValue('teal.700', 'teal.200')} minH="32px" mb={2}>
        {displayed}
        <Box as="span" color={useColorModeValue('teal.400', 'teal.200')} fontWeight="bold" ml={1}>
          |
        </Box>
      </Text>
      <Text maxW={{ base: '100%', md: '2xl' }} color={useColorModeValue('gray.600', 'gray.300')} mx="auto" mb={6} fontSize={{ base: 'md', md: 'lg', xl: 'xl' }}>
        Welcome to my portfolio! I build beautiful and performant web applications with React, TypeScript, and modern UI frameworks.
      </Text>
      <Button
        as="a"
        href="#projects"
        colorScheme="teal"
        size="lg"
        rightIcon={<FaArrowRight />}
        _hover={{ bg: 'teal.600', color: 'white', transform: 'scale(1.05)' }}
        transition="all 0.2s"
      >
        View My Work
      </Button>
      <Center mt={16} position="absolute" left={0} right={0} bottom={8}>
        <Icon as={FaArrowDown} color="teal.400" boxSize={8} sx={{ animation: 'bounce 1.5s infinite' }} />
      </Center>
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(12px); }
        }
      `}</style>
    </MotionBox>
  );
};

export default Hero; 