//main file
//dependencies
//import express from 'express';
const express = require('express');
const app = express();
const path = require('path');


//static web server
app.use(express.static(path.join(__dirname, 'dist')));


//REST API
app.use('/api/createinvoice', require('./routes/create.js'));

app.use('/api/readinvoice', require('./routes/read.js'));

app.use('/api/updateinvoice', require('./routes/update.js'));

app.use('/api/deleteinvoice', require('./routes/delete.js'));

//port
app.listen(3000, ()=>{
    console.log('listening on port 3000')
});