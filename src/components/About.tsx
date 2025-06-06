import { Box, Heading, Text, SimpleGrid, Flex, useColorModeValue } from '@chakra-ui/react';
import { FaReact, FaJs, FaFigma, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiChakraui, SiTailwindcss, SiRadixui, SiReactquery, SiNextdotjs, SiStorybook, SiOpenapiinitiative, SiRedux, SiPostman, SiStyledcomponents } from 'react-icons/si';
import { MdCheckCircle, MdOutlineSchema, MdSecurity, MdHttp, MdOutlineCheckBox, MdExtension } from 'react-icons/md';
import { TbBrandVercel } from 'react-icons/tb';
import MotionBox from './MotionBox';

const frontendSkills = [
  { icon: FaReact, label: 'React', desc: 'Building interactive user interfaces with React ecosystem' },
  { icon: SiNextdotjs, label: 'Next.js', desc: 'Full-stack React framework for production' },
  { icon: FaJs, label: 'JavaScript', desc: 'Core web programming language' },
  { icon: SiTypescript, label: 'TypeScript', desc: 'Type-safe JavaScript development' },
  { icon: SiTailwindcss, label: 'TailwindCSS', desc: 'Utility-first CSS framework' },
  { icon: SiChakraui, label: 'Chakra UI', desc: 'Accessible component library' },
  { icon: SiRadixui, label: 'Radix UI', desc: 'Unstyled, accessible UI components' },
  { icon: SiReactquery, label: 'React Query', desc: 'Data fetching and state management' },
  { icon: MdOutlineCheckBox, label: 'React Hook Form', desc: 'Form validation and handling' },
  { icon: SiRedux, label: 'Redux', desc: 'State management for React apps' },
  { icon: SiStyledcomponents, label: 'Styled Components', desc: 'CSS-in-JS styling for React' },
  { icon: FaFigma, label: 'Figma', desc: 'UI/UX design and prototyping' },
  { icon: FaNodeJs, label: 'Node.js', desc: 'Backend JavaScript runtime' },
  { icon: MdCheckCircle, label: 'Framer Motion', desc: 'Animation library for React' },
  { icon: TbBrandVercel, label: 'Vibe Coding', desc: 'Collaborative coding platform' },
];

const tools = [
  { icon: MdOutlineSchema, label: 'Zod', desc: 'TypeScript-first schema validation' },
  { icon: MdSecurity, label: 'JWT', desc: 'JSON Web Token authentication' },
  { icon: MdHttp, label: 'Axios', desc: 'HTTP client for browsers and Node.js' },
  { icon: SiPostman, label: 'Postman', desc: 'API testing and collaboration' },
  { icon: SiStorybook, label: 'Storybook', desc: 'UI component development environment' },
  { icon: SiOpenapiinitiative, label: 'OpenAPI/Swagger', desc: 'API documentation and testing' },
  { icon: MdExtension, label: 'Cursor', desc: 'AI coding assistant/editor' },
];

const Card = ({ icon: Icon, label, desc }: { icon: any; label: string; desc: string }) => (
  <Flex
    direction="column"
    align="flex-start"
    bg={useColorModeValue('white', 'gray.800')}
    borderRadius="lg"
    boxShadow="sm"
    border="1px solid"
    borderColor={useColorModeValue('gray.100', 'gray.700')}
    p={5}
    minH="120px"
    transition="all 0.2s"
    _hover={{ boxShadow: 'md', borderColor: 'teal.200', transform: 'translateY(-2px) scale(1.03)' }}
  >
    <Box as={Icon} boxSize={6} color="teal.400" mb={2} />
    <Text fontWeight="bold" mb={1} color={useColorModeValue('gray.800', 'gray.100')}>{label}</Text>
    <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.300')}>{desc}</Text>
  </Flex>
);

const About = () => {
  return (
    <MotionBox
      as="section"
      id="about"
      py={{ base: 10, md: 16, xl: 24 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2 }}
      bg={useColorModeValue('whiteAlpha.80', 'gray.900')}
      boxShadow="2xl"
      borderRadius="2xl"
      px={{ base: 2, sm: 4, md: 8, xl: 0 }}
      mb={8}
      backdropFilter="blur(10px)"
      maxW="6xl"
      mx="auto"
    >
      <Heading size="lg" mb={8} color={useColorModeValue('teal.600', 'teal.300')} textAlign="center" fontSize={{ base: 'xl', md: '2xl', xl: '3xl' }}>
        Technical Expertise
      </Heading>
      <Heading size="md" mb={4} color={useColorModeValue('gray.700', 'gray.100')} fontSize={{ base: 'md', md: 'lg', xl: 'xl' }}>
        Frontend Development
      </Heading>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6} mb={10}>
        {frontendSkills.map((skill) => (
          <Card key={skill.label} {...skill} />
        ))}
      </SimpleGrid>
      <Heading size="md" mb={4} color={useColorModeValue('gray.700', 'gray.100')} fontSize={{ base: 'md', md: 'lg', xl: 'xl' }}>
        Tools & Libraries
      </Heading>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
        {tools.map((tool) => (
          <Card key={tool.label} {...tool} />
        ))}
      </SimpleGrid>
    </MotionBox>
  );
};

export default About; 