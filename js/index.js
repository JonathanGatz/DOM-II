// Your code goes here


// All of my eventListeners 

// ****************************************************************************************************************************

// First, i had to create the specific event listener I wanted


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
    console.log('Testing the Click Into')
})



const test4 = document.createElement('div')

test4.addEventListener(`scroll`, () => {
    test4.style.backgroundColor = "pink"
    console.log('Testing the Click Div')
})


// The, I used what I created to specifically target the elements i wanted to change. I used a counsol.log as referense. 


const test5 = document.createElement('content-destination')

test5.addEventListener(`resize`, () => {
    test5.style.borderRadius = "scale(50)"
    console.log('Testing the Click Content Destination')
})


const test6 = document.createElement('btn')

test6.addEventListener(`dblclick`, () => {
    test6.style.opacity = "0.1"
    console.log('Testing the Click btn')
})


const test7 = document.createElement('p')

test7.addEventListener(`select`, () => {
    test7.style.opacity = "0.1"
    console.log('Testing the Click p')
})


const test8 = document.createElement('footer')

test8.addEventListener(`mouseover`, () => {
    test8.style.scale = "300"
    console.log('Testing the Click footer')
})


const test9 = document.createElement('h4')

test9.addEventListener(`drag / drop`, () => {
    test9.style.backgroundColor = "blue"
    console.log('Testing the Click h4')
})


const test10 = document.createElement('h2')

test10.addEventListener(`scroll`, () => {
    test10.style.borderColor = "red"
    console.log('Testing the Click h2')
})

// I feel it's easier to group everything together like this. It's easier for me to locate throught the file 

// ****************************************************************************************************************************

// I decided to switch it up a bit with actual functions... I know it's not recomended but I wanted to try it out


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


// I used the "a" to put a stop to all of the links on the page 

// ****************************************************************************************************************************
