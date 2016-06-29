var React = require("react");

var text = 'hola mundo';
var text1 = require('./text1.js');
var text2 = require('./text2.js');
var space = require('./concat.js');

module.exports = space(text1,text2);
