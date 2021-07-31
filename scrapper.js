const fs = require('fs')
const cheerio = require('cheerio')
const got = require('got')

const dinoURL = "https://dinosaurpictures.org/random"


async function getUrls ($) {

    let urls = []
    const response = await got(dinoURL) 
    const x = cheerio.load(response.body);

    console.log(x("title").text())
    
}

getUrls()