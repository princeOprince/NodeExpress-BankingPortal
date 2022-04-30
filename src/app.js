const fs = require('fs');
const path = require('path');

const express = require('express');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const accountData = fs.readFileSync('src/json/accounts.json', 'utf8');
const userData = fs.readFileSync('src/json/users.json', 'utf8');
const accounts = JSON.parse(accountData);
const users = JSON.parse(userData);

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
    res.render('transfer')
});

app.post('/transfer', (req, res, next) => {
  // Calculate and set the from balance
 const fromBalance = accounts[req.body.from].balance - parseInt(amount);
  // Calculate and set the to balance
 const toBalance = accounts[req.body.to].balance + parseInt(amount);
});

app.listen(3000, () => {
    console.log('PS Project Running on port 3000!');
})