let course
let playerCount
let players = []
let cardStuff = document.getElementById('cardStuff')
let courseID
let difficulty
let difficultyNum
let coursePromise
let nameInputHTML = `<h4>Gimme names</h4>`

function getNames() {

    course = document.getElementById('course').value
    playerCount = document.getElementById('playerCount').value
    difficulty = document.getElementById('difficulty').value
    console.log("Course chosen: " + course)
    console.log("Number of players: " + playerCount)
    console.log("Difficulty chosen: " + difficulty)
    if(course == 'Fox Hollow') courseID = 18300
    if(course == 'Thanksgiving Point') courseID = 11819
    if(course == 'Spanish Oaks') courseID = 19002
    if(difficulty == 'pro') difficultyNum = 0
    if(difficulty == 'champion') difficultyNum = 1
    if(difficulty == 'men') difficultyNum = 2
    if(difficulty == 'women') difficultyNum = 3

    coursePromise = fetch(
        `https://golf-courses-api.herokuapp.com/courses/${courseID}`
        )
        .then(res => res.json())
        .then(info => {
            document.getElementById('yards1').innerHTML = info.data.holes[0].teeBoxes[difficultyNum].yards
            document.getElementById('yards2').innerHTML = info.data.holes[1].teeBoxes[difficultyNum].yards
            document.getElementById('yards3').innerHTML = info.data.holes[2].teeBoxes[difficultyNum].yards
            document.getElementById('yards4').innerHTML = info.data.holes[3].teeBoxes[difficultyNum].yards
            document.getElementById('yards5').innerHTML = info.data.holes[4].teeBoxes[difficultyNum].yards
            document.getElementById('yards6').innerHTML = info.data.holes[5].teeBoxes[difficultyNum].yards
            document.getElementById('yards7').innerHTML = info.data.holes[6].teeBoxes[difficultyNum].yards
            document.getElementById('yards8').innerHTML = info.data.holes[7].teeBoxes[difficultyNum].yards
            document.getElementById('yards9').innerHTML = info.data.holes[8].teeBoxes[difficultyNum].yards
            document.getElementById('yards10').innerHTML = info.data.holes[9].teeBoxes[difficultyNum].yards
            document.getElementById('yards11').innerHTML = info.data.holes[10].teeBoxes[difficultyNum].yards
            document.getElementById('yards12').innerHTML = info.data.holes[11].teeBoxes[difficultyNum].yards
            document.getElementById('yards13').innerHTML = info.data.holes[12].teeBoxes[difficultyNum].yards
            document.getElementById('yards14').innerHTML = info.data.holes[13].teeBoxes[difficultyNum].yards
            document.getElementById('yards15').innerHTML = info.data.holes[14].teeBoxes[difficultyNum].yards
            document.getElementById('yards16').innerHTML = info.data.holes[15].teeBoxes[difficultyNum].yards
            document.getElementById('yards17').innerHTML = info.data.holes[16].teeBoxes[difficultyNum].yards
            document.getElementById('yards18').innerHTML = info.data.holes[17].teeBoxes[difficultyNum].yards


            document.getElementById('hdcp1').innerHTML = info.data.holes[0].teeBoxes[difficultyNum].hcp
            document.getElementById('hdcp2').innerHTML = info.data.holes[1].teeBoxes[difficultyNum].hcp
            document.getElementById('hdcp3').innerHTML = info.data.holes[2].teeBoxes[difficultyNum].hcp
            document.getElementById('hdcp4').innerHTML = info.data.holes[3].teeBoxes[difficultyNum].hcp
            document.getElementById('hdcp5').innerHTML = info.data.holes[4].teeBoxes[difficultyNum].hcp
            document.getElementById('hdcp6').innerHTML = info.data.holes[5].teeBoxes[difficultyNum].hcp
            document.getElementById('hdcp7').innerHTML = info.data.holes[6].teeBoxes[difficultyNum].hcp
            document.getElementById('hdcp8').innerHTML = info.data.holes[7].teeBoxes[difficultyNum].hcp
            document.getElementById('hdcp9').innerHTML = info.data.holes[8].teeBoxes[difficultyNum].hcp
            document.getElementById('hdcp10').innerHTML = info.data.holes[9].teeBoxes[difficultyNum].hcp
            document.getElementById('hdcp11').innerHTML = info.data.holes[10].teeBoxes[difficultyNum].hcp
            document.getElementById('hdcp12').innerHTML = info.data.holes[11].teeBoxes[difficultyNum].hcp
            document.getElementById('hdcp13').innerHTML = info.data.holes[12].teeBoxes[difficultyNum].hcp
            document.getElementById('hdcp14').innerHTML = info.data.holes[13].teeBoxes[difficultyNum].hcp
            document.getElementById('hdcp15').innerHTML = info.data.holes[14].teeBoxes[difficultyNum].hcp
            document.getElementById('hdcp16').innerHTML = info.data.holes[15].teeBoxes[difficultyNum].hcp
            document.getElementById('hdcp17').innerHTML = info.data.holes[16].teeBoxes[difficultyNum].hcp
            document.getElementById('hdcp18').innerHTML = info.data.holes[17].teeBoxes[difficultyNum].hcp
            

            document.getElementById('par1').innerHTML = info.data.holes[0].teeBoxes[difficultyNum].par
            document.getElementById('par2').innerHTML = info.data.holes[1].teeBoxes[difficultyNum].par
            document.getElementById('par3').innerHTML = info.data.holes[2].teeBoxes[difficultyNum].par
            document.getElementById('par4').innerHTML = info.data.holes[3].teeBoxes[difficultyNum].par
            document.getElementById('par5').innerHTML = info.data.holes[4].teeBoxes[difficultyNum].par
            document.getElementById('par6').innerHTML = info.data.holes[5].teeBoxes[difficultyNum].par
            document.getElementById('par7').innerHTML = info.data.holes[6].teeBoxes[difficultyNum].par
            document.getElementById('par8').innerHTML = info.data.holes[7].teeBoxes[difficultyNum].par
            document.getElementById('par9').innerHTML = info.data.holes[8].teeBoxes[difficultyNum].par
            document.getElementById('par10').innerHTML = info.data.holes[9].teeBoxes[difficultyNum].par
            document.getElementById('par11').innerHTML = info.data.holes[10].teeBoxes[difficultyNum].par
            document.getElementById('par12').innerHTML = info.data.holes[11].teeBoxes[difficultyNum].par
            document.getElementById('par13').innerHTML = info.data.holes[12].teeBoxes[difficultyNum].par
            document.getElementById('par14').innerHTML = info.data.holes[13].teeBoxes[difficultyNum].par
            document.getElementById('par15').innerHTML = info.data.holes[14].teeBoxes[difficultyNum].par
            document.getElementById('par16').innerHTML = info.data.holes[15].teeBoxes[difficultyNum].par
            document.getElementById('par17').innerHTML = info.data.holes[16].teeBoxes[difficultyNum].par
            document.getElementById('par18').innerHTML = info.data.holes[17].teeBoxes[difficultyNum].par
            }   
        )
        
        

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