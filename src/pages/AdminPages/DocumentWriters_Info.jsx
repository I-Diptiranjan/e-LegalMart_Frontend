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

const DocumentWriters_Info = () => {
  // Sample data for document writers
  const documentWritersData = [
    {
      id: 1,
      name: 'Alex Turner',
      email: 'alex.turner@example.com',
      phone: '123-456-7890',
      location: 'City, Country',
      specialisation: 'Legal Documents',
      status: 'Pending',
    },
    {
      id: 2,
      name: 'Eva Williams',
      email: 'eva.williams@example.com',
      phone: '987-654-3210',
      location: 'Another City, Country',
      specialisation: 'Contracts',
      status: 'Approved',
    },
    // Add more document writer data as needed
  ];

  const handleApprove = id => {
    // Handle approve action for the document writer with the given id
    console.log(`Approve document writer with id ${id}`);
  };

  const handlePending = id => {
    // Handle pending action for the document writer with the given id
    console.log(`Mark document writer with id ${id} as pending`);
  };

  const handleDelete = id => {
    // Handle delete action for the document writer with the given id
    console.log(`Delete document writer with id ${id}`);
  };

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <VStack spacing="4" align="center" padding="20px">
        <Text fontSize="xl" fontWeight="bold">
          Document Writer Information
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
            {documentWritersData.map(documentWriter => (
              <Tr key={documentWriter.id}>
                <Td>{documentWriter.name}</Td>
                <Td>{documentWriter.email}</Td>
                <Td>{documentWriter.phone}</Td>
                <Td>{documentWriter.location}</Td>
                <Td>{documentWriter.specialisation}</Td>
                <Td>{documentWriter.status}</Td>
                <Td>
                  <HStack spacing="2">
                    {documentWriter.status === 'Pending' && (
                      <Button
                        colorScheme="green"
                        size="sm"
                        onClick={() => handleApprove(documentWriter.id)}
                      >
                        Approve
                      </Button>
                    )}
                    {documentWriter.status === 'Approved' && (
                      <Button
                        colorScheme="orange"
                        size="sm"
                        onClick={() => handlePending(documentWriter.id)}
                      >
                        Pending
                      </Button>
                    )}
                    <Button
                      colorScheme="red"
                      size="sm"
                      onClick={() => handleDelete(documentWriter.id)}
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

export default DocumentWriters_Info;
