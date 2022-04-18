const mongoose = require('mongoose');
const newAuthorModel = require("../models/newAuthorModel")
const newBookModel = require("../models/newBookModel")
const newPublisherModel = require("../models/newPublisherModel")


// 1. Write a POST api that creates an author from the details in request body.
const createAuthorDB = async function (req, res) {
    let savedDB= await newAuthorModel.create(req.body)
    res.send({ savedDB })
}

// 2. Write a POST api that creates a publisher from the details in the request body
const createPublisherDB = async function (req, res) {
    let savedDB= await newPublisherModel.create(req.body)
    res.send({ savedDB })
}

//3. Write a POST api that creates a book from the details in the request body. 
//   The api takes both the author and publisher from the request body. 

const isValidObjectId = function (objectId) {
    return mongoose.Types.ObjectId.isValid(objectId)
}
const BooksDB= async function (req, res){
if(!req.body.author){
    res.send("author Detail is required")
}
if(!req.body.publisher){
    res.send("publisher Detail is required")
}
if(!isValidObjectId(req.body.author)){
    res.send({msg:"author detail is not valid"})
}
if(!isValidObjectId(req.body.publisher)){
    res.send({msg:"publisher detail is not valid"})
}
let book = await newBookModel.create(req.body)
res.send({data: book})
}

// 4. Write a GET api that fetches all the books along with their author details 
//    (you have to populate for this) as well the publisher details (you have to populate for this) .

const BooksWithAuthorDetails = async function (req, res) {
    let books = await newBookModel.find()
    let authorDetails = await newBookModel.find().populate('author')
    let publisherDetails = await newBookModel.find().populate('publisher')
    res.send({books , authorDetails , publisherDetails})
}

5.//Create a new PUT api /books and perform the following two operations......

//a) Add a new boolean attribute in the book schema called isHardCover with a default false value. 
//For the books published by 'Penguin' and 'HarperCollins', update this key to true.

const trueBookspublisher= async function (req, res) {
    let publishedBooks= await newBookModel.updateMany({publisher: '6259a5f9fbfa67fbad43d5e6'}, 
    {$set:{isHardCover: true}}, {new: true, upsert: true})

    let publishedBoooks= await newBookModel.updateMany({publisher: '625a7b853fa7885c9f127a5f'}, 
    {$set:{isHardCover: true}}, {new: true, upsert: true})

    res.send({output: publishedBooks, publishedBoooks })
}


//b) For the books written by authors having a rating greater than 3.5, update the books price by 10 
//(For eg if old price for such a book is 50, new will be 60) 

const updateBookprice = async function(req,res){
    let priceUpdate= await newBookModel.updateMany({ratings:{$gt:3.5}}, 
    {$inc: {price:10}}, {new: true, upsert: true})
    
    res.send({priceUpdate})
}


module.exports.createAuthorDB = createAuthorDB
module.exports.createPublisherDB = createPublisherDB
module.exports.BooksDB = BooksDB
module.exports.BooksWithAuthorDetails = BooksWithAuthorDetails
module.exports.trueBookspublisher = trueBookspublisher
module.exports.updateBookprice = updateBookprice
