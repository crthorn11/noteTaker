const express = require('express');
const path = require('path');
const fs = require("fs");

// let myDb = require("./db/db.json")

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// GET Route for index
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);



app.get('/api/notes', (req, res) =>
  fs.readFile("./db/db.json", "utf-8", function (err, data) {
    if (err) {
      console.log(err)
    } else {
      console.log(data);
      const parsedData = JSON.parse(data)
      res.status(200).json(parsedData)
    }
  })
);

app.post("/api/notes", (req, res) => {
  console.log(req.body)
  fs.readFile("./db/db.json", "utf-8", function (err, data) {
    if (err) {
      console.log(err)
    } else {
      console.log(data);
      const parsedData = JSON.parse(data)

      parsedData.push(req.body)

      // update the file
      fs.writeFile("./db/db.json", JSON.stringify(parsedData), function() {
        console.log("File has been updated!")
        res.status(200).json(parsedData)

      })
    }
  })
})

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
