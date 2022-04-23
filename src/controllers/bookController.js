const { count } = require("console")
//const bookModel = require("../models/bookModel")
const BookModel = require("../models/bookModel")

//1...
const createBook = async function (req, res) {
    try {
        let data = req.body
        console.log(data)
        if ( Object.keys(data).length != 0) {
            let savedData = await BookModel.create(data)
            res.status(201).send({ msg: savedData })
        }
        else res.status(400).send({ msg: "BAD REQUEST"})
    }
    catch (err) {
        console.log("This is the error :", err.message)
        res.status(500).send({ msg: "Error", error: err.message })
    }
}

//2...
const getBooksData = async function (req, res) {
      try{
        let allBooks = await BookModel.find({ authorName: "kabeer" })
    console.log(allBooks)
    if (allBooks.length > 0) 
    {res.status(200).send({ msg: allBooks, condition: true })
}
    else res.status(400).send({ msg: "credentials are not correct...bad request", condition: false })
}
catch (err){
    console.log("this is error :", err.message)
    res.status(500).send({msg: "error", error: err.message})
}
}

//3...
const updateBooks = async function (req, res) {
    try{  
    let data = req.body 
    let allBooks = await BookModel.findOneAndUpdate(
        { authorName: "kabeer" }, 
        { $set: data }, 
        { new: true, upsert: true } ,
    )
    res.status(200).send({ msg: allBooks })
}
catch(err){
    console.log("this is error :", err.message)
    res.status(500).send({msg: "error", error: err.message})
  }
}

//4...
const deleteBooks = async function (req, res) {
    try{
    let allBooks = await BookModel.updateMany (
        { authorName: "jsaiDeepak" }, 
        { $set: { isDeleted: true } }, 
        { new: true },
    )
    res.status(200).send({ msg: allBooks })
}
catch(err){
    console.log("this is error :", err.message)
    res.status(500).send({msg: "error", error: err.message})
  }
}


//5...
const totalSalesPerAuthor = async function (req, res) {
 try{
     let allBooks=req.body
     if(allBooks.authorName){
    let allAuthorSales = await BookModel.aggregate(
        [
            { $group: { _id: "$authorName", totalNumberOfSales: { $sum: "$sales" } } },
            { $sort: { totalNumberOfSales: -1 } }
        ]
    )
    res.status(200).send({ msg: allAuthorSales })
}
else
    res.status(400).send({ msg: "BAD REQUEST"})
}
catch(err){
    console.log("this is error :", err.message)
    res.status(500).send({msg: "error", error: err.message})
  }
}



module.exports.createBook = createBook
module.exports.getBooksData = getBooksData
module.exports.updateBooks = updateBooks
module.exports.deleteBooks = deleteBooks
module.exports.totalSalesPerAuthor = totalSalesPerAuthor
