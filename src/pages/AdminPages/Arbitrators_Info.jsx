import React from 'react';
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
  HStack,
  Button,
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

const Arbitrators_Info = () => {
  // Sample data for arbitrators
  const arbitratorsData = [
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      phone: '123-456-7890',
      location: 'City, Country',
      specialisation: 'Commercial Arbitration',
      status: 'Pending',
    },
    {
      id: 2,
      name: 'Bob Anderson',
      email: 'bob.anderson@example.com',
      phone: '987-654-3210',
      location: 'Another City, Country',
      specialisation: 'Labor Arbitration',
      status: 'Approved',
    },
    // Add more arbitrator data as needed
  ];

  const handleApprove = id => {
    // Handle approve action for the arbitrator with the given id
    console.log(`Approve arbitrator with id ${id}`);
  };

  const handlePending = id => {
    // Handle pending action for the arbitrator with the given id
    console.log(`Mark arbitrator with id ${id} as pending`);
  };

  const handleDelete = id => {
    // Handle delete action for the arbitrator with the given id
    console.log(`Delete arbitrator with id ${id}`);
  };

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <VStack spacing="4" align="center" padding="20px">
        <Text fontSize="xl" fontWeight="bold">
          Arbitrator Information
        </Text>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Phone</Th>
              <Th>Location</Th>
              <Th>Specialisation</Th>
              <Th>Status</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {arbitratorsData.map(arbitrator => (
              <Tr key={arbitrator.id}>
                <Td>{arbitrator.name}</Td>
                <Td>{arbitrator.email}</Td>
                <Td>{arbitrator.phone}</Td>
                <Td>{arbitrator.location}</Td>
                <Td>{arbitrator.specialisation}</Td>
                <Td>{arbitrator.status}</Td>
                <Td>
                  <HStack spacing="2">
                    {arbitrator.status === 'Pending' && (
                      <Button
                        colorScheme="green"
                        size="sm"
                        onClick={() => handleApprove(arbitrator.id)}
                      >
                        Approve
                      </Button>
                    )}
                    {arbitrator.status === 'Approved' && (
                      <Button
                        colorScheme="orange"
                        size="sm"
                        onClick={() => handlePending(arbitrator.id)}
                      >
                        Pending
                      </Button>
                    )}
                    <Button
                      colorScheme="red"
                      size="sm"
                      onClick={() => handleDelete(arbitrator.id)}
                    >
                      Delete
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

export default Arbitrators_Info;
