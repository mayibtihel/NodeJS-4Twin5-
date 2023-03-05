const express = require("express");
const logger=require('morgan');
const createEroor=require('http-errors');
const app = express();
const studentsRouter=require('./routes/student.js');
const mongoose=require('mongoose');
//const dbconfig=require('./database/mongodb.json')
const route= express.Router()
mongoose.connect('mongodb://localhost:27017/StudentDB')
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/student',studentsRouter);

 app.use((req, res, next) =>{
      next(createEroor(404));
});

//mongoose.connect(dbconfig.mongo.uri)

module.exports=app;