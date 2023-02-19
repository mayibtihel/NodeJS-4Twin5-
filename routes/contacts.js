const express = require ('express');
const router = express.Router();
var Contact = require('../models/contact.js');



router.get('/', (req,res,next) => {

res.json({message:'holaaa'});

});



router.get('/', function(req, res, next) {
    Contact.find(
    (err, contacts) =>{
    res.render(
    'form.twig',
    { title :
    "Contact list", cont :
    contacts
    });}

    );
});


router.post('/',(req, res, next)=>{
    console.log(req.body.contactName);
    console.log(req.body.telephone);
    var contact= new Contact({fullName:req.body.contactName  , phone: req.body.telephone});
    contact.save((err, newContact)=>{
        if(err){
            console.log(`there is an error ${err}`)
        } else {
    //console.log(newContact);
    res.json(newContact);
        }
    
    })
    });




    router.get('/',(req, res, next)=>{
        res.json({message:'holaaa'});

        var contact= new Contact({fullName:req.body.contactName  , phone: req.body.telephone});
        contact.save((err, newContact)=>{
            if(err){
                console.log(`there is an error ${err}`)
            } else {
        //console.log(newContact);
        res.json(newContact);
            }
        
        })
        });
    
    
    









module.exports = router;