import React, { useState } from 'react';
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

const Complaints = () => {
  // Sample data for complaints
  const complaintsData = [
    {
      id: 1,
      userName: 'John Doe',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      date: '2023-01-01',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      status: 'Solved',
    },
    {
      id: 2,
      userName: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '987-654-3210',
      date: '2023-02-01',
      description:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      status: 'Not Solved',
    },
    // Add more complaint data as needed
  ];

  const handleReply = id => {
    // Handle reply action for the complaint with the given id
    console.log(`Reply to complaint with id ${id}`);
  };

  const handleDelete = id => {
    // Handle delete action for the complaint with the given id
    console.log(`Delete complaint with id ${id}`);
  };

  // State for search term
  const [searchTerm, setSearchTerm] = useState('');

  // Filter complaints based on search term
  const filteredComplaints = complaintsData.filter(complaint =>
    complaint.userName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <VStack spacing="4" align="center" padding="20px">
        <Text fontSize="xl" fontWeight="bold">
          Complaints Information
        </Text>
        {/* Search bar with rounded corners */}
        <Input
          size="sm" // Set the size to "sm" for a smaller input
          variant="filled"
          placeholder="Search by user name"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          borderRadius="full" // Apply rounded corners
        />
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>User Name</Th>
              <Th>Email</Th>
              <Th>Phone</Th>
              <Th>Date</Th>
              <Th>Description</Th>
              <Th>Status</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredComplaints.map(complaint => (
              <Tr key={complaint.id}>
                <Td>{complaint.userName}</Td>
                <Td>{complaint.email}</Td>
                <Td>{complaint.phone}</Td>
                <Td>{complaint.date}</Td>
                <Td>{complaint.description}</Td>
                <Td>
                  {complaint.status === 'Solved' ? (
                    <Text color="green" fontWeight="bold">
                      Solved
                    </Text>
                  ) : (
                    <Text color="red" fontWeight="bold">
                      Not Solved
                    </Text>
                  )}
                </Td>
                <Td>
                  <HStack spacing="2">
                    <Button
                      colorScheme="blue"
                      size="sm"
                      onClick={() => handleReply(complaint.id)}
                    >
                      Reply
                    </Button>
                    <Button
                      colorScheme="red"
                      size="sm"
                      onClick={() => handleDelete(complaint.id)}
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

export default Complaints;
