const mongoose = require('mongoose');
const batchModel= require("../models/batchModel")


//1. Write an api POST /batches that creates a batch from the details in the request body. 
//Please note that the program should be an enum with the following allowed values only - backend and frontend

const batchDB = async function (req, res) {
    let saveDB= await batchModel.create(req.body)
    res.send({data: saveDB })
}













module.exports.batchDB = batchDB

