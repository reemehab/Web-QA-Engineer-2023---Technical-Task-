// authApp.js
const express = require('express');
const jwt = require('jsonwebtoken');
const fs = require('fs');
require('dotenv').config({ path: '../.env' });
const app = express();
const userFilePath = 'D://siemens//APIS//user_data.txt';

let registeredUsers = readUsersFromFile();
app.use(express.json());


app.post('/api/v1/auth', (req, res) => {
  try {
    const { email, password } = req.body;

    const user = registeredUsers.filter((u) => u.email === email)[0];
   
    if (!user || user.password !== password) {
      return res.status(401).json({
        message: 'Incorrect email or password',
      });
    } else {
      const token = generateToken(user);
      res.status(200).json({
        token,
      });
    }
    
  } catch (error) {
    console.error('Error during authentication:', error);
    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
});

function readUsersFromFile() {
  try {
      if (fs.existsSync(userFilePath)) {
          const fileContent = fs.readFileSync(userFilePath, 'utf8').trim();
          if (fileContent === '') {
              return [];
          }
          const userStrings = fileContent.split('\n');
          return userStrings.map(userString => JSON.parse(userString.trim()));
      } else {
          return [];
      }
  } catch (error) {
      console.error('Error reading user data file:', error);
      return [];
  }
}

function generateToken(user) {
  return jwt.sign({ userId: user.email, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
}
module.exports = { app, generateToken };
