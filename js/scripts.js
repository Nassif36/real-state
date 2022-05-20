

/**
 * Declaro el objeto propiedades
 */
const properties = [
    {
    "id": 1,
    "status": "Rent",
    "name": "Comfortable Apartment in Palace",
    "sqfts": "1600",
    "rate": "20k",
    "beds": 4,
    "baths": 2

},
{
    "id": 2,
    "status": "Sale",
    "name": "Tiny House",
    "sqfts": "1200",
    "rate": "12k",
    "beds": 1,
    "baths": 1
}, 
{
    "id": 3,
    "status": "Sale",
    "name": "Pool House",
    "sqfts": "2500",
    "rate": "30k",
    "beds": 6,
    "baths": 3
},
{
    "id": 4,
    "status": "Sale",
    "name": "Beach House",
    "sqfts": "3500",
    "rate": "60k",
    "beds": 12,
    "baths": 6
}, ]
const testimonials = [
    {
     "id": 1,
     "name": "Kyle Robert",
     "text": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam perferendis incidunt architecto veritatis eaque quis enim qui. Doloribus unde accusamus quae expedita facilis modi corrupti.",
     "img": "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
     "busines": "Lawyer",
    
    }, 
    {
    "id": 2,
    "name": "Walter Johnson",
    "text": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam perferendis incidunt architecto veritatis eaque quis enim qui. Doloribus unde accusamus quae expedita facilis modi corrupti.",
    "img": "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "busines": "Basketball Player",
    },
    {
    "id": 3,
    "name": "Jessica Red",
    "text": "Perfect service",
    "img": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "busines": "",
    }
]


/**
 * Declaro la variable que iria dentro del div#card
 * Ejecuto un bucle que recorra todo el largo del objeto properties
 * Concateno el output con template literals y esto genera dinamicamente los div de cada propiedad sus parametros 
 */
let outputProperties = '';


for (let i = 0; i < properties.length; i++) {

    outputProperties = outputProperties + `
             <article class="property-card">
                <span class="property-status">For ${properties[i].status}</span> 
                <img src="/src/img/hero-bg.jpg" alt="">
                <div class="property-box">
                <p class="property-title">${properties[i].name}</p>
                <span class="property-rate">From ${properties[i].rate}</span>
                </div>
               <div class="property-footer">
                <div class="property-icon">
                <i class="fas fa-cube"></i> 
                <span>${properties[i].sqfts} sqft</span> 
                </div> 
                <div class="property-icon">
                <i class="fas fa-bed"></i> 
                <span> ${properties[i].beds} Bed</span> 
                </div>
                <div class="property-icon">
                    <i class="fas fa-bath"> </i>
                    <span>${properties[i].baths} Bath</span> 
                </div> 
                </div> 
            </article>`

    document.getElementById('properties').innerHTML = outputProperties;


}


/**
 * 
 * El mismo concepto anterior pero con el slider
 * 
 */
let outputSlider = ''

for (let i = 0; i < properties.length; i++) {

    outputSlider = outputSlider + `
                            <div class="swiper-slide">
                            <div class="sale-card">
                            <span class="sale-status">${properties[i].status}</span> 
                            <p>${properties[i].name}</p> 
                            <div class="property-footer">
                            <div class="property-icon">
                            <i class="fas fa-cube" > </i> <span> ${properties[i].sqfts}  </span>
                             </div> <div class="property-icon">
                            <i class="fas fa-bed"> </i> 
                            <span> ${properties[i].beds}  Bed </span> </div>
                            <div class="property-icon">
                            <i class="fas fa-bath"></i> 
                            <span>${properties[i].baths}  Bath </span>
                            </div>
                            </div>
                            <span class="sale-description"> Lorem ipsum, dolor sit amet consectetur adipisicing elit.Nostrum delectus quod at voluptate dicta nam similique sunt quibusdam alias error. </span>
                            <div class="sale-buy">
                            <p class="price"> ${properties[i].rate} </p> 
                            <button class="btn-orange"> View Details </button> 
                            </div> 
                            </div>
                            </div>
                            
            `

    document.getElementById('outputSlider').innerHTML = outputSlider;


}

let outputTestimonials = ''

for (let i = 0; i < testimonials.length; i++) {

    outputTestimonials = outputTestimonials + `
                           <div class="swiper-slide testimonial">
                            <i class="fas fa-quote-left"> </i>
                           <blockquote>${testimonials[i].text}</blockquote>
                           <img src=${testimonials[i].img}>
                           <p>${testimonials[i].name}</p>
                           <span>${testimonials[i].busines}</span>
                            <i class="fas fa-quote-right"></i>

                           </div>
                            
            `

    document.getElementById('testimonials').innerHTML = outputTestimonials
}
