import { Box, Flex, HStack, Link, Text, useColorMode, IconButton, useColorModeValue } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const links = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box as="header" bg={useColorModeValue('white', 'gray.800')} boxShadow="sm" py={4} px={{ base: 2, sm: 4, md: 8 }} position="sticky" top={0} zIndex={10} maxW="7xl" mx="auto" w="100%">
      <Flex align="center" justify="space-between" direction={{ base: 'column', md: 'row' }}>
        <Text fontWeight="bold" fontSize={{ base: 'lg', md: 'xl' }} color={useColorModeValue('teal.500', 'teal.300')} mb={{ base: 2, md: 0 }}>
          Kamal Gupta
        </Text>
        <HStack spacing={{ base: 2, md: 8 }} as="nav" flexWrap="wrap">
          {links.map((link) => (
            <Link key={link.href} href={link.href} fontWeight="medium" fontSize={{ base: 'sm', md: 'md' }} color={useColorModeValue('gray.700', 'gray.100')} _hover={{ color: useColorModeValue('teal.500', 'teal.200') }}>
              {link.label}
            </Link>
          ))}
          <IconButton
            aria-label="Toggle color mode"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            variant="ghost"
            size="md"
            ml={2}
          />
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header; 