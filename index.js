let course
let playerCount
let players = []

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
    nameInputHTML += '<br><a href="card.html"><button onclick="startGame()">Start</button></a>'
    document.getElementById('names').innerHTML = nameInputHTML
} 

function startGame() {
    for (let i = 0; i < playerCount; i++) {
        players.push(document.getElementById(`playerNumber${i}`).value);
        console.log(players[i])
        document.getElementById('player0').innerHTML = players[0]
        document.getElementById('player1').innerHTML = players[1]
        document.getElementById('player2').innerHTML = players[2]
        document.getElementById('player3').innerHTML = players[3]
    }

}
