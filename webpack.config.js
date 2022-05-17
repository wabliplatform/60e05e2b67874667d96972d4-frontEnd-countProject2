const path = require('path');

module.exports = {
  entry: {
	'Dashboard' : './javascript/Dashboard.js',
	'Count' : './javascript/Count.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};