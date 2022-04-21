
const headerCheck = async function (req,res, next){
const header = req.headers;
if(header["isfreeappuser"]){
     next();
}
else {
   res.send({ msg: "the request is missing a mandatory header!" })
}

};


const headerValidator = function(req,res,next){
    req.headers['isfreeappuser']=true;
    next();
}


module.exports.headerCheck = headerCheck
module.exports.headerValidator = headerValidator




const isValidObjectId = function (objectId) {
    return mongoose.Types.ObjectId.isValid(objectId)
}
const BooksDB= async function (req, res){
if(!req.body.userId){
    res.send("author Detail is required")
}
if(!req.body.publisher){
    res.send("publisher Detail is required")
}
if(!isValidObjectId(req.body.author)){
    res.send({msg:"author detail is not valid"})
}
if(!isValidObjectId(req.body.publisher)){
    res.send({msg:"publisher detail is not valid"})
}
let book = await newBookModel.create(req.body)
res.send({data: book})
}