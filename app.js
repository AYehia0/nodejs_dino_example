const express = require("express")
const fetch = require("node-fetch")
const cheerio = require("cheerio")
const got = require('got')


const app = express()

const PORT_NUM = 8080
const dinoURL = "https://dinosaurpictures.org/random"

//for serving the static files
app.use(express.static("public"))

app.listen(PORT_NUM, () => {
    console.log(`Connected on port ${PORT_NUM}`)
})

app.get("/getinfo", async (req, res, next) => {

    urls = []
    const response = await got(dinoURL) 
    const $ = cheerio.load(response.body);

    pageTitle = $("title").text()

    dinoName = pageTitle.split(" ")[0]
 
    $("a").each((i, url) => {

        const href = url.attribs.href
        if (href.includes(".jpg")) {
            urls.push(href) 
        }
    })

    res.json({name:dinoName, url:urls[0]})
})
