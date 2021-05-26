


const insertionPoint = document.querySelector('#output')

for (let x of customers) {
    const customerCard = document.createElement('div')
    customerCard.classList.add('customer-card')
    insertionPoint.appendChild(customerCard)
    // grabbing and rendering the image
    const customerImg = document.createElement('img')
    customerImg.src = x.picture.large
    customerCard.appendChild(customerImg)
    // grabbing and rendering the name
    const customerName = document.createElement('h2')
    customerName.innerText = x.name.first + ' ' + x.name.last
    customerCard.appendChild(customerName)
    //grabbing and rendering the email
    const customerEmail = document.createElement('p')
    customerEmail.innerText = x.email
    customerCard.appendChild(customerEmail)
    // customer's address
    const customerAdress1 = document.createElement('p')
    customerAdress1.innerText = x.location.street.number + ' ' + x.location.street.name
    customerCard.appendChild(customerAdress1)
    const customerAdress2 = document.createElement('p')
    const state = nameToAbbr(x.location.state)
    customerAdress2.innerText = x.location.city + ' ' + state + ' ' + x.location.postcode
    customerCard.appendChild(customerAdress2)
}