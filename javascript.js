let course
let playerCount
let players = []
let cardStuff = document.getElementById('cardStuff')
let golfCourse
let myReq = new XMLHttpRequest();
myReq.open('GET','https://golf-courses-api.herokuapp.com/courses/', true )
myReq.onload = function() {
    golfCourse = JSON.parse(myReq.responseText)
    //console.log(golfCourse.courses[0])
}
myReq.send();

let nameInputHTML = `<h4>Gimme names</h4>`

function getNames() {

    course = document.getElementById('course').value
    playerCount = document.getElementById('playerCount').value
    console.log("Course chosen: " + course)
    console.log("Number of players: " + playerCount)

    for (let i = 0 ; i < playerCount; i++) {
        nameInputHTML += `
            <input id="playerNumber${i}" type="text" placeholder="Enter name "><br>
        `;
    }
    nameInputHTML += '<br><button onclick="startGame()">Start</button>'
    document.getElementById('names').innerHTML = nameInputHTML
} 

function startGame() {
    for (let i = 0; i < playerCount; i++) {
        let newPlayerHTML = `<div class="row">
        <div class="col-1 rightColumn player${i}">Player 1</div>
        <div class="col-1 text-center"></div>
        <div class="col-1 text-center"></div>
        <div class="col-1 text-center"></div>
        <div class="col-1 text-center"></div>
        <div class="col-1 text-center"></div>
        <div class="col-1 text-center"></div>
        <div class="col-1 text-center"></div>
        <div class="col-1 text-center"></div>
        <div class="col-1 text-center"></div>
        <div class="col-1 text-center"></div>
      </div>`
        players.push(document.getElementById(`playerNumber${i}`).value);
        document.getElementById('cardStuff1').innerHTML += newPlayerHTML
        document.getElementById('cardStuff2').innerHTML += newPlayerHTML
    }
    document.getElementsByClassName('player0').innerHTML = players[0]
    if(players[1]) {document.getElementsByClassName('player1').innerHTML = players[1]}
    if(players[2]) {document.getElementsByClassName('player2').innerHTML = players[2]}
    if(players[3]) {document.getElementsByClassName('player3').innerHTML = players[3]}
    document.getElementById('courseName').innerHTML = course
}
