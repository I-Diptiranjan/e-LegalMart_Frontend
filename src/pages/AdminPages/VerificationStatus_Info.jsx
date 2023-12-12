import React, { useState, useEffect } from 'react';
import {
  ChakraProvider,
  CSSReset,
  extendTheme,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  VStack,
  Text,
  Box,
  HStack,
  Button,
  Input,
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

const VerificationPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [legalServiceProviders, setLegalServiceProviders] = useState([]);
  const [selectedProvider, setSelectedProvider] = useState(null);

  // Placeholder function to simulate fetching data from the database
  const fetchData = () => {
    // Replace this with your actual API call to fetch legal service providers
    const mockData = [
      {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
        idProof: 'A1234567',
        licenseId: 'L9876543',
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        phone: '987-654-3210',
        idProof: 'B7654321',
        licenseId: 'L8765432',
      },
      // Add more data as needed
    ];
    setLegalServiceProviders(mockData);
  };

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []);

  const handleVerify = id => {
    // Placeholder function to simulate verification from the database
    // Replace this with your actual API call for verification
    console.log('Verifying legal service provider with ID:', id);
  };

  const handleAccept = id => {
    // Placeholder function to simulate acceptance
    // Replace this with your actual API call for acceptance
    console.log('Accepting legal service provider with ID:', id);
  };

  const handleReject = id => {
    // Placeholder function to simulate rejection
    // Replace this with your actual API call for rejection
    console.log('Rejecting legal service provider with ID:', id);
  };

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <VStack spacing="4" align="center" padding="20px">
        <Text fontSize="xl" fontWeight="bold">
          Verification Page
        </Text>
        {/* Circular and professional search bar */}
        <Input
          size="sm"
          placeholder="Search by name, email, or phone"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          borderRadius="full"
        />
        {/* Table of legal service providers */}
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Phone</Th>
              <Th>ID Proof</Th>
              <Th>License ID</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {legalServiceProviders
              .filter(
                provider =>
                  provider.name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                  provider.email
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                  provider.phone
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
              )
              .map(provider => (
                <Tr
                  key={provider.id}
                  cursor="pointer"
                  bg={
                    selectedProvider && selectedProvider.id === provider.id
                      ? 'gray.200'
                      : ''
                  }
                >
                  <Td>{provider.name}</Td>
                  <Td>{provider.email}</Td>
                  <Td>{provider.phone}</Td>
                  <Td>{provider.idProof}</Td>
                  <Td>{provider.licenseId}</Td>
                  <Td>
                    <HStack spacing="2">
                      <Button
                        colorScheme="teal"
                        size="sm"
                        onClick={() => handleVerify(provider.id)}
                      >
                        Verify
                      </Button>
                      <Button
                        colorScheme="green"
                        size="sm"
                        onClick={() => handleAccept(provider.id)}
                      >
                        Accept
                      </Button>
                      <Button
                        colorScheme="red"
                        size="sm"
                        onClick={() => handleReject(provider.id)}
                      >
                        Reject
                      </Button>
                    </HStack>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </VStack>
    </ChakraProvider>
  );
};

export default VerificationPage;
