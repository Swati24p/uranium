const mongoose = require('mongoose')

const bookModel = new mongoose.Schema( {
    bookName: {
        type:String,
        required: true,
    },
    indianPrice: String,
    europePrice: String,
    
    year: {type: Number , default: 2021},
    //tags: ["adventure","suspense","thriller","comedy","horror","Fiction"],
    authorName: String,
    totalPages: Number,
    stockAvailable: Boolean

}, { timestamps: true });


module.exports = mongoose.model('BookCollection', bookModel)