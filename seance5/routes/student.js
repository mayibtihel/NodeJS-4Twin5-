var express = require('express');
const student = require('../models/student');
var router = express.Router();
const service=require('../service/student')

router.post('/add',service.save);


router.get('/',service.getall );

router.get('/:name',service.getbyname)

router.get('/:id',service.update)



   module.exports=router