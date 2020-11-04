let course
let playerCount
let players = []
let cardStuff = document.getElementById('cardStuff')
let courseID
let coursePromise
let nameInputHTML = `<h4>Gimme names</h4>`

function getNames() {

    course = document.getElementById('course').value
    playerCount = document.getElementById('playerCount').value
    console.log("Course chosen: " + course)
    console.log("Number of players: " + playerCount)
    if(course == 'Fox Hollow') courseID = 18300
    if(course == 'Thanksgiving Point') courseID = 11819
    if(course == 'Spanish Oaks') courseID = 19002
    console.log(courseID)
    
    coursePromise = fetch(
        `https://golf-courses-api.herokuapp.com/courses/${courseID}`
        )
        .then(res => res.json())
        .then(info => console.log(info.data.status))
        
        

    for (let i = 0 ; i < playerCount; i++) {
        nameInputHTML += `
            <input id="playerNumber${i}" class="form-control col-2" type="text" placeholder="Enter name "><br>
        `;
    }
    nameInputHTML += '<br><button onclick="startGame()" class="btn btn-success">Start</button>'
    document.getElementById('names').innerHTML = nameInputHTML
    
}

function startGame() {
    for (let i = 0; i < playerCount; i++) {
        players.push(document.getElementById(`playerNumber${i}`).value);
        let newPlayerHTML = `<div class="row">
        <div class="col-1 leftColumn player${i}">${players[i]}</div>
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
        document.getElementById('cardStuff1').innerHTML += newPlayerHTML
        document.getElementById('cardStuff2').innerHTML += newPlayerHTML
    }
    
    document.getElementById('courseName').innerHTML = course
}
