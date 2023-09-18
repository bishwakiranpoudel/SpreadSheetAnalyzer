const express = require('express');
const multer = require('multer');
const app = express();
const port = 3000;

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(express.json());

app.use('/', require('./routes/spreadsheet'));

app.listen(port, ()=>{
    console.log(`Server is running on Port: ${port}`);
})
