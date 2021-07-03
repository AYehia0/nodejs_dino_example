const express = require("express")
const fetch = require("node-fetch")
const app = express()

const PORT_NUM = 8080

//for serving the static files
app.use(express.static("public"))

app.listen(PORT_NUM, () => {
    console.log(`Connected on port ${PORT_NUM}`)
})

//getting the dino info from an API
// http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=2
app.get("/getdino", async (req, res) => {

    // GET request to the API
    const getReq = await fetch("http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=2")

    // Parsing to json
    jsonData = await getReq.json()

    res.json(jsonData)
})