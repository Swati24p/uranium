const bookdata= require("../shelfs/bookshelfs");

const addBookDEtails = async function (req, res) {
    let data= req.body
    let bodyData = await bookdata.create(data)
    res.send({ booksAdd: bodyData })
}

const getBookData= async function (req, res) {
    let allBooks = await bookdata.find()
    res.send({ Booklist: allBooks })
}

module.exports.addBookDEtails = addBookDEtails;
module.exports.getBookData = getBookData;