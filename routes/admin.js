const express = require('express'),
app = express(),
router = express.Router();
const { schema } = require('../model/Rooms');
const Room = require('../model/Rooms');
const Topic = require('../model/Topics');
const Posts = require('../model/Comment')


router.get("/forms", (req,res)=>{
  Topic.find(function(err, results){
    if(err){
      console.log(err)
    }else{
      res.render('forms', 
        {
          topics:results
        })
    }
    
  })
})
router.post("/form1", (req,res)=>{
  let room_name = req.body.room_name;
  const room= new Room ({room_name});

  room.save(function(err){
    if(err){
        console.log(err +"Nonthing was saved")
    }else{
        console.log("Room successfully inserted")
      }
    })

    res.redirect("/")
})
router.post("/form2", (req,res)=>{
  let topic_name = req.body.topic_name;
  const topic= new Topic ({topic_name});

  topic.save(function(err){
    if(err){
        console.log(err +"Nonthing was saved")
    }else{
        console.log("Topic successfully inserted")
      }
    })

    res.redirect("/")
})

 
 
router.post("/form3/:topicName", (req,res)=>{
  let comment = req.body.comment;
  let commenter = req.body.commenter;
  let comment_email = req.body.comment_email;
  let topic_name = req.params.topicName;
  let date = new Date();
    const comments = new Posts ({comment, commenter,  comment_email, topic_name, date });
  comments.save(function(err){
    
    if(err){
        console.log(err +"New Comment not created")
    }else{
        console.log("comment successfully inserted")
      }
    })

    res.redirect("/")
  })
  router.get('/post/:postName', (req,res)=>{
    let requestedPost = req.params.postName
    Posts.find({topic_name:requestedPost}, function(err,results){
      Room.find(function(err,fields){
        Topic.find(function(err,tops){

        
        if(err)
      {
      console.log(err)
      
      }else{  
           res.render("post", {
             posts:results,
             rooms:fields,
             topics:tops,
             requestedPost:requestedPost
           })
      }
    })
})
})
})

router.get('/delete/:commentid', (req,res)=>{
  let com_id = req.params.commentid
  Posts.deleteOne({_id:com_id}, function(err){
    if(err){
      console.log("failed to delete " + err)
    } else {
      res.redirect("/")
      console.log("comment deleted")
    }
  })
})
module.exports=router;