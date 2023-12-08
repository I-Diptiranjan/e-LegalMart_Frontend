import { Container, Grid, GridItem, Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import ChoiceCard from '../../components/Cards/ChoiceCard';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import UnknownAboutLegalProviderCard from '../../components/Cards/UnknownAboutLegalProviderCard';

const LegalServiceProviderChoice = () => {
  return (
    <>
      <Navbar />

      <VStack m={8}>
        <Heading children="Choose Your Required Legal Service Provider" />
        <br />
        <Grid templateColumns="repeat(5, 1fr)" gap={8}>
          <GridItem>
            <ChoiceCard
              title={'Advocates'}
              desc={
                'A legal professional dedicated to representing clients in court, providing expert advice, and advocating for their interests to ensure fair legal outcomes.'
              }
              image={
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAZpl1RUV7fHakOoKawPThDQeazIZLNf9bkA&usqp=CAU'
              }
            />
          </GridItem>
          <GridItem>
            <ChoiceCard
              title={'Advocates'}
              desc={
                'A legal professional dedicated to representing clients in court, providing expert advice, and advocating for their interests to ensure fair legal outcomes.'
              }
              image={
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAZpl1RUV7fHakOoKawPThDQeazIZLNf9bkA&usqp=CAU'
              }
            />
          </GridItem>
          <GridItem>
            <ChoiceCard
              title={'Advocates'}
              desc={
                'A legal professional dedicated to representing clients in court, providing expert advice, and advocating for their interests to ensure fair legal outcomes.'
              }
              image={
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAZpl1RUV7fHakOoKawPThDQeazIZLNf9bkA&usqp=CAU'
              }
            />
          </GridItem>
          <GridItem>
            <ChoiceCard
              title={'Advocates'}
              desc={
                'A legal professional dedicated to representing clients in court, providing expert advice, and advocating for their interests to ensure fair legal outcomes.'
              }
              image={
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAZpl1RUV7fHakOoKawPThDQeazIZLNf9bkA&usqp=CAU'
              }
            />
          </GridItem>
          <GridItem>
            <ChoiceCard
              title={'Advocates'}
              desc={
                'A legal professional dedicated to representing clients in court, providing expert advice, and advocating for their interests to ensure fair legal outcomes.'
              }
              image={
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAZpl1RUV7fHakOoKawPThDQeazIZLNf9bkA&usqp=CAU'
              }
            />
          </GridItem>
        </Grid>
        <UnknownAboutLegalProviderCard />
      </VStack>
      <Footer />
    </>
  );
};

export default LegalServiceProviderChoice;
