const UserModel= require("../models/userModel")

//1...
const createUser= async function (req, res) {
    try{
    let data= req.body
    if (Object.keys(data).length != 0){
    let savedData= await UserModel.create(data)
    res.status(201).send({msg: savedData})
}
else res.status(400).send({ msg: "BAD REQUEST"})
}
catch(error){
    console.log("This is the error :", error.message)
    res.status(500).send({ msg: "Error", error: error.message })
}
}


//2...
const getUsersData= async function (req, res) {
    try{   
    let allUsers= await UserModel.find()
    console.log(allUsers)
    if (allUsers != 0){
    res.status(200).send({msg: allUsers})
 }
else res.status(400).send({ msg: "BAD REQUEST"})
}
catch(error){
    console.log("This is the error :", error.message)
    res.status(500).send({ msg: "Error", error: error.message })
}
}


module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
