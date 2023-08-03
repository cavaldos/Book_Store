//----------------------------------------------------------------

// import React, { useState, useEffect } from 'react';
// import { FormControl, FormLabel, Grid, Input, Select, Box, Button, IconButton } from '@chakra-ui/react';
// import { EditIcon } from '@chakra-ui/icons';
// import { useSelector } from 'react-redux';

// function AccountSettings() {
//   const [userData, setUserData] = useState({
//     username: '',
//     lastname: '',
//     phonenumber: '',
//     firstname: '',
//   });

//   const [editField, setEditField] = useState(null);

//   const email = useSelector((state) => state.role.email);

//   useEffect(() => {
//     // Fetch user data from the backend based on the email
//     fetchUserData();
//   }, [email]);

//   const fetchUserData = async () => {
//     try {
//       const response = await fetch(`http://localhost:8000/getProfile`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setUserData(data);
//       } else {
//         console.error('Failed to fetch user data:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//     }
//   };

//   const handleUpdateProfile = async () => {
//     // Check if all fields are filled
//     if (
//       userData.username.trim() === '' ||
//       userData.lastname.trim() === '' ||
//       userData.phonenumber.trim() === '' ||
//       userData.firstname.trim() === ''
//     ) {
//       alert('Please fill in all fields.');
//       return;
//     }

//     try {
//       const response = await fetch(`http://localhost:8000/editProfile`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(userData),
//       });

//       if (response.ok) {
//         alert('Profile updated successfully.');
//       } else {
//         console.error('Failed to update profile:', response.statusText);
//         alert('An error occurred while updating profile.');
//       }
//     } catch (error) {
//       console.error('Error updating profile:', error);
//       alert('An error occurred while updating profile.');
//     }
//   };

//   const handleEditField = (fieldName) => {
//     setEditField(fieldName);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUserData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   return (
//     <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={6}>
//       <FormControl id="firstName">
//         <FormLabel>First Name</FormLabel>
//         <Input
//           focusBorderColor="brand.blue"
//           type="text"
//           placeholder="text"
//           id="firstname"
//           name="firstname"
//           value={userData.firstname}
//           onChange={handleInputChange}
//           isReadOnly={editField !== 'firstname'}
//         />
//         {!editField && (
//           <IconButton
//             icon={<EditIcon />}
//             aria-label="Edit First Name"
//             variant="outline"
//             colorScheme="blue"
//             size="sm"
//             onClick={() => handleEditField('firstname')}
//           />
//         )}
//       </FormControl>
//       <FormControl id="lastName">
//         <FormLabel>Last Name</FormLabel>
//         <Input
//           focusBorderColor="brand.blue"
//           type="text"
//           placeholder="text"
//           id="lastname"
//           name="lastname"
//           value={userData.lastname}
//           onChange={handleInputChange}
//           isReadOnly={editField !== 'lastname'}
//         />
//         {!editField && (
//           <IconButton
//             icon={<EditIcon />}
//             aria-label="Edit Last Name"
//             variant="outline"
//             colorScheme="blue"
//             size="sm"
//             onClick={() => handleEditField('lastname')}
//           />
//         )}
//       </FormControl>
//       <FormControl id="phoneNumber">
//         <FormLabel>Phone Number</FormLabel>
//         <Input
//           focusBorderColor="brand.blue"
//           type="tel"
//           placeholder="+84"
//           id="phonenumber"
//           name="phonenumber"
//           value={userData.phonenumber}
//           onChange={handleInputChange}
//           isReadOnly={editField !== 'phonenumber'}
//         />
//         {!editField && (
//           <IconButton
//             icon={<EditIcon />}
//             aria-label="Edit Phone Number"
//             variant="outline"
//             colorScheme="blue"
//             size="sm"
//             onClick={() => handleEditField('phonenumber')}
//           />
//         )}
//       </FormControl>
//       <FormControl id="emailAddress">
//         <FormLabel>Email Address</FormLabel>
//         <Input focusBorderColor="brand.blue" type="email" placeholder={email} readOnly />
//       </FormControl>
//       <FormControl id="username">
//         <FormLabel>UserName</FormLabel>
//         <Input
//           focusBorderColor="brand.blue"
//           type="text"
//           placeholder="(408) 996–1010"
//           id="username"
//           name="username"
//           value={userData.username}
//           onChange={handleInputChange}
//           isReadOnly={editField !== 'username'}
//         />
//         {!editField && (
//           <IconButton
//             icon={<EditIcon />}
//             aria-label="Edit Username"
//             variant="outline"
//             colorScheme="blue"
//             size="sm"
//             onClick={() => handleEditField('username')}
//           />
//         )}
//       </FormControl>
//       <FormControl id="city">
//         <FormLabel>City</FormLabel>
//         <Select focusBorderColor="brand.blue" placeholder="Select city">
//           {/* Options */}
//         </Select>
//       </FormControl>
//       <FormControl id="country">
//         <FormLabel>Country</FormLabel>
//         <Select focusBorderColor="brand.blue" placeholder="Select country">
//           {/* Options */}
//         </Select>
//       </FormControl>
//       <Box mt={5} py={5} px={8}>
//         {editField && (
//           <Button colorScheme="blue" onClick={() => setEditField(null)}>
//             Cancel
//           </Button>
//         )}
//         {!editField && (
//           <Button colorScheme="blue" onClick={handleUpdateProfile}>
//             Update Profile
//           </Button>
//         )}
//       </Box>
//     </Grid>
//   );
// }

// export default AccountSettings;


//----------------------------------------------------------------







import React, { useState, useEffect } from 'react';
import { FormControl, FormLabel, Grid, Input, Select, Box, Button, IconButton } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import { useSelector } from 'react-redux';

function AccountSettings() {
  const [userData, setUserData] = useState({
    username: '',
    lastname: '',
    phonenumber: '',
    firstname: '',
  });

  const [editField, setEditField] = useState(null);

  const [originalUserData, setOriginalUserData] = useState({});
  var [isProfileUpdated, setIsProfileUpdated] = useState(false);

  const email = useSelector((state) => state.role.email);

  useEffect(() => {
    // Fetch user data from the backend based on the email
    fetchUserData();
  }, [email]);

  const compareUserData = (data1, data2) => {
    return Object.keys(data1).every((key) => data1[key] === data2[key]);
  };

  useEffect(() => {
    // Compare the user data and the original user data to determine if there are changes
    const hasChanges = !compareUserData(userData, originalUserData);
    setIsProfileUpdated(hasChanges);
  }, [userData, originalUserData]);

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
        setOriginalUserData(data); // Save the fetched data as the original user data
      } else {
        console.error('Failed to fetch user data:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleEditField = (fieldName) => {
    setEditField(fieldName);
  };

  const handleUpdateProfile = async () => {
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
        setOriginalUserData(JSON.parse(JSON.stringify(userData)));
        setIsProfileUpdated(false); // Reset trạng thái khi cập nhật thành công
        alert('Change Profile Successfully');
      } else {
        console.error('Failed to update profile:', response.statusText);
        alert('An error occurred while updating profile.');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('An error occurred while updating profile.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  isProfileUpdated = !compareUserData(userData, originalUserData);

  return (
    <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={6}>
      <FormControl id="firstName">
        <FormLabel>First Name</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="text"
          placeholder="text"
          id="firstname"
          name="firstname"
          value={userData.firstname}
          onChange={handleInputChange}
          isReadOnly={editField !== 'firstname'}
        />
        {!editField && (
          <IconButton
            icon={<EditIcon />}
            aria-label="Edit First Name"
            variant="outline"
            colorScheme="blue"
            size="sm"
            onClick={() => handleEditField('firstname')}
          />
        )}
      </FormControl>
      <FormControl id="lastName">
        <FormLabel>Last Name</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="text"
          placeholder="text"
          id="lastname"
          name="lastname"
          value={userData.lastname}
          onChange={handleInputChange}
          isReadOnly={editField !== 'lastname'}
        />
        {!editField && (
          <IconButton
            icon={<EditIcon />}
            aria-label="Edit Last Name"
            variant="outline"
            colorScheme="blue"
            size="sm"
            onClick={() => handleEditField('lastname')}
          />
        )}
      </FormControl>
      <FormControl id="phoneNumber">
        <FormLabel>Phone Number</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="tel"
          placeholder="+84"
          id="phonenumber"
          name="phonenumber"
          value={userData.phonenumber}
          onChange={handleInputChange}
          isReadOnly={editField !== 'phonenumber'}
        />
        {!editField && (
          <IconButton
            icon={<EditIcon />}
            aria-label="Edit Phone Number"
            variant="outline"
            colorScheme="blue"
            size="sm"
            onClick={() => handleEditField('phonenumber')}
          />
        )}
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
          name="username"
          value={userData.username}
          onChange={handleInputChange}
          isReadOnly={editField !== 'username'}
        />
        {!editField && (
          <IconButton
            icon={<EditIcon />}
            aria-label="Edit Username"
            variant="outline"
            colorScheme="blue"
            size="sm"
            onClick={() => handleEditField('username')}
          />
        )}
      </FormControl>
      <FormControl id="city">
        <FormLabel>City</FormLabel>
        <Select focusBorderColor="brand.blue" placeholder="Select city">
          {/* Options */}
        </Select>
      </FormControl>
      <FormControl id="country">
        <FormLabel>Country</FormLabel>
        <Select focusBorderColor="brand.blue" placeholder="Select country">
          {/* Options */}
        </Select>
      </FormControl>
      <Box mt={5} py={5} px={8}>
        {editField && (
          <Button colorScheme="blue" onClick={() => setEditField(null)}>
            Change {editField === 'firstname' ? 'First Name' : editField === 'lastname' ? 'Last Name' : editField === 'phonenumber' ? 'Phone Number' : editField === 'username' ? 'Username' : ''}
          </Button>
        )}
        {!editField && isProfileUpdated && (
          <Button colorScheme="blue" onClick={handleUpdateProfile}>
            Update Profile
          </Button>
        )}
      </Box>
    </Grid>
  );
}

export default AccountSettings;



