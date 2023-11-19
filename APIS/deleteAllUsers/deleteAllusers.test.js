const fs = require('fs');
const deleteAllUsers = require('./deleteusersApp.js');

describe('deleteAllUsers API', () => {

  test('Deletes all users with valid key_admin', () => {
    const keyAdmin = 'keyadmin123';
    const result = deleteAllUsers(keyAdmin);
    expect(result).toEqual({ message: 'Users deleted with success' });

    // Check if the USER_DATA.TXT file is empty after deletion
    const fileContent = fs.readFileSync('D://siemens//APIS//user_data.txt', 'utf8');
    expect(fileContent).toBe('');
  });
  test(' invalid key_admin', () => {
    const result = deleteAllUsers('invalid_key');
    expect(result).toEqual({ message: 'Unauthorized access' })  });
});
