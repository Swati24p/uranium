const axios = require('axios');

//1...----------------------------------------Axios post request memeCreation------------------------------------------------------------------//


let createMeme = async function (req, res) {
    try {
        let id = req.query.template_id;
        let username = req.query.username;
        let pwd =  req.query.password;
        let text0 = req.query.text0;
        let text1 = req.query.text1;

        console.log(`query params are: ${id} ${text0} ${text1} ${username} ${pwd}`)
        var options = {
            method: "get",
            url: `https://api.imgflip.com/caption_image?template_id=${id}&username=${username}&password=${pwd}&text0=${text0}&text1=${text1}`
        }
        let result = await axios(options)
        console.log(result.data)
        return res.status(200).send({ msg: result.data })
        //console.log({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}





module.exports.createMeme=createMeme