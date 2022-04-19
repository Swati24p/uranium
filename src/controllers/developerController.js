const mongoose = require('mongoose');
const developersModel= require("../models/developersModel")
const batchModel= require("../models/batchModel")
// 2. Write an api POST  /developers that creates a developer from the details in the request body.
// Please note that the gender should be an enum with the following allowed values - male, female and other.
//  Also, batch attribute is a reference to the batches collection.

const developerDB = async function (req, res) {
    let saveDB= await developersModel.create(req.body)
    res.send({ saveDB })
}



// 3. Write an api GET /scholarship-developers that fetches the list of eligible developers for scholarship.
//  An eligible developer is female with percentage greater than or equal to 70

const scholarDeveloper = async function (req, res) {
    let scholar = await developersModel.find({gender:'female',percentage:{$gte: 70}}).select({name:1, _id:1,percentage: 1});
    res.send({List : scholar})
}
    


//4. Write an api GET /developers?percentage=value1&program=value2 that only returns the developers for a given
//  program with a percentage greater than or equal to the received value. Please note the batch name and the 
//  program values are received in the request as query params.

const Developer = async function (req, res) {
   let per = req.query.percentage;
   let prg = req.query.program;
   let batch = await batchModel.find({ program: prg})
   let data = batch.map(x => x._id)
        if (per){
            if(prg){
                let result = await developersModel.find({$and:[{percentage:{$gte: per}}, {batch: data}]}).populate('batch')
                res.send({ result })
            }else {
                res.send({result: "program missing"})
            }
        }else{
            res.send({result: "percentage missing"})
        }
    }





module.exports.developerDB = developerDB
module.exports.scholarDeveloper = scholarDeveloper
module.exports.Developer = Developer