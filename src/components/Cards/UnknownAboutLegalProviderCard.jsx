import React, { useState } from 'react';
import {
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
  Box,
  Divider,
  AbsoluteCenter,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  Input,
  Avatar,
} from '@chakra-ui/react';

import { useDisclosure } from '@chakra-ui/react';

const UnknownAboutLegalProviderCard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isDisplay, setIsDisplay] = useState(false);
  return (
    <>
      <br />
      <Divider color={'#fff'} />
      <br />
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          w={'300px'}
          src="https://www.shutterstock.com/image-photo/justice-law-conceptlawyer-workplace-laptop-260nw-666472699.jpg"
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody w={'5xl'}>
            <Heading size="md">
              Unable to find The Perfect Legal Service Provider{' '}
            </Heading>

            <Text py="2" color={'#b6bbc4'}>
              If you are unable to find the perfect legal service provider
              according to your requirements , We are here to help you . Explore
              Our AI assistance to find the perfect legal service provider for
              you .
            </Text>
          </CardBody>

          <CardFooter>
            <Button variant="solid" colorScheme="purple" onClick={onOpen}>
              Explore Now
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Briefly Eplain Your Problem Here..</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Input placeholder="Enter Your Problem Here.." />
                </ModalBody>
                {isDisplay && (
                  <>
                    <br />
                    <Box justify="center" align="center">
                      <Avatar size={'xl'} />
                      <Text fontWeight={'bold'}>Advocate</Text>
                    </Box>
                  </>
                )}
                <ModalFooter>
                  <Button
                    colorScheme="purple"
                    mr={3}
                    onClick={() => setIsDisplay(true)}
                  >
                    Submit
                  </Button>
                  <Button
                    colorScheme="purple"
                    mr={3}
                    onClick={() => {
                      setIsDisplay(false);
                    }}
                  >
                    Reset
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </CardFooter>
        </Stack>
      </Card>
    </>
  );
};

export default UnknownAboutLegalProviderCard;
