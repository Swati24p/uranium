const axios = require('axios');


//1...-----------------------------------------------get weather of london------------------------------------------------------//

let getweather = async function (req, res) {
    try {
        let London = req.query.london
        let appid = req.query.appid
        console.log(`query params are: ${London} ${appid}`)
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${London}&appid=${appid}`
        }
        let result = await axios(options)
        console.log(result.data.main.temp)
        res.status(200).send({ msg: result.data.main.temp })          // just add or remove (.main.temp) to show the all summary oflondon weather.
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

//2...-------------------------------------get temp. of london-------------------------------------------------------//

let getsortcitiestemp = async function (req, res) {
    try {

        let cities = ['bengaluru','Mumbai','kolkata','chennai','London','Moscow']
        let Objarray = []

        for(i=0; i<cities.length; i++) 
        {
            let obj = { city: cities[i] }
            let res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=ab4acba4d53a2a38905afc72d7a6e9d2`)
            console.log(res.data.main.temp)

            obj.temp = res.data.main.temp
            Objarray.push(obj)
        }
        let sorted = Objarray.sort( function (a,b) { return a.temp - b.temp})
        console.log(sorted)
        res.status(200).send({ status: true,data: sorted})
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


module.exports.getweather= getweather
module.exports.getsortcitiestemp= getsortcitiestemp