
// function for changing first letters of names to uppercase
function capitalize(s)
{
    return s[0].toUpperCase() + s.slice(1);
}

const insertionPoint = document.querySelector('#output')

for (let x of customers) {
    const customerCard = document.createElement('div')
    customerCard.classList.add('customer-card')
    insertionPoint.appendChild(customerCard)
    // customer picture
    const customerImg = document.createElement('img')
    customerImg.src = x.picture.large
    customerCard.appendChild(customerImg)
    // first and last name
    const customerName = document.createElement('h2')
    const firstName = capitalize(x.name.first)
    const lastName = capitalize(x.name.last)
    customerName.innerText = firstName + ' ' + lastName
    customerCard.appendChild(customerName)
    // email
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
    // date of birth
    const dateOfBirth = document.createElement('p')
    const date = moment(x.dob.date).format('ll')
    dateOfBirth.innerText = 'DOB: ' + date
    customerCard.appendChild(dateOfBirth)
    // date registered
    const dateRegistered = document.createElement('p')
    const register = moment(x.registered.date).format('ll')
    dateRegistered.innerText = 'Customer since: ' + register
    customerCard.appendChild(dateRegistered)
}