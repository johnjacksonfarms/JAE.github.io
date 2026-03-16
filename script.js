document.getElementById("site-title").innerText = SITE_CONFIG.name
document.getElementById("logo").innerText = SITE_CONFIG.name

document.getElementById("hero-title").innerText = SITE_CONFIG.heroTitle
document.getElementById("hero-subtitle").innerText = SITE_CONFIG.heroSubtitle

document.getElementById("about-text").innerText = SITE_CONFIG.aboutText



const contactContainer = document.getElementById("contact-email")

SITE_CONFIG.emails.forEach(email => {

const line = document.createElement("p")

line.innerHTML =
`<strong>${email.label}</strong><br>
<a href="mailto:${email.address}">${email.address}</a>`

contactContainer.appendChild(line)

})



document.getElementById("footer-text").innerText =
"© " + new Date().getFullYear() + " " + SITE_CONFIG.name



const servicesContainer = document.getElementById("services-container")

SITE_CONFIG.services.forEach(service => {

const card = document.createElement("div")
card.className = "service-card"

card.innerHTML =
`
<h3>${service.title}</h3>
<p>${service.description}</p>
`

servicesContainer.appendChild(card)

})

servicesContainer.appendChild(card)

})
