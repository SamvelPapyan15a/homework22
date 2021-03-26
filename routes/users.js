const express = require('express');
const router = express.Router();

router.route('/').get((req,res)=>{
   res.end(`${new Date().getHours()} GET`);
}).post((req,res)=>{
    res.end(`${new Date().getHours()} POST`);
}).put((req,res)=>{
    res.end(`${new Date().getHours()} PUT`);
}).delete((req,res)=>{
    res.end(`${new Date().getHours()} DELETE`);
});

module.exports = router;