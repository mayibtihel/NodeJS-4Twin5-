const express = require ('express');
const router = express.Router();
var Contact = require('../models/contact.js');



//router.get('/', (req,res,next) => {
//res.json({message:'holaaa'});
//});


//get all contacts

router.get('/',async (req, res, next) => {
    await Contact.find({})
    .then((contact) => {
      res.status(200).json({ contacts: contact });
    })
    .catch((err) =>
      res.status(401).json({ message: "Error", error: err.message })
    );})



//add Contact

router.post('/addC',(req, res, next)=>{
    console.log(req.body.fullName);
    console.log(req.body.phone);
    var contact= new Contact({fullName:req.body.contactName , phone: req.body.telephone});
    contact.save((err, newContact)=>{
        if(err){
            console.log(`there is an error ${err}`)
        } else {
    console.log(newContact);
    res.json(newContact);
        }
})
    });


//get_by_id

router.get("/find/:id",function(req,res){
    Contact.findById(req.params.id).then(resutl=>{
        if(!resutl){return res.status(404).end();}
        return res.status(200).json(resutl)
    })
})



//update_contact

router.put("/update/:id",async (req,res)=>{
    try{
        await Contact.findOneAndUpdate({ _id : req.params.id},{
            fullName: req.body.contactName ,phone:req.body.telephone
 });
        res.send("Updateed Contaact!!!");
    }catch(err){
        res.send(err);
    }
});


//del_contact

router.delete("/delete/:id",async(req,res,next)=>{
    try {
     id = req.params.id
     deletedContact = await Contact.findByIdAndDelete({_id:id});
     res.status(200).send("Deleeteed Contaact!!!")
    } catch (error) {
     res.status(400).send(error)
     
    }
  })



module.exports = router;