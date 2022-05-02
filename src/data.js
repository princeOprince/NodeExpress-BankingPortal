const fs = require('fs');
const path = require('path');

const accountData = fs.readFileSync('src/json/accounts.json', 'utf8');
const userData = fs.readFileSync('src/json/users.json', 'utf8');
const accounts = JSON.parse(accountData);
const users = JSON.parse(userData);
