var express = require('express');
var router = express.Router();

var customer = require('../model/dataSchema')

router.post('/create',(req,res,next) => {
    var newCustomer = new customer({
        name:req.body.name,
        age:req.body.age
    })

    newCustomer.save((err,customer) =>{
        if (err) {
            res.status(200).json({msg:'post request is working'})
            res.status(500).json({msg: customer})
        }
    })
})

router.get('/read',(req,res,next) => {
    customer.find({},(err,customer) =>{
        if (err) {
            res.status(200).json({msg:'post request is working'})
            res.status(500).json({msg: customer})
        }
    })
  })
  
  router.put('/update',(req,res,next) => {
      customer.findById(req.body._id,(err,customer) =>{
        if (err) {
            customer.name = req.body.name;
            customer.age = req.body.age;
            customer.save((err,customer) => {
                res.status(200).json({errMsg:err})
                res.status(500).json({msg: customer})
            })
           
        }
      })
  })

  router.delete('/delete/:id',(req,res,next) => {
    res.status(200).json({msg:'delete request is working'})
  })


  module.exports = router