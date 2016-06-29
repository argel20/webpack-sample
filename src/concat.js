var mayus = require('./upper.js')
module.exports = (a, b) => {
  a = mayus(a)
  return a+' '+ b;
};
