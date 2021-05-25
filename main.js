


const insertionPoint = document.querySelector('#output')

for (let x of customers) {
    const customerCard = document.createElement('div')
    customerCard.classList.add('customer-card')
    insertionPoint.appendChild(customerCard)
    // grabbing and rendering the image
    const customerImg = document.createElement('img')
    customerImg.src = x.picture.large
    customerCard.appendChild(customerImg)
    // grabbing and redndering the name
    const customerName = document.createElement('h2')
    customerName.innerText = x.name.first + ' ' + x.name.last
    customerCard.appendChild(customerName)
    //grabbing and rendering the email
    const customerEmail = document.createElement('p')
    customerEmail.innerText = x.email
    customerCard.appendChild(customerEmail)
}