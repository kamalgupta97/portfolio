import { forwardRef } from 'react';
import { motion, isValidMotionProp } from 'framer-motion';
import { Box } from '@chakra-ui/react';
import type { BoxProps } from '@chakra-ui/react';
import type { HTMLMotionProps } from 'framer-motion';

const MotionBox = motion(
  forwardRef<HTMLDivElement, BoxProps & HTMLMotionProps<'div'>>((props, ref) => <Box ref={ref} {...props} />),
  {
    // @ts-ignore
    shouldForwardProp: (prop: string) => isValidMotionProp(prop) || typeof prop === 'string',
  }
);

export default MotionBox; 