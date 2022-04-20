const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://FunctionUp-Uranium1:GQgLhymenkDpmdlI@cluster0.xmo61.mongodb.net/SWATI-DB", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


const moment = require('moment');
let time = moment();
app.use (function (req, res, next) {
    const today = moment();
     let x= today.add("days")
    console.log(x);
    let ip= req.ip
    console.log(ip);
    let url= req.originalUrl
    console.log(url);
    next()
});
 //console.log(time.format('h:mm:ss a'));

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
