import React, { useState, useEffect } from 'react';
import {
  ChakraProvider,
  CSSReset,
  extendTheme,
  Box,
  VStack,
  HStack,
  Text,
  Image,
  SimpleGrid,
  Badge,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
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

const Advocate = () => {
  const [advocateData, setAdvocateData] = useState({});
  const [casesData, setCasesData] = useState([]);

  // Placeholder function to simulate fetching advocate data from the database
  const fetchAdvocateData = () => {
    // Replace this with your actual API call to fetch advocate data
    const mockAdvocateData = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      location: 'City, Country',
      specialisation: 'Family Law',
      image: 'https://placekitten.com/200/200', // Smaller image URL
      rating: 4.5,
      casesHandled: 50,
      winRatio: 75,
      totalCases: 100,
      activeCases: 25,
      completedCases: 75,
    };
    setAdvocateData(mockAdvocateData);
  };

  // Placeholder function to simulate fetching cases data from the database
  const fetchCasesData = () => {
    // Replace this with your actual API call to fetch cases data
    const mockCasesData = [
      {
        id: 1,
        clientName: 'Client A',
        caseDescription: 'Family Dispute',
        status: 'Active',
      },
      {
        id: 2,
        clientName: 'Client B',
        caseDescription: 'Criminal Defense',
        status: 'Pending',
      },
      // Add more data as needed
    ];
    setCasesData(mockCasesData);
  };

  useEffect(() => {
    // Fetch advocate data and cases data when the component mounts
    fetchAdvocateData();
    fetchCasesData();
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <VStack spacing="4" align="center" padding="20px">
        {/* Profile section */}
        <Box width="100%" textAlign="center">
          <Text fontSize="2xl" fontWeight="bold">
            Profile
          </Text>
        </Box>
        <HStack
          spacing="4"
          justify="space-between"
          width="100%"
          paddingX="20px"
        >
          {/* Advocate details */}
          <VStack align="start" width="45%" textAlign="left">
            <Text fontWeight="bold" color="black">
              Name: {advocateData.name}
            </Text>
            <Text fontWeight="bold" color="black">
              Email: {advocateData.email}
            </Text>
            <Text fontWeight="bold" color="black">
              Phone: {advocateData.phone}
            </Text>
            <Text fontWeight="bold" color="black">
              Location: {advocateData.location}
            </Text>
            <Text fontWeight="bold" color="black">
              Specialisation: {advocateData.specialisation}
            </Text>
          </VStack>

          {/* Advocate card */}
          <Box
            boxShadow="md"
            borderRadius="md"
            p="2"
            width="20%"
            height="20%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            bg="white"
            color="black"
          >
            <Image
              boxSize="100px"
              borderRadius="full"
              src={advocateData.image}
              alt="Advocate"
            />
            <Text fontSize="lg" fontWeight="bold" marginTop="2" color="black">
              {advocateData.name}
            </Text>
            <HStack
              spacing="1"
              alignSelf="stretch"
              justifyContent="space-between"
              width="100%"
            >
              <Text fontSize="sm" color="black">
                Rating: {advocateData.rating}
              </Text>
              <Text fontSize="sm" color="black">
                Cases Handled: {advocateData.casesHandled}
              </Text>
              <Text fontSize="sm" color="black">
                Win Ratio: {advocateData.winRatio}%
              </Text>
            </HStack>
          </Box>
        </HStack>

        {/* Total, Active, Completed cases */}
        <SimpleGrid columns={3} spacing="4" width="100%" paddingX="20px">
          <Box
            backgroundColor="purple.500"
            borderRadius="md"
            p="4"
            textAlign="center"
            color="white"
          >
            <Text fontWeight="bold" fontSize="lg">
              Total Cases
            </Text>
            <Text>{advocateData.totalCases}</Text>
          </Box>
          <Box
            backgroundColor="purple.500"
            borderRadius="md"
            p="4"
            textAlign="center"
            color="white"
          >
            <Text fontWeight="bold" fontSize="lg">
              Active Cases
            </Text>
            <Text>{advocateData.activeCases}</Text>
          </Box>
          <Box
            backgroundColor="purple.500"
            borderRadius="md"
            p="4"
            textAlign="center"
            color="white"
          >
            <Text fontWeight="bold" fontSize="lg">
              Completed Cases
            </Text>
            <Text>{advocateData.completedCases}</Text>
          </Box>
        </SimpleGrid>

        {/* Cases Table */}
        <Table variant="simple" width="100%" paddingX="20px">
          <Thead>
            <Tr>
              <Th>ID No</Th>
              <Th>Client Name</Th>
              <Th>Case Description</Th>
              <Th>Status</Th>
              <Th>Connect</Th>
            </Tr>
          </Thead>
          <Tbody>
            {casesData.map(caseItem => (
              <Tr key={caseItem.id}>
                <Td>{caseItem.id}</Td>
                <Td>{caseItem.clientName}</Td>
                <Td>{caseItem.caseDescription}</Td>
                <Td>{caseItem.status}</Td>
                <Td>
                  <Button colorScheme="teal" size="sm">
                    Connect
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </VStack>
    </ChakraProvider>
  );
};

export default Advocate;
