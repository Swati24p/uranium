const express = require('express');
const res = require('express/lib/response');
//const logger = require('./logger')

 const router = express.Router();


// Problem 01

router.get('/movies',function(req,res) {

    let abcd = ['rang de basanti','the conjuring','gaudian of the galaxy','Pushpa','batman begins'];
    res.send(abcd);
});

//Problem 02
router.get('/movies/:index',function(req,res){
   const index=req.params.index;
    let abcd = ['rang de basanti','the conjuring','gaudian of the galaxy','Pushpa','batman begins'];
    if(index > abcd.length){

        res.send('use a valid index')      //merge with problem 03
    }
    else{
        res.send(abcd[index]);
    }
    res.send(abcd)
});

//Problem 04
router.get('/films/:uniqueId',function(req,res) {
   const index =req.params.uniqueId;

 let p = [ {
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'Inscidios'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }]
       res.send(p[index]);
       
});

//Problem 05
router.get('/films/:filmId', function (req, res) {

    const movie = [ {
     'id': 1,
     'name': 'The Shining'
    }, {
     'id': 2,
     'name': 'Incendies'
    }, {
     'id': 3,
     'name': 'Rang de Basanti'
    }, {
     'id': 4,
     'name': 'Finding Nemo'
    }]

 const id = req.params.filmId

    if (  id < movie.length) {

        res.send(movie[id])
    }
    else {
        res.send('No movie exists with this id')
    }
      
 });

 //Problem 06

// -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7] : 4 is missing
router.get("/missingNo", function (req, res) {
//logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
    let arr= [1,2,3,5,7,8,9]
    let sum = 0;
  
    for (var i in arr) {
        sum += arr[i];
    }
    let lastDigit= arr.pop()
    let consecutiveSum = lastDigit * (lastDigit+1) / 2
    let missingNumber = consecutiveSum - sum
  
    res.send(  { data: missingNumber  }  );

  });
  
  //Problem 07

  // -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing
 router.get("/sol2", function (req, res) {
    //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
    let arr= [33, 34, 35, 37, 38]
    let len= arr.length
  
    let total = 0;
    for (var i in arr) {
        total += arr[i];
    }
  
    let firstDigit= arr[0]
    let lastDigit= arr.pop()
    let consecutiveSum= (len + 1) * (firstDigit+ lastDigit ) / 2
    let missingNumber= consecutiveSum - total
   
    res.send(  { data: missingNumber  }  );
  });
  
 
 
module.exports = router;
// adding this comment for no reason