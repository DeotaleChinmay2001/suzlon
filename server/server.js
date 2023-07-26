const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

// File paths
const usersFilePath = path.join(__dirname, 'data', 'user_data.json');
const statelistFilePath = path.join(__dirname, 'data', 'state_list.json');
const accessLevelFilePath = path.join(__dirname, 'data', 'access_level.json');

// Middleware for handling errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

const cors = require('cors');
app.use(cors());

// API endpoint to get user by ID
app.get('/api/users/:id', (req, res, next) => {
  const userId = req.params.id;
  const jsonData = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));
  const user = jsonData[userId];

  if (user) {
    res.json(user);
  } else {
    const error = new Error('User not found');
    error.status = 404;
    next(error);
  }
});

// API endpoint to get all users
app.get('/api/users', (req, res) => {
  const jsonData = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));
  res.json({ message: jsonData });
});

// API endpoint to get statelist by user ID
app.get('/api/statelist/:id', (req, res, next) => {
  const userId = req.params.id;
  const jsonData = JSON.parse(fs.readFileSync(statelistFilePath, 'utf8'));
  const user = jsonData[userId];

  if (user) {
    res.json(user.statelist);
  } else {
    const error = new Error('User not found');
    error.status = 404;
    next(error);
  }
});

// API endpoint to get all statelists
app.get('/api/statelist', (req, res) => {
  const jsonData = JSON.parse(fs.readFileSync(statelistFilePath, 'utf8'));
  res.json(jsonData);
});

// API endpoint to get user data, statelist, and access level by ID
app.get('/api/getUserData/:id', (req, res, next) => {
  const userId = req.params.id;
  const usersData = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));
  const statelistData = JSON.parse(fs.readFileSync(statelistFilePath, 'utf8'));
  const accessLevelData = JSON.parse(fs.readFileSync(accessLevelFilePath, 'utf8'));

  const userData = usersData[userId];
  const userStatelist = statelistData[userId];
  const userAccessLevel = accessLevelData[userData.accessLevel];

  if (userData && userStatelist && userAccessLevel) {
    const userDataWithStatelistAndAccessLevel = {
      ...userData,
      statelist: userStatelist.statelist,
      access: userAccessLevel,
    };

    res.json(userDataWithStatelistAndAccessLevel);
  } else {
    const error = new Error('User data not found');
    error.status = 404;
    next(error);
  }
});

// API endpoint to get user data, statelist, and access level for all users
app.get('/api/getUserData', (req, res, next) => {
  const usersData = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));
  const statelistData = JSON.parse(fs.readFileSync(statelistFilePath, 'utf8'));
  const accessLevelData = JSON.parse(fs.readFileSync(accessLevelFilePath, 'utf8'));

  const allUserData = Object.keys(usersData).map((userId) => {
    const userData = usersData[userId];
    const userStatelist = statelistData[userId];
    const userAccessLevel = accessLevelData[userId];

    if (userData && userStatelist && userAccessLevel) {
      return {
        ...userData,
        statelist: userStatelist.statelist,
        accessLevel: userAccessLevel.accessLevel,
      };
    } else {
      return null;
    }
  });

  const filteredUserData = allUserData.filter((userData) => userData !== null);

  res.json(filteredUserData);
});


// API endpoint to update user data by ID
app.put('/api/updateUserData/:id', (req, res, next) => {
  const userId = req.params.id;
  const updatedData = req.body;

  try {
    const jsonData = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));
    console.log('jsonData:', jsonData); // Log the jsonData for debugging purposes
    console.log('User:', jsonData[userId]); // Log the user data for debugging purposes

    if (jsonData[userId]) {
      // Update the user data for the specified ID
      jsonData[userId] = { ...jsonData[userId], ...updatedData };
      fs.writeFileSync(usersFilePath, JSON.stringify(jsonData, null, 2));


      res.json({ message: 'User data updated successfully', updatedData });
    } else {
      const error = new Error('User not found');
      error.status = 404;
      next(error);
    }
  } catch (err) {
    console.error('Error in updateUserData:', err.message);
    console.error(err.stack);
    const error = new Error('Internal Server Error');
    error.status = 500;
    next(error);
  }
});




app.get('/api/getUserData', (req, res, next) => {
  const usersData = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));


});




// Error handling for undefined routes
app.use((req, res, next) => {
  const error = new Error('Route not found');
  error.status = 404;
  next(error);
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  const status = err.status || 500;
  res.status(status).json({ error: err.message || 'Internal Server Error' });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
