const express = require('express.js');
const fs = require('fs');
const api = require('./routes/index.js');
const path = require('path');

const PORT = process.env.port || 3001;


//create a port to listen on 3001
//create const and needed requires
//create a db.json
//retrieve notes using the 'fs'
//get /notes to return notes.html file
//use previous line to add it to db.json body
//research npm packages on saving the notes