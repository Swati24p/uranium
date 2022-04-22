const { count } = require("console")
const bookModel = require("../models/bookModel")
const BookModel = require("../models/bookModel")


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


const getBooksData = async function (req, res) {
      try{
        let allBooks = await BookModel.find({ authorName: "jsaiDeepak" })
    console.log(allBooks)
    if (allBooks.length > 0) 
    {res.status(201).send({ msg: allBooks, condition: true })
}
    else res.status(400).send({ msg: "No authorName found", condition: false })
}
catch (err){
    console.log("this is error :", err.message)
    res.status(500).send({msg: "error", error: err.message})
}
}


const updateBooks = async function (req, res) {
    try{
        
    let data = req.body 
    let allBooks = await BookModel.findOneAndUpdate(
        { authorName: "jsaiDeepak" }, 
        { $set: data }, 
        { new: true, upsert: true } ,
    )

    res.status(201).send({ msg: allBooks })

}

catch(err){
    console.log("this is error :", err.message)
    res.status(500).send({msg: "error", error: err.message})

}
}


const deleteBooks = async function (req, res) {
    try{
      
 
    let allBooks = await BookModel.updateMany(
        { authorName: "jsaiDeepak" }, 
        { $set: { isDeleted: true } }, 
        { new: true } ,
    )

    res.status(201).send({ msg: allBooks })


}
catch(err){
    console.log("this is error :", err.message)
    res.status(500).send({msg: "error", error: err.message})

}
}



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

    res.status(201).send({ msg: allAuthorSales })
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
