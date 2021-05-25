
let customerFirstNames = customers.map((cus) => cus.name.first)
let customerImages = customers.map((cus) => cus.picture.medium)



function renderNames(arr) {
    // scoutFirstNames.forEach()
    arr.forEach(name => {
        let h2 = document.createElement("h2")
        h2.innerText = name;
        document.getElementById("output").appendChild(h2)
    });
}

function renderImages(arr) {
    arr.forEach(image => {
        let pic = document.createElement("img")
        pic.src = image
        document.getElementById("output").appendChild(pic)
    })
}

renderNames(customerFirstNames)
renderImages(customerImages)