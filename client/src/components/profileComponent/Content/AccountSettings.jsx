// import { FormControl, FormLabel, Grid, Input, Select, Box, Button } from '@chakra-ui/react'
// import "../UserProfile.scss"
// import { useSelector } from 'react-redux'

// function AccountSettings() {
//   const email = useSelector((state) => state.role.email);
//   return (
//     <Grid
//       templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
//       gap={6}
//     >
//       <FormControl id="firstName">
//         <FormLabel>First Name</FormLabel>
//         <Input focusBorderColor="brand.blue" type="text" placeholder="Tim" />
//       </FormControl>
//       <FormControl id="lastName">
//         <FormLabel>Last Name</FormLabel>
//         <Input focusBorderColor="brand.blue" type="text" placeholder="Cook" />
//       </FormControl>
//       <FormControl id="phoneNumber">
//         <FormLabel>Phone Number</FormLabel>
//         <Input
//           focusBorderColor="brand.blue"
//           type="tel"
//           placeholder="(408) 996–1010"
//         />
//       </FormControl>
//       <FormControl id="emailAddress">
//         <FormLabel>Email Address</FormLabel>
//         <Input
//           focusBorderColor="brand.blue"
//           type="email"
//           placeholder={email}
//         />
//       </FormControl>
//       <FormControl id="city">
//         <FormLabel>City</FormLabel>
//         <Select focusBorderColor="brand.blue" placeholder="Select city">
//           <option value="california">California</option>
//           <option value="washington">Washington</option>
//           <option value="toronto">Toronto</option>
//           <option value="newyork" selected>
//             New York
//           </option>
//           <option value="london">London</option>
//           <option value="netherland">Netherland</option>
//           <option value="poland">Poland</option>
//         </Select>
//       </FormControl>
//       <FormControl id="country">
//         <FormLabel>Country</FormLabel>
//         <Select focusBorderColor="brand.blue" placeholder="Select country">
//           <option value="america" selected>
//             America
//           </option>
//           <option value="england">England</option>
//           <option value="poland">Poland</option>
//         </Select>
//       </FormControl>
//     </Grid>
//   )
// }

// export default AccountSettings


import React, { useState, useEffect } from 'react';
import { FormControl, FormLabel, Grid, Input, Select, Box, Button } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

function AccountSettings() {
  const [userData, setUserData] = useState({
    username: '',
    lastname: '',
    phonenumber: '',
    firstname: '',
  });

  const email = useSelector((state) => state.role.email);

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

  const handleUpdateProfile = async () => {
    // Check if all fields are filled
    if (
      userData.username.trim() === '' ||
      userData.lastname.trim() === '' ||
      userData.phonenumber.trim() === '' ||
      userData.firstname.trim() === ''
    ) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8000/editProfile`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        alert('Profile updated successfully.');
      } else {
        console.error('Failed to update profile:', response.statusText);
        alert('An error occurred while updating profile.');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('An error occurred while updating profile.');
    }
  };

  return (
    <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={6}>
      <FormControl id="firstName">
        <FormLabel>First Name</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="text"
          placeholder="text"
          id="firstname"
          value={userData.firstname}
          onChange={(e) => setUserData({ ...userData, firstname: e.target.value })}
        />
      </FormControl>
      <FormControl id="lastName">
        <FormLabel>Last Name</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="text"
          placeholder="text"
          id="lastname"
          value={userData.lastname}
          onChange={(e) => setUserData({ ...userData, lastname: e.target.value })}
        />
      </FormControl>
      <FormControl id="phoneNumber">
        <FormLabel>Phone Number</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="tel"
          placeholder="+84"
          id="phonenumber"
          value={userData.phonenumber}
          onChange={(e) => setUserData({ ...userData, phonenumber: e.target.value })}
        />
      </FormControl>
      <FormControl id="emailAddress">
        <FormLabel>Email Address</FormLabel>
        <Input focusBorderColor="brand.blue" type="email" placeholder={email} readOnly />
      </FormControl>
      <FormControl id="username">
        <FormLabel>UserName</FormLabel>
        <Input 
          focusBorderColor="brand.blue"
          type="text"
          placeholder="(408) 996–1010"
          id="username"
          value={userData.username}
          onChange={(e) => setUserData({ ...userData, username: e.target.value })}
        />
      </FormControl>
      <FormControl id="city">
        <FormLabel>City</FormLabel>
        <Select focusBorderColor="brand.blue" placeholder="Select city">
          <option value="california">California</option>
          <option value="washington">Washington</option>
          <option value="toronto">Toronto</option>
          <option value="newyork" selected>
            New York
          </option>
          <option value="london">London</option>
          <option value="netherland">Netherland</option>
          <option value="poland">Poland</option>
        </Select>
      </FormControl>
      <FormControl id="country">
        <FormLabel>Country</FormLabel>
         <Select focusBorderColor="brand.blue" placeholder="Select country">
           <option value="america" selected>
             America
           </option>
           <option value="england">England</option>
           <option value="poland">Poland</option>
         </Select>
      </FormControl>
      <Box mt={5} py={5} px={8} ></Box>
        <Button colorScheme="blue" onClick={handleUpdateProfile}>
          Update Profile
        </Button>
    </Grid>
  );
}

export default AccountSettings;
