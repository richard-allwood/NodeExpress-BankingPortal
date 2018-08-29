const fs = require('fs');
const path = require('path');

const readJson = filename => {
  const text = fs.readFileSync(path.join(__dirname, 'json', filename), 'utf8');
  return JSON.parse(text);
};
const accounts = readJson('accounts.json');
const users = readJson('users.json');

const writeJSON = () => {
  const accountsJSON = JSON.stringify(accounts, null, 4);
  fs.writeFileSync(path.join(__dirname, 'json', 'accounts.json'), accountsJSON, 'utf8');
};

module.exports = { accounts, users, writeJSON };