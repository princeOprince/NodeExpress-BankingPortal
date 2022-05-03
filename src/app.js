const path = require('path');
const { accounts, users, writeJSON } = require('./data');

const express = require('express');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Account Summary',
    accounts: accounts
  });
});

app.get('/savings', (req, res, next) => {
  res.render('account', {
    account: accounts.savings
  });
});

app.get('/checking', (req, res, next) => {
  res.render('account', {
    account: accounts.checking
  });
});

app.get('/credit', (req, res, next) => {
  res.render('account', {
    account: accounts.credit
  });
});

app.get('/profile', (req, res, next) => {
  res.render('profile', {
    user: users[0]
  });
});

app.get('/transfer', (req, res, next) => {
  res.render('transfer');
});

app.post('/transfer', (req, res, next) => {
  // Calculate and set the from balance
  accounts[req.body.from].balance =
    accounts[req.body.from].balance - parseInt(req.body.amount);
  // Calculate and set the to balance
  accounts[req.body.to].balance =
    accounts[req.body.to].balance + parseInt(req.body.amount);

  writeJSON();
  res.render('transfer', { message: "Transfer Completed" });
});

app.get('/payment', (req, res, next) => {
  res.render('payment', { account: accounts.credit });
});

app.post('/payment', (req, res, next) => {
  accounts.credit.balance =
    accounts.credit.balance - parseInt(req.body.amount);
  accounts.credit.available =
    accounts.credit.available + parseInt(req.body.amount);
  
  writeJSON();
  res.render('payment', { 
    message: "Payment Successful",
    account: accounts.credit
  });
});

app.listen(3000, () => {
  console.log('PS Project Running on port 3000!');
});