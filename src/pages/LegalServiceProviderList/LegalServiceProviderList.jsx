import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import {
  Grid,
  GridItem,
  VStack,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
  Heading,
  Flex,
  Checkbox,
  Spacer,
  Button,
} from '@chakra-ui/react';
import ProfileCard from '../../components/Cards/ProfileCard';
import { PhoneIcon, Search2Icon, ViewIcon } from '@chakra-ui/icons';

const LegalServiceProviderList = () => {
  return (
    <>
      <Navbar />
      <VStack m={8}>
        <Grid templateColumns="20% 80%" gap={8} m={4}>
          <GridItem>
            <Heading fontWeight={'bold'} fontSize={'x-large'}>
              Filters
            </Heading>
            <VStack spacing={5} direction="row" mt={8}>
              <Heading fontWeight={'bold'} fontSize={'larger'}>
                Category
              </Heading>
              <Checkbox colorScheme="green" defaultChecked>
                All
              </Checkbox>
              <Checkbox colorScheme="green" defaultChecked>
                Criminal
              </Checkbox>
              <Checkbox colorScheme="green" defaultChecked>
                Maritial
              </Checkbox>
              <Checkbox colorScheme="green" defaultChecked>
                Civil
              </Checkbox>
            </VStack>
            <VStack spacing={5} direction="row" mt={8}>
              <Heading fontWeight={'bold'} fontSize={'larger'}>
                Win Ratio
              </Heading>
              <Checkbox colorScheme="green" defaultChecked>
                All
              </Checkbox>
              <Checkbox colorScheme="green" defaultChecked>
                >= 90%
              </Checkbox>
              <Checkbox colorScheme="green" defaultChecked>
                >= 80%
              </Checkbox>
              <Checkbox colorScheme="green" defaultChecked>
                >= 70%
              </Checkbox>
            </VStack>
            <VStack spacing={5} direction="row" mt={8}>
              <Heading fontWeight={'bold'} fontSize={'larger'}>
                Rating
              </Heading>

              <Checkbox colorScheme="green" defaultChecked>
                All
              </Checkbox>
              <Checkbox colorScheme="green" defaultChecked>
                >= 4
              </Checkbox>
              <Checkbox colorScheme="green" defaultChecked>
                >= 3
              </Checkbox>
              <Checkbox colorScheme="green" defaultChecked>
                >= 2
              </Checkbox>
            </VStack>
            <VStack spacing={5} direction="row" mt={8}>
              <Heading fontWeight={'bold'} fontSize={'larger'}>
                Loaction
              </Heading>
              <InputGroup w={48}>
                <InputLeftElement pointerEvents="none">
                  <PhoneIcon color="gray.300" />
                </InputLeftElement>
                <Input type="text" placeholder="Enter Your Location" />
              </InputGroup>
              <Button variant={'solid'} rightIcon={<ViewIcon />}>
                Use Current Loaction
              </Button>
            </VStack>
          </GridItem>

          <GridItem>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Search2Icon color="gray.300" />
              </InputLeftElement>
              <Input type="tel" placeholder="Search Here..." />
            </InputGroup>
            <br />
            <Grid templateColumns="repeat(3 ,1fr)" gap={4}>
              <GridItem>
                <ProfileCard
                  name={'Vivek Kumar Sahoo'}
                  image={
                    'https://cdn1.vectorstock.com/i/1000x1000/83/15/lawyer-cartoon-vector-35528315.jpg'
                  }
                  desc={
                    'A legal professional dedicated to representing clients in court, providing expert advice, and advocating for their interests to ensure fair legal outcomes.'
                  }
                  specification={'Criminal'}
                  winRatio={'90%'}
                  casehandled={200}
                  rating={4.3}
                />
              </GridItem>
              <GridItem>
                <ProfileCard
                  name={'Vivek Kumar Sahoo'}
                  image={
                    'https://cdn1.vectorstock.com/i/1000x1000/83/15/lawyer-cartoon-vector-35528315.jpg'
                  }
                  desc={
                    'A legal professional dedicated to representing clients in court, providing expert advice, and advocating for their interests to ensure fair legal outcomes.'
                  }
                  specification={'Criminal'}
                  winRatio={'90%'}
                  casehandled={200}
                  rating={4.3}
                />
              </GridItem>
              <GridItem>
                <ProfileCard
                  name={'Vivek Kumar Sahoo'}
                  image={
                    'https://cdn1.vectorstock.com/i/1000x1000/83/15/lawyer-cartoon-vector-35528315.jpg'
                  }
                  desc={
                    'A legal professional dedicated to representing clients in court, providing expert advice, and advocating for their interests to ensure fair legal outcomes.'
                  }
                  specification={'Criminal'}
                  winRatio={'90%'}
                  casehandled={200}
                  rating={4.3}
                />
              </GridItem>
              <GridItem>
                <ProfileCard
                  name={'Vivek Kumar Sahoo'}
                  image={
                    'https://cdn1.vectorstock.com/i/1000x1000/83/15/lawyer-cartoon-vector-35528315.jpg'
                  }
                  desc={
                    'A legal professional dedicated to representing clients in court, providing expert advice, and advocating for their interests to ensure fair legal outcomes.'
                  }
                  specification={'Criminal'}
                  winRatio={'90%'}
                  casehandled={200}
                  rating={4.3}
                />
              </GridItem>
              <GridItem>
                <ProfileCard
                  name={'Vivek Kumar Sahoo'}
                  image={
                    'https://cdn1.vectorstock.com/i/1000x1000/83/15/lawyer-cartoon-vector-35528315.jpg'
                  }
                  desc={
                    'A legal professional dedicated to representing clients in court, providing expert advice, and advocating for their interests to ensure fair legal outcomes.'
                  }
                  specification={'Criminal'}
                  winRatio={'90%'}
                  casehandled={200}
                  rating={4.3}
                />
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      </VStack>
      <Footer />
    </>
  );
};

export default LegalServiceProviderList;
