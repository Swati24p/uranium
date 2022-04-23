const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {type: String, required: true}, 
    authorName: String, 
    tags: [String],
    
    isPublished: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    sales: {type: Number, default: 10},
    

    summary :  mongoose.Schema.Types.Mixed,
    isDeleted:{type: Boolean, default: false} //true on book deletion i.e you flag the document/data as isDeleted: true..(mark "dirty")

}, { timestamps: true });


module.exports = mongoose.model('trycatchBooK', bookSchema) //users
