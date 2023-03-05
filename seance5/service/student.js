
const student = require('../models/student.js');
var Student=require('../models/student.js')

const save =(req, res, next) => {
    var student = new Student({name:req.body.nameStudent,age:req.body.ageStudent});
    student.save((err,newStudent)=>{
        if(err){
            console.log(`there is an errorr ${err}`);

        }else{
            console.log(newStudent)
            res.json(newStudent);
        }

    })
    console.log('hello')
}

const getall=(req, res, next) => {

   const std= Student.find((err,student)=>{

    if(err){
        console.log(`there is an errorr ${err}`);

    }else{
        console.log(student)
        res.json(student);
    }

   })


  //  res.json({message:'hello'});
   }

   const getbyname=(req, res, next) => {

    const std= Student.findOne({name:req.params.name},(err,student)=>{

        if(err){
            console.log(`there is an errorr ${err}`);
    
        }else{
            console.log(student)
            res.json(student);
        }
    
       })
   } 

   const update=(req, res, next) => {
    //var student = new Student({name:req.body.nameStudent,age:req.body.ageStudent});
    student.updateOne({_id:req.params.id}, 
        {name:req.body.nameStudent}, function (err, docs) {
        if (err){
            console.log(err)
        }
        else{
          //  console.log("Updated Docs : ", docs);
            res.json(docs)
        }
    });
   }
module.exports={save,getall,getbyname,update}