// deleteAllUsers.js

const fs = require('fs');

const deleteAllUsers = (keyAdmin) => {
 
  const deleteUsers = () => {
    fs.writeFileSync('D://siemens//APIS//user_data.txt', '');
  };
 
  if (keyAdmin === 'keyadmin123') {
    deleteUsers();
    return { message: 'Users deleted with success' };
  } else {
    return { message: 'Unauthorized access' };

  }
};

module.exports = deleteAllUsers;
