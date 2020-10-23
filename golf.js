let course
let playerCount
let players = []

let golfCourse
let myReq = new XMLHttpRequest();
myReq.open('GET','https://golf-courses-api.herokuapp.com/courses/', true )
myReq.onload = function() {
    golfCourse = JSON.parse(myReq.responseText)
    console.log(golfCourse)
}
myReq.send();

let nameInputHTML = `<h4>Gimme names</h4>`
function getNames() {
    course = document.getElementById('course').value
    playerCount = document.getElementById('playerCount').value
    for (let i = 0 ; i < playerCount; i++) {
        nameInputHTML += `
            <input id="playerNumber${i}" type="text" placeholder="Enter name "><br>
        `;
    }
    nameInputHTML += '<br><button onclick="startGame()">Start</button>'
    document.getElementById('names').innerHTML = nameInputHTML
} 

function startGame() {
    for (let i = 0; i > playerCount; i++) {
        players.push(document.getElementById(`playerNumber${i}`).value) // This isnt pushing anything to the array
    }
    console.log(players)
}