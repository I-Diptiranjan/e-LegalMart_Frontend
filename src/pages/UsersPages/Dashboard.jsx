import {
  Avatar,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
  FormLabel,
  Input,
  ModalFooter,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  FormControl,
  ModalBody,
} from '@chakra-ui/react';
import React from 'react';

import { useDisclosure } from '@chakra-ui/react';

const Dashboard = ({
  name,
  desc,
  joiningDate,
  experience,
  Specialization,
  rating,
  email,
  phone,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <Flex justifyContent={'center'}>
      <Card w={['60', 'sm', 'md']}>
        <CardBody>
          <Flex justifyContent={'center'}>
            <Avatar
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
              size={'2xl'}
            />
          </Flex>
          <Stack mt="6" spacing="3">
            <Heading size="lg" justify="center" align="center">
              {name}
            </Heading>
            <Heading size="sm" justify="center" align="center">
              {Specialization}
            </Heading>

            <Text>Email : {email}</Text>
            <Text>Phone No. : {phone}</Text>
            <Text>Joining Date : {joiningDate}</Text>
            <Text>Experience : {experience}</Text>

            <Text fontSize="md">{desc}</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter justify={'center'} align={'center'}>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue" onClick={onOpen}>
              Edit Profile
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input ref={initialRef} placeholder="First name" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder="Last name" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default Dashboard;
