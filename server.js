const express = require('express.js');
const fs = require('fs');
const api = require('./routes/index.js');
const path = require('path');

const PORT = 3001;

const app = express();

app.get('/', (req, res) => {
    res.send(
        `<p>adding saving and deleting notes</p>`
    );
});

app.get('/api/notes', (req, res) => {
    res.json({
        term: 'api',
        description:
        'A note taking application allowing clients to add, delete and save notes',
    });
});

app.listen(PORT, () =>
console.log(`Example app listening at http://localhost:${PORT}`)
);
//create a port to listen on 3001
//create const and needed requires
//create a db.json
//retrieve notes using the 'fs'
//get /notes to return notes.html file
//use previous line to add it to db.json body
//research npm packages on saving the notes