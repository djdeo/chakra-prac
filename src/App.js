import React from 'react';
import { ChakraProvider, Box, Grid, Button, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3} grap={2} gridColumn={3} gridRow={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Box
            m={2}
            py={6}
            rounded="md"
            w="120px"
            h="80px"
            color="black.500"
            bg="tomato"
            opacity="0.85"
            _hover={{ opacity: 1, border: '1px solid red' }}
            boxShadow="xl"
            justifySelf="center"
          >
            Center Box
          </Box>
        </Grid>
        <Box role="group">
          <Box
            _hover={{ fontWeight: 'semibold' }}
            _groupHover={{ color: 'teal' }}
          >
            hover me
          </Box>
        </Box>
        <Box
          w="120px"
          h="80px"
          bgGradient="linear(to-t, blue.200, green.200)"
        ></Box>
        <Button as="a" target="_blank" variant="outline">
          I am a link{' '}
        </Button>
      </Box>
    </ChakraProvider>
  );
}

export default App;
