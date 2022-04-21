const req = require("express/lib/request")
const userModel= require("../models/userModel")
const mongoose = require('mongoose');
const productModel= require("../models/productModel")
const orderModel= require("../models/orderModel")

//2. Write a POST api to create a user that takes user details from the request body. If the header isFreeAppUser is not present terminate 
//the request response cycle with an error message that the request is missing a mandatory header.
const createUser = async function (req, res) {
    let userDB= await userModel.create(req.body)
    res.send({ userDB })
}

// 1. Write a POST api to create a product from the product details in request body.
const createProduct = async function (req, res) {
    //data['isFreeAppUser']=req.headers.isfreeappuser
    let productDB= await productModel.create(req.body)
    res.send({ productDB })
}

//3.
const createOrderData = async function(req,res)
{
    let data=req.body;
    let user=await userModel.findById(data.userId);
    if(user)
    {
        let product=await productModel.findById(data.productId);
        if(product)
        {
            if(req.headers.isfreeappuser =='true')
            {
                data['amount']=0;
                data['isfreeappuser']=req.headers.isfreeappuser;
                let newData=await orderModel.create(data);
                res.send({msg : newData});
            }
            else
            {
                if(user.balance>=product.price)
                {
                    await userModel.findOneAndUpdate(
                        {_id : data.userId},
                        {$set : {balance : user.balance-product.price}}
                    );
                    data['amount']=product.price;
                    data['isFreeappuser']=req.headers.isfreeappuser;
                    let newData=await orderModel.create(data);
                    res.send({msg : newData});
                }
                else
                {
                    res.send("Insufficient Balance!")
                }
            }
        }
        else
        {
            res.send('Invalid ProductID!');
        }
        
    } 
    else
    {
        res.send('Invalid UserID!');
    }
}







module.exports.createUser = createUser
module.exports.createProduct = createProduct
module.exports.createOrderData = createOrderData
