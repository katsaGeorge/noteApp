const mongoose = require('mongoose');
const express = require('express');

const app = express();
const port = 3000;

app.listen(port, ()=> console.log("Listens to 3000"))    

const user = require('./routes/user.route');
const note = require('./routes/usernote.route');
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({extended:false}));


mongoose.connect(process.env.MONGODB_URI)
    .then(
        () => {console.log("Connection with database established")},
        err => {console.log('Failed to connect to MongoDB', err)}
    );


 app.use('/api/users', user) ;
 app.use('/api/usernote',note);