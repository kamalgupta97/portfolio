import { Box, Heading, Link, Stack, Image, Flex, useColorModeValue, Icon, HStack } from '@chakra-ui/react';
import { FaReact, FaGithub, FaExternalLinkAlt, FaUsers } from 'react-icons/fa';
import { SiChakraui, SiTypescript } from 'react-icons/si';
import MotionBox from './MotionBox';

const projects = [
  {
    title: 'Personal Portfolio',
    description: 'A modern, responsive portfolio website built with React and Chakra UI.',
    link: 'https://github.com/yourusername/portfolio',
    live: 'https://portfolio-demo.netlify.app',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
    tech: [
      { icon: FaReact, label: 'React' },
      { icon: SiChakraui, label: 'Chakra UI' },
      { icon: SiTypescript, label: 'TypeScript' },
    ],
    group: false,
  },
  {
    title: 'Task Manager App',
    description: 'A productivity app to manage daily tasks, built with React and TypeScript.',
    link: 'https://github.com/yourusername/task-manager',
    live: 'https://task-manager-demo.netlify.app',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    tech: [
      { icon: FaReact, label: 'React' },
      { icon: SiTypescript, label: 'TypeScript' },
    ],
    group: false,
  },
];

const Projects = () => {
  const bg = useColorModeValue('whiteAlpha.80', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const descBg = useColorModeValue('teal.50', 'whiteAlpha.100');
  const textColor = useColorModeValue('gray.700', 'gray.100');
  const accent = useColorModeValue('teal.600', 'teal.300');
  const techColor = useColorModeValue('gray.600', 'gray.300');
  const iconColor = useColorModeValue('teal.400', 'teal.200');
  const actionColor = useColorModeValue('teal.500', 'teal.200');
  const borderColor = useColorModeValue('teal.200', 'teal.700');

  return (
    <MotionBox
      as="section"
      id="projects"
      py={{ base: 10, md: 16, xl: 24 }}
      px={{ base: 2, sm: 4, md: 8, xl: 0 }}
      bg={bg}
      borderRadius="2xl"
      mb={8}
      boxShadow="2xl"
      backdropFilter="blur(10px)"
      maxW="7xl"
      mx="auto"
    >
      <Heading size="lg" mb={16} color={accent} textAlign="center" letterSpacing="wide" fontWeight="extrabold" fontSize={{ base: 'xl', md: '2xl', xl: '3xl' }}>
        Some Things I've Built
      </Heading>
      <Stack spacing={20} maxW="6xl" mx="auto">
        {projects.map((project) => (
          <Flex
            key={project.title}
            direction={{ base: 'column', lg: 'row' }}
            align="center"
            justify="space-between"
            bg={cardBg}
            borderRadius="2xl"
            boxShadow="2xl"
            px={{ base: 2, sm: 4, md: 12, lg: 20 }}
            py={{ base: 6, md: 14 }}
            gap={{ base: 6, md: 12 }}
            minH={{ base: 'auto', md: '420px' }}
            position="relative"
            w="100%"
            maxW="100%"
            _hover={{ boxShadow: '3xl', transform: 'translateY(-2px) scale(1.01)' }}
            transition="all 0.2s"
            border="1px solid"
            borderColor={borderColor}
            flexWrap={{ base: 'wrap', lg: 'nowrap' }}
          >
            {/* Left: Details */}
            <Box flex={1} color={textColor} w="100%" maxW="540px" zIndex={2}>
              <Heading size="md" mb={8} color={accent} fontWeight="extrabold" letterSpacing="tight" lineHeight={1.1}>
                {project.title}
              </Heading>
              {/* Glassmorphism Description Card */}
              <Box
                mb={8}
                bg={descBg}
                p={{ base: 6, md: 8 }}
                borderRadius="2xl"
                fontSize={{ base: 'sm', md: 'md' }}
                color={textColor}
                fontWeight="medium"
                boxShadow="2xl"
                backdropFilter="blur(16px)"
                border={`2px solid ${borderColor}`}
                maxW="100%"
                lineHeight={1.6}
                letterSpacing="wide"
              >
                {project.description}
              </Box>
              {/* Tech Stack as muted text/icons */}
              <Box mb={10} fontSize={{ base: 'xs', md: 'sm' }} color={techColor} fontWeight="semibold" letterSpacing="0.04em" display="flex" flexWrap="wrap" gap={4}>
                {project.tech.map((tech) => (
                  <Box as="span" key={tech.label} mr={5} display="inline-flex" alignItems="center" fontSize="1em">
                    <Icon as={tech.icon} boxSize={5} color={iconColor} mr={2} />
                    {tech.label}
                  </Box>
                ))}
              </Box>
              {/* Action Icons and Group Badge */}
              <HStack spacing={10} mt={8} align="center">
                <Link href={project.link} target="_blank" display="flex" alignItems="center" color={actionColor} _hover={{ color: accent }} fontSize="md" fontWeight="bold">
                  <Icon as={FaGithub} boxSize={5} mr={2} /> GitHub
                </Link>
                {project.live && (
                  <Link href={project.live} target="_blank" display="flex" alignItems="center" color={actionColor} _hover={{ color: accent }} fontSize="md" fontWeight="bold">
                    <Icon as={FaExternalLinkAlt} boxSize={5} mr={2} /> Live Demo
                  </Link>
                )}
                {project.group && (
                  <Box display="flex" alignItems="center" color={actionColor} fontSize="md" fontWeight="bold">
                    <Icon as={FaUsers} boxSize={5} mr={2} /> Group Project
                  </Box>
                )}
              </HStack>
            </Box>
            {/* Right: Image */}
            <Box flexShrink={0} display="flex" justifyContent="flex-end" alignItems="center" w={{ base: '100%', md: '420px', xl: '520px' }} h={{ base: 'auto', md: '320px' }} ml={{ lg: 8 }} mt={{ base: 10, lg: 0 }}>
              <Image
                src={project.image}
                alt={project.title + ' screenshot'}
                borderRadius="2xl"
                boxShadow="2xl"
                w={{ base: '100%', md: '420px', xl: '520px' }}
                h={{ base: 'auto', md: '320px' }}
                objectFit="cover"
                bg={useColorModeValue('gray.100', 'gray.700')}
                border={`2.5px solid ${borderColor}`}
              />
            </Box>
          </Flex>
        ))}
      </Stack>
    </MotionBox>
  );
};

export default Projects; 