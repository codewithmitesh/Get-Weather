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
const MessageOne = document.querySelector('#Msg1')
const MessageTwo = document.querySelector('#Msg2')
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    MessageOne.textContent = ' ⭕ Loading...  '
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