const express = require('express');
//const logger = require('./logger')

 const router = express.Router();

// router.get('/user-profile/:abcd', function(req, res) {
//     console.log(req)
//     console.log(req.params.abcd)
//     res.send('dummy response')
// })

// router.get('/test-me', function (req, res) {
//     console.log('------------------')
//     console.log(req)
//     console.log('------------------')
//     console.log('These are the request query parameters: ', req.query)
//     res.send('My first ever api!')
// });
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
        'name': 'Incendies'
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
 

module.exports = router;
// adding this comment for no reason