const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

const readJson = filename => {
  const text = fs.readFileSync(path.join(__dirname, 'json', filename), 'utf8');
  return JSON.parse(text);
};
const accounts = readJson('accounts.json');
const users = readJson('users.json');

app.get('/', (req, res) => res.render('index', { title: 'Account Summary', accounts }));
app.get('/savings', (req, res) => res.render('account', { account: accounts.savings }));
app.get('/checking', (req, res) => res.render('account', { account: accounts.checking }));
app.get('/credit', (req, res) => res.render('account', { account: accounts.credit }));
app.get('/profile', (req, res) => res.render('profile', { user: users[0] }));

app.listen(3000, () => console.log('PS Project running on port 3000!'));
