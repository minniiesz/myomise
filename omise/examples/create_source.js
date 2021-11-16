'use strict';

exports.__esModule = true;
var amount = 500000;
var currency = 'thb';
var omise = require('../index')({
  'publicKey': process.env.OMISE_PUBLIC_KEY,
  'secretKey': process.env.OMISE_SECRET_KEY,
});

var source = {
  'type':     'internet_banking_bbl',
  'amount':   500000,
  'currency': 'thb',
};

omise.sources.create(source).then(function(resSource) {
  return omise.charges.create({
    'amount':     amount,
    'source':     resSource.id,
    'currency':   currency,
    'return_uri': 'https://omise.co',
  });
}).then(function(charge) {
  console.log(charge);
}).catch(function(err) {
  console.log(err);
});
