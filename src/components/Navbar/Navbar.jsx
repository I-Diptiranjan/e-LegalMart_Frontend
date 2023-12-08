import {
  Box,
  Flex,
  useColorModeValue,
  Stack,
  Button,
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  Center,
  MenuDivider,
  MenuItem,
  Text,
} from '@chakra-ui/react';
import { useColorMode, useDisclosure } from '@chakra-ui/react';

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        bg={useColorModeValue('purple.100', 'purple.700')}
        px={4}
        boxShadow="xl"
        rounded="sm"
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <Link to={'/'}>
              <Text fontSize={'x-large'} fontWeight={'bold'} ml={8}>
                e-Legal Mart
              </Text>
            </Link>
          </Box>
          <Flex alignItems={'center'}>
            <Stack direction="row" spacing={4} align="center" mr={8}>
              <Link to={'/signup'}>
                <Button colorScheme="purple" variant="solid">
                  Sign Up
                </Button>
              </Link>
              <Link to={'/legalSignin'}>
                <Button colorScheme="purple" variant="outline">
                  Sign In
                </Button>
              </Link>
            </Stack>
            <Stack direction={'row'} spacing={7}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                >
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                    mr={4}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
