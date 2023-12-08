import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, Container, Grid, Stack, VStack, Text } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';

const SignupChoice = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Grid minH={'90vh'} alignItems={'center'}>
          <VStack direction="row" spacing={4}>
            <Link to={'/userSignup'}>
              <Button
                colorScheme="purple"
                variant="outline"
                w={'300px'}
                rightIcon={<ArrowForwardIcon />}
              >
                Sign Up as a User
              </Button>
            </Link>
            <Text> Or </Text>
            <Link to={'/legalSignup'}>
              <Button
                colorScheme="purple"
                variant="outline"
                w={'300px'}
                rightIcon={<ArrowForwardIcon />}
              >
                Sign Up as a Legal Service Provider
              </Button>
            </Link>
          </VStack>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default SignupChoice;
