import { useState, useRef, useEffect } from 'react'
import {
  Avatar,
  AvatarBadge,
  Badge,
  Button,
  Heading,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'

import { useSelector } from 'react-redux'

import RenderAvatar from '../../avatar/avatar'

function Profile() {
  const role = useSelector((state) => state.role);
  const email = useSelector((state) => state.role.email);

  const [userData, setUserData] = useState({
    username: '',
  });

  useEffect(() => {
    // Fetch user data from the backend based on the email
    fetchUserData();
  }, [email]);

  const fetchUserData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/getProfile`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        const data = await response.json();
        setUserData(data);
      } else {
        console.error('Failed to fetch user data:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };




  const { isOpen, onClose } = useDisclosure()

  return (
    <VStack spacing={3} py={5} borderBottomWidth={1} borderColor="brand.light">
      <RenderAvatar/>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Something went wrong</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>File not supported!</Text>
            <HStack mt={1}>
              <Text color="brand.cadet" fontSize="sm">
                Supported types:
              </Text>
              <Badge colorScheme="green">PNG</Badge>
              <Badge colorScheme="green">JPG</Badge>
              <Badge colorScheme="green">JPEG</Badge>
            </HStack>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <VStack spacing={1}>
        <Heading as="h3" fontSize="xl" color="brand.dark">
          {userData.username}
        </Heading>
        <Text color="brand.gray" fontSize="sm">
          {role.role}
        </Text>
        <Text color="brand.gray" fontSize="sm">
          {role.email}
        </Text>
      </VStack>
    </VStack>
  )
}

export default Profile