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

        let newPlayerHTML1 = `<div class="row">
        <div class="col-1 leftColumn player${i}">${players[i]}</div>
        <div class="col-1 text-center" id="player${i}hole1"></div>
        <div class="col-1 text-center" id="player${i}hole2"></div>
        <div class="col-1 text-center" id="player${i}hole3"></div>
        <div class="col-1 text-center" id="player${i}hole4"></div>
        <div class="col-1 text-center" id="player${i}hole5"></div>
        <div class="col-1 text-center" id="player${i}hole6"></div>
        <div class="col-1 text-center" id="player${i}hole7"></div>
        <div class="col-1 text-center" id="player${i}hole8"></div>
        <div class="col-1 text-center" id="player${i}hole9"></div>
        <div class="col-1 text-center" id="player${i}out"></div>
        <div class="col-1 text-center" id="player${i}total"></div>
      </div>`
        document.getElementById('cardStuff1').innerHTML += newPlayerHTML1;

        let newPlayerHTML2 = `<div class="row">
        <div class="col-1 leftColumn player${i}">${players[i]}</div>
        <div class="col-1 text-center" id="player${i}hole10"></div>
        <div class="col-1 text-center" id="player${i}hole11"></div>
        <div class="col-1 text-center" id="player${i}hole12"></div>
        <div class="col-1 text-center" id="player${i}hole13"></div>
        <div class="col-1 text-center" id="player${i}hole14"></div>
        <div class="col-1 text-center" id="player${i}hole15"></div>
        <div class="col-1 text-center" id="player${i}hole16"></div>
        <div class="col-1 text-center" id="player${i}hole17"></div>
        <div class="col-1 text-center" id="player${i}hole18"></div>
        <div class="col-1 text-center" id="player${i}in"></div>
        <div class="col-1 text-center" id="player${i}total"></div>
      </div>`
        document.getElementById('cardStuff2').innerHTML += newPlayerHTML2
    }
    
    document.getElementById('courseName').innerHTML = course
    document.getElementById('names').remove();
}
