import { ChakraProvider, Box, Divider, Text, Center, useColorModeValue } from '@chakra-ui/react';
import theme from './theme';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <ChakraProvider theme={theme} >
      <Box
        minH="100vh"
        bgGradient={useColorModeValue('linear(to-br, teal.100, blue.50, pink.100)', '')}
        bg={useColorModeValue('transparent', 'gray.900')}
        position="relative"
      >
        <Header />
        <Box w="100%" maxW="7xl"  pt={8} px={{ base: 4, md: 12, lg: 32 }}>
          <Box bg={useColorModeValue('whiteAlpha.70', 'blackAlpha.600')} borderRadius="2xl" boxShadow="2xl" p={{ base: 4, md: 8 }} backdropFilter="blur(8px)">
            <Hero />
            <Divider my={12} borderColor="teal.200" />
            <About />
            <Divider my={12} borderColor="teal.200" />
            <Projects />
            <Divider my={12} borderColor="teal.200" />
            <Contact />
          </Box>
          <Center mt={12} mb={4}>
            <Text color={useColorModeValue('gray.500', 'gray.400')} fontSize="sm">© {new Date().getFullYear()} Kamal Gupta. All rights reserved.</Text>
          </Center>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
