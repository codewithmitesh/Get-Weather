console.log('Client side javascript file is loaded!')

//fetching json data from url parsing it into JS object and dumping it in console

// fetch('http://puzzle.mead.io/puzzle').then((response) => {

//     response.json().then((data) => {
//         console.log(data);
//     })
// })
// * Note :-  fetching json data from url of tour server (basically requesting to server 😨😟 and getting the response from the server) parsing it into JS object and dumping it in console
/**
fetch('http://localhost:3000/weather?name=vapi').then((response) => {
    response.json().then((data) => {
        if (data.error) {
            console.log(data.error);
        }
        console.log(data.location);
        console.log(data.temperature);
    })
})
*/
// 🥵😎😎😎😎
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
// const MessageOne = document.querySelector('#Msg1')
const MessageOne = document.querySelector('.city')

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


const currentData = new Date()
var date = currentData.getDate();
let month = currentData.getMonth();
let year = currentData.getFullYear();
let Day = currentData.getDay();
// console.log(date)
// console.log(monthNames[month])
// console.log(year)
let showDate = days[Day] + ", " + date + " " + monthNames[month] + " " + year
const dateCs = document.querySelector('.date')
dateCs.textContent = showDate

const MessageTwo = document.querySelector('.temp')
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    // MessageOne.textContent = ' ⭕ Loading...  '
    MessageTwo.textContent = '  '

    fetch('/weather?name=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                MessageOne.textContent = data.error
                return;
            }
            MessageOne.textContent = data.location
            MessageTwo.textContent = data.temperature;
        })
    })

});