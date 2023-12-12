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

const Mediators = () => {
  // Sample data for mediators
  const mediatorsData = [
    {
      id: 1,
      name: 'Chris Miller',
      email: 'chris.miller@example.com',
      phone: '123-456-7890',
      location: 'City, Country',
      specialisation: 'Dispute Resolution',
      status: 'Pending',
    },
    {
      id: 2,
      name: 'Sarah Turner',
      email: 'sarah.turner@example.com',
      phone: '987-654-3210',
      location: 'Another City, Country',
      specialisation: 'Mediation',
      status: 'Approved',
    },
    // Add more mediator data as needed
  ];

  const handleApprove = id => {
    // Handle approve action for the mediator with the given id
    console.log(`Approve mediator with id ${id}`);
  };

  const handlePending = id => {
    // Handle pending action for the mediator with the given id
    console.log(`Mark mediator with id ${id} as pending`);
  };

  const handleDelete = id => {
    // Handle delete action for the mediator with the given id
    console.log(`Delete mediator with id ${id}`);
  };

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <VStack spacing="4" align="center" padding="20px">
        <Text fontSize="xl" fontWeight="bold">
          Mediator Information
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
            {mediatorsData.map(mediator => (
              <Tr key={mediator.id}>
                <Td>{mediator.name}</Td>
                <Td>{mediator.email}</Td>
                <Td>{mediator.phone}</Td>
                <Td>{mediator.location}</Td>
                <Td>{mediator.specialisation}</Td>
                <Td>{mediator.status}</Td>
                <Td>
                  <HStack spacing="2">
                    {mediator.status === 'Pending' && (
                      <Button
                        colorScheme="green"
                        size="sm"
                        onClick={() => handleApprove(mediator.id)}
                      >
                        Approve
                      </Button>
                    )}
                    {mediator.status === 'Approved' && (
                      <Button
                        colorScheme="orange"
                        size="sm"
                        onClick={() => handlePending(mediator.id)}
                      >
                        Pending
                      </Button>
                    )}
                    <Button
                      colorScheme="red"
                      size="sm"
                      onClick={() => handleDelete(mediator.id)}
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

export default Mediators;
