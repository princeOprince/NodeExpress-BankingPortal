const path = require('path');
const { accounts, users, writeJSON } = require('./data');
const accountRoutes = require('./routes/accounts');
const servicesRoutes = require('./routes/services');

const express = require('express');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/account', accountRoutes);
app.use('/services', servicesRoutes);

app.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Account Summary',
    accounts: accounts
  });
});

app.get('/profile', (req, res, next) => {
  res.render('profile', {
    user: users[0]
  });
});

app.listen(3000, () => {
  console.log('PS Project Running on port 3000!');
});