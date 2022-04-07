const express = require('express');
const logger = require('../logger/logger')

const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('------------------')
    console.log(req)
    console.log('------------------')
    console.log('These are the request query parameters: ', req.query)
    res.send('My first ever api!')
});

//let arr = ['swati','sunil','akash','anu','shweta','jiya','sandeep','shani','shruti','kanchan'];
router.get('/all-Candidates', function (req, res) {
    let arr = ['swati','sunil','akash','anu','shweta','jiya','sandeep','shani','shruti','kanchan'];
    res.send(arr)
});

router.get('/candidates', function(req, res) {
    let arr = ['swati','sunil','akash','anu','shweta','jiya','sandeep','shani','shruti','kanchan'];
    let arr2 = []
    const abc = (req.query.count)
     if(abc > 0 && abc <= 10)
    for(let i=0; i<count; i++){

         arr2.push(arr[i])

     } res.send(arr2)
console.log(abc);
 });

module.exports = router;
// adding this comment for no reason