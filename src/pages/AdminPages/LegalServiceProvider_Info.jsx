import React from 'react';
import {
  ChakraProvider,
  CSSReset,
  extendTheme,
  Box,
  Flex,
  VStack,
  Text,
} from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        fontFamily: 'sans-serif',
      },
    },
  },
});

const LegalServiceProviders_Info = () => {
  // Sample counts for legal service providers
  const providerCounts = {
    advocates: 25,
    arbitrators: 15,
    notaries: 10,
    documentWriters: 20,
    mediators: 12,
  };

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <VStack spacing="4" align="center" padding="20px">
        <Text fontSize="xl" fontWeight="bold">
          Legal Service Providers Overview
        </Text>
        <Flex>
          {Object.entries(providerCounts).map(([provider, count]) => (
            <Box
              key={provider}
              flex="1"
              textAlign="center"
              p="4"
              borderWidth="1px"
              borderRadius="md"
              boxShadow="md"
            >
              <Text fontSize="lg" fontWeight="bold" mb="2">
                {provider.charAt(0).toUpperCase() + provider.slice(1)}
              </Text>
              <Text fontSize="xl">{count}</Text>
            </Box>
          ))}
        </Flex>
      </VStack>
    </ChakraProvider>
  );
};

export default LegalServiceProviders_Info;
