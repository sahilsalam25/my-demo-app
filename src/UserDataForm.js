
import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';

const UserDataForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };
  const saveUserData = (userId, data) => {
    // Save data logic  (local storage )
    const formData = JSON.stringify({ userId, data });
    localStorage.setItem('formData', formData);
    console.log('Saving data for user:', userId, data);
  };
  const generateUserId = () => {
    // Generate user ID, everytime unique UUID 
    return uuidv4();
  };
  const handleSubmit = () => {
    //  saving data to local storage
    const userId = generateUserId();
    saveUserData(userId, formData);

    console.log('Form submitted:', formData);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>User Data Form</h1>
      <div>
        <TextField label="Name" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <TextField label="Address" name="address" value={formData.address} onChange={handleChange} />
      </div>
      <div>
        <TextField label="Email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div>
        <TextField label="Phone" name="phone" value={formData.phone} onChange={handleChange} />
      </div>
      <div style={{ marginTop: '20px' }}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  );
};

export default UserDataForm;
