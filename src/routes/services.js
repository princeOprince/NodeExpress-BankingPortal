const express = require('express');
const router = express.Router();
const { accounts, writeJSON } = require('../data');

router.get('/transfer', (req, res, next) => {
  res.render('transfer');
});

router.post('/transfer', (req, res, next) => {
  // Calculate and set the from balance
  accounts[req.body.from].balance =
    accounts[req.body.from].balance - parseInt(req.body.amount);
  // Calculate and set the to balance
  accounts[req.body.to].balance =
    accounts[req.body.to].balance + parseInt(req.body.amount);

  writeJSON();
  res.render('transfer', { message: "Transfer Completed" });
});

router.get('/payment', (req, res, next) => {
  res.render('payment', { account: accounts.credit });
});

router.post('/payment', (req, res, next) => {
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

module.exports = router;