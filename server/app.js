const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

//=========Mongoose setting======================
mongoose.Promise('bluebird');
var mongoDB = 'mongodb://localhost/xiaomiforce1';
mongoose.connect(mongoDB);
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + mongoDB);
});

//========express=======================
const app = express();

//==========body-parser=================
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));

app.listen(3000, ()=>{
	console.log("You access port ", process.env.PORT)
})

module.exports = app;
