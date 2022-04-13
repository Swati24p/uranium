const bookCollectionModel= require("../models/bookCollectionModel")

const createBook1= async function (req, res) {
    let data= req.body
    let savedData= await bookCollectionModel.create(data)
    res.send({ savedData })
}

const bookList2= async function (req, res) {
    let bookData= await bookCollectionModel.find().select({ bookName: 1, authorName: 1, _id: 0 })
    res.send({ list: bookData })
}

const getXINRBooks3 = async function (req, res) {
    let bookData = await bookCollectionModel.find({ $or: [{ indianPrice: "100INR" } , { indianPrice: "200INR" }, { indianPrice: "500INR" }] })
    res.send({ list: bookData })
}

const getRandomBooks4 = async function (req, res) {
    let bookData = await bookCollectionModel.find({ $or: [{ stockAvailable: true } , { totalPages: { $gte: "500" } }] })
    res.send({ list: bookData })
}

const getBooksInYear5 = async function (req, res) {
    let data = req.body
    data.year 
    let bookData = await bookCollectionModel.find(data)
    res.send({ list: bookData })
}

const getParticularBooks6 = async function (req, res) {
    let data = req.body;
    let bookData = await bookCollectionModel.find(data)
    res.send({ bookData })
}

module.exports.createBook1= createBook1
module.exports.bookList2= bookList2
module.exports.getXINRBooks3 = getXINRBooks3
module.exports.getRandomBooks4 = getRandomBooks4
module.exports.getBooksInYear5 = getBooksInYear5
module.exports.getParticularBooks6 = getParticularBooks6