const express = require('express');
const router = express.Router();
const { accounts } = require('../data');

router.get('/savings', (req, res, next) => {
  res.render('account', {
    account: accounts.savings
  });
});

router.get('/checking', (req, res, next) => {
  res.render('account', {
    account: accounts.checking
  });
});

router.get('/credit', (req, res, next) => {
  res.render('account', {
    account: accounts.credit
  });
});