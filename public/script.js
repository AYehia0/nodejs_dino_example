function createImage(imgUrl){
    //check if the img exists
    imgExist = document.getElementById("dinoImg")

    if (imgExist) {
        imgExist.remove()
    }

    //create img element
    var img = document.createElement("img")
    img.src = imgUrl
    img.id = "dinoImg"
    document.body.appendChild(img) 

}


async function getInfo() {
    //calls the api to fetch the data 
    const res = await fetch("/getinfo")
    const data = await res.json()

    dinoName = data["name"]
    dinoImg = data["url"]
    // show in the HTML
    document.getElementById("dinoName").textContent = dinoName 
    createImage(dinoImg)

}
