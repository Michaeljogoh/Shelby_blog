const express = require('express');
const app = express();
const router = express.Router();
const { schema } = require('../model/Rooms');
const Room = require('../model/Rooms');
const Topic = require('../model/Topics');
const Posts = require('../model/Comment')
const {ensureAuthenticated} = require('../config/auth')

router.get('/', (req,res)=>{
  
  Topic.find(function(err, fields){
  Room.find(function(err,results){
      if(err){
        console.log(err + " Nothing was fetched")
      }else{
        res.render("index",{
          rooms:results,
          topics:fields,
          
        })  
      }
 })
})

})
 
module.exports=router;