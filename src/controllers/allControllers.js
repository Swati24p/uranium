const boookModel= require("../models/boookModel")
const authorModel= require("../models/authorModel")

//problem no 1
const bookDB = async function (req, res) {
    let savedData= await boookModel.create(req.body)
    res.send({ savedData })
}
const authorDB = async function (req, res) {
    let savedData= await authorModel.create(req.body)
    res.send({ savedData })
}

//problem 02
const bookList = async function (req,res) {
    let details = await authorModel.find({author_name: "Chetan Bhagat"})
    let data = details[0].author_id
    let booksName = await boookModel.find({author_id: data}).select({name:1})
    res.send({booksName})
}

//promblem 03
const priceUpdate = async function(req,res){
    let details = await boookModel.find({name: "Two states"})
    let data = details[0].author_id
    let authorget = await authorModel.find({author_id: data}).select({author_name: 1, _id:0})

    let book = details[0].name
    let upbookprice = await boookModel.findOneAndUpdate({name: book},{price:100},{new:true}).select({price:1, _id:0})
    res.send({authorget , upbookprice})
}

//problem 04
const inBetweencost = async function(req,res){
    const booksId = await boookModel.find({price: {$gte:50,$lte:100}}).select({author_id:1,_id:0})
    const id = booksId.map(inp => inp.author_id)
 
    let temp=[]
    for(let i=0; i<id.length; i++){
       let x = id[i]
       const author = await authorModel.find({author_id:x}).select({author_name:1,_id:0})
       temp.push(author)
    }
    const authorName = temp.flat()
    res.send({msg:authorName})
}

module.exports.bookDB = bookDB
module.exports.authorDB = authorDB
module.exports.bookList = bookList
module.exports.priceUpdate = priceUpdate 
module.exports.inBetweencost=inBetweencost 