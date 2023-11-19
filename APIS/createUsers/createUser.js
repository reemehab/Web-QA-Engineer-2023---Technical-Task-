const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.json());

const userFilePath = 'D://siemens//APIS//user_data.txt';
let registeredUsers = readUsersFromFile();

app.post('/api/v1/users', (req, res) => {
    const { name, email, password } = req.body;
    let flag = true;

    if (registeredUsers.some(user => user.email === email) || registeredUsers.some(user => user.name === name)) {
        flag = false;
    }
    if (flag) {
        const newUser = { name, email, password };
        writeToUserFile(newUser);
        registeredUsers.push(newUser); 
        res.status(200).json({
            message: 'User registered with success',
        });
    } else {
        res.status(200).json({
            message: 'User already registered',
        });
    }
});

function writeToUserFile(newUser) {
    if (!fs.existsSync(userFilePath)) {
        fs.writeFileSync(userFilePath, '', 'utf8');
    }

    try {
        let existingUsers = fs.readFileSync(userFilePath, 'utf8');
        existingUsers = existingUsers ? existingUsers.split('\n') : [];
        existingUsers.push(JSON.stringify(newUser));
        fs.writeFileSync(userFilePath, existingUsers.join('\n'), 'utf8');
    } catch (error) {
        console.error('Error writing user data file:', error);
    }
}

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
module.exports = app;
