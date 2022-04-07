const express = require('express');
const logger = require('./logger')

const router = express.Router();

router.get('/all-candidates', function (req, res) {
    // console.log('------------------')
    // console.log(req)
    // console.log('------------------')
    // console.log('These are the request query parameters: ', req.query)
    let batch=["Ram","Dheeraj","Gourav","Pritam","Karan"];
    console.log(batch);

});

    router.get('/candidates', function (req, res){
        let batch=["Ram","Dheeraj","Gourav","Pritam","Karan","Mohit","Ashish","Monty","Yash","Suyash"];
 
    if(req.query.count>0 && req.query.count<=10){
        for(let i=0; i<req.query.count; i++){
            console.log(batch[i]);
    }
    
    }
    else console.log("count must be less than 10");
    res.send('My first ever api!')
});




module.exports = router;
// adding this comment for no reason