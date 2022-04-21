const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema( {
    userId:{
        type:ObjectId ,
        ref: "UserDocument"
    },
    productId:{
        type:ObjectId,
        ref: "productDocument"
    },
    amount: Number,
    isfreeappuser: {
        type: Boolean,
        default: false
    },
    date: String
    
}, { timestamps: true });


module.exports = mongoose.model('orderDocument', orderSchema) 

