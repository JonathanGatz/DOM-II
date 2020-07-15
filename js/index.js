// Your code goes here


// All of my eventListeners 

// ****************************************************************************************************************************

const test1 = document.createElement('content-destination')

test1.addEventListener('click', () => {
    test1.style.textTransform = "scale(5.0)"
    console.log('Testing the Click Content-Destination')
})


const test2 = document.createElement('nav')

test2.addEventListener(`event`, () => {
    event.target.style.color = "yellow"
    console.log('Testing the Click Nav')
})


const test3 = document.createElement('intro')

test3.addEventListener(`focus`, () => {
    event.target.style.color = "red"
    console.log('Testing the Click')
})


const test4 = document.createElement('div')

test4.addEventListener(`scroll`, () => {
    test4.style.backgroundColor = "pink"
    console.log('Testing the Click')
})


const test5 = document.createElement('content-destination')

test5.addEventListener(`resize`, () => {
    test5.style.borderRadius = "scale(50)"
    console.log('Testing the Click')
})


const test6 = document.createElement('btn')

test6.addEventListener(`dblclick`, () => {
    test6.style.opacity = "0.1"
    console.log('Testing the Click')
})


const test7 = document.createElement('p')

test7.addEventListener(`select`, () => {
    test7.style.opacity = "0.1"
    console.log('Testing the Click')
})


const test8 = document.createElement('footer')

test8.addEventListener(`mouseover`, () => {
    test8.style.scale = "300"
    console.log('Testing the Click')
})


const test9 = document.createElement('h4')

test9.addEventListener(`drag / drop`, () => {
    test9.style.backgroundColor = "blue"
    console.log('Testing the Click')
})


const test10 = document.createElement('h2')

test10.addEventListener(`scroll`, () => {
    test10.style.borderColor = "red"
    console.log('Testing the Click')
})

// ****************************************************************************************************************************


function logo1 (logo) {
    logo1.log('event')
    logo1.src = "/Users/jonathangatz/DOM-II/img/adventure.jpg" 
}
function img1 (img) {
    logo1.log('event')
    img1.style.opacity = "0.1" 
}


const stop = document.querySelector('a').addEventListener("click", function(event) {
    document.getElementById("a").innerHTML += "Opps! you have been preventDefaulted";
    event.preventDefault();
})

