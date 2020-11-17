let course // This will eventually help choose the corresponding courseID which helps select the right API.
let courseID // This will be used in the template literal fetch call for the correct API info.
let playerCount // This will help write most of our for loops down the road.
let players = [] // We store the names captured in this variable before we display them on the page.
let cardStuff = document.getElementById('cardStuff') // We will access the innerHTML of this div later.
let difficulty // Like the course and courseID variables, this will eventually assign a number to the difficultyNum variable which will help us get API data.
let difficultyNum // We will use this number to access yards, hdcp and par for either men, women, pro or champion teeBoxes.
let coursePromise // This is just a box to use our fetch call with.
let yardsTotal = 0 // These next three variables will be used as a ticker to count the total yards, hdcp and par from whatever comes back from the API call.
let handicapTotal = 0
let parTotal = 0
let nameInputHTML = `<label>Gimme names:</label>`// We're going to add more to this html after we submit the course and stuff, and then display it.

// I create all these variables above before I assign the values below to them so I can access them globally.

function getNames() {
    /* The plan for this function is to change the upper html on the page to get the names, but we 
    can't do that until after we capture the values we need from the original content. */

    // We get values for these three variables, and then we can change the html to display inputs for the names.
    course = document.getElementById('course').value
    playerCount = document.getElementById('playerCount').value
    difficulty = document.getElementById('difficulty').value

    console.log("Course chosen: " + course)
    console.log("Number of players: " + playerCount)
    console.log("Difficulty chosen: " + difficulty)

    /* All these if statements below are used to assign courseID and difficultyNum depending on whatever the user
    had chosen for the course and difficulty variables. CourseID and difficultyNum will be used for our fetch call. */
    if (course == 'Fox Hollow') courseID = 18300
    if (course == 'Thanksgiving Point') courseID = 11819
    if (course == 'Spanish Oaks') courseID = 19002
    if (difficulty == 'pro') difficultyNum = 0
    if (difficulty == 'champion') difficultyNum = 1
    if (difficulty == 'men') difficultyNum = 2
    if (difficulty == 'women') difficultyNum = 3
    if (difficulty == 'champion' && course == 'Spanish Oaks') difficultyNum = 0
    if (difficulty == 'men' && course == 'Spanish Oaks') difficultyNum = 1
    if (difficulty == 'women' && course == 'Spanish Oaks') difficultyNum = 2

    coursePromise = fetch(
        `https://golf-courses-api.herokuapp.com/courses/${courseID}`
    )
        .then(res => res.json())
        .then(info => { 
            /* Everything in this function right here is responsible for filling in 
            the yards, handicap and par boxes based on whatever course and difficulty the user chose.
            
            It is also in this function that we add the yards, hdcp and par into their totals. */

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
            
            // These three loops right here are responsible for adding the totals of yards, handicaps, and par.
            for (let i = 0; i < 17; i++) {
                yardsTotal += info.data.holes[i].teeBoxes[difficultyNum].yards;
                document.getElementById('yardsTotal').innerHTML = `Yards total: ${yardsTotal}`
            }
            for (let i = 0; i < 17; i++) {
                handicapTotal += info.data.holes[i].teeBoxes[difficultyNum].hcp;
                document.getElementById('handicapTotal').innerHTML = `HDCP total: ${handicapTotal}`
            }
            for (let i = 0; i < 17; i++) {
                parTotal += info.data.holes[i].teeBoxes[difficultyNum].par;
                document.getElementById('parTotal').innerHTML = `Par total: ${parTotal}`
            }
        }
        )



        // This will all be the new html that changes after we submit our course n stuff. It'll ask for names, 
        // and then when we click the Start button, it runs the startGame() function that stores those names and
        // puts them into the chart.
    for (let i = 0; i < playerCount; i++) {
        nameInputHTML += `
            <input id="playerNumber${i}" class="form-control col-4" type="text" placeholder="Enter name "><br>
        `;
    }
    nameInputHTML += '<button onclick="checkNames()" class="btn btn-success">Start</button>'
    document.getElementById('names').innerHTML = nameInputHTML


}

/*  This function will run startGame() when all the name inputs meet the conditions.
    It ensures that none of the name slots are left blank, and checks to see that none of the
    names are the exact same before it displays the names in the chart.
 */
function checkNames() {
    let playerCheck = []
    for (let i = 0; i < playerCount; i++) { // We use the playerCount variable we defined earlier for all these loops.
        playerCheck.push(document.getElementById(`playerNumber${i}`).value) // We push each name to the nameCheck array so we can use conditionals on them and make sure they'll work.
    }

    // I use nested if else statements to check how many names there are, then make sure they're not left blank or are the same as any other name inputed.
    if (playerCheck.length == 1 && playerCheck[0] != '') startGame()
    else if (playerCheck.length == 2 && playerCheck[0] != '' && playerCheck[1] != '') {
        if (playerCheck[0] != playerCheck[1]) startGame()
        else {
            alert("Please make sure all the names are different and aren't left empty.")
            playerCheck = [] // It's important that we reset the playerCheck array to nothing after each failed attempt to start the game.
        }
    }
    else if (playerCheck.length == 3 && playerCheck[0] != '' && playerCheck[1] != '' && playerCheck[2] != '') {
        if (playerCheck[0] != playerCheck[1] && playerCheck[0] != playerCheck[2] && playerCheck[1] != playerCheck[2]) startGame()
        else {
            alert("Please make sure all the names are different and aren't left empty.")
            playerCheck = []
        }
    }
    else if (playerCheck.length == 4 && playerCheck[0] != '' && playerCheck[1] != '' && playerCheck[2] != '' && playerCheck[3] != '') {
        if (playerCheck[0] != playerCheck[1] && playerCheck[0] != playerCheck[2] && playerCheck[0] != playerCheck[3] &&
            playerCheck[1] != playerCheck[2] && playerCheck[1] != playerCheck[3] && playerCheck[2] != playerCheck[3]) startGame()
        else {
            alert("Please make sure all the names are different and aren't left empty.")
            playerCheck = []
        }
    }
    else {
        alert("Please make sure all the names are different and aren't left empty.")
        playerCheck = []
    }
}



function startGame() { // This function deletes the html that asks questions completely and adds new slots to the chart with the players' names.
                        // it also creates a new row that will hold the totals for yards, hdcp and par.
    for (let i = 0; i < playerCount; i++) {
        players.push(document.getElementById(`playerNumber${i}`).value);

        let newPlayerHTML1 = `<div class="row inputs">
        <div class="col-1 leftColumn player${i}">${players[i]}</div>
        <input type="number" min="1" onclick="add(${i})" onblur="add(${i})" class="col-1 text-center inputs" id="player${i}hole1"></input>
        <input type="number" min="1" onclick="add(${i})" onblur="add(${i})" class="col-1 text-center inputs" id="player${i}hole2"></input>
        <input type="number" min="1" onclick="add(${i})" onblur="add(${i})" class="col-1 text-center inputs" id="player${i}hole3"></input>
        <input type="number" min="1" onclick="add(${i})" onblur="add(${i})" class="col-1 text-center inputs" id="player${i}hole4"></input>
        <input type="number" min="1" onclick="add(${i})" onblur="add(${i})" class="col-1 text-center inputs" id="player${i}hole5"></input>
        <input type="number" min="1" onclick="add(${i})" onblur="add(${i})" class="col-1 text-center inputs" id="player${i}hole6"></input>
        <input type="number" min="1" onclick="add(${i})" onblur="add(${i})" class="col-1 text-center inputs" id="player${i}hole7"></input>
        <input type="number" min="1" onclick="add(${i})" onblur="add(${i})" class="col-1 text-center inputs" id="player${i}hole8"></input>
        <input type="number" min="1" onclick="add(${i})" onblur="add(${i})" class="col-1 text-center inputs" id="player${i}hole9"></input>
        <div class="col-1 text-center" id="player${i}out"></div>
      </div>`
        document.getElementById('cardStuff1').innerHTML += newPlayerHTML1; // I have two different 'cardstuff' divs in the html page, one for holes 1-9 and the other for holes 10-18

        let newPlayerHTML2 = `<div class="row inputs">
        <div class="col-1 leftColumn player${i}">${players[i]}</div>
        <input type="number" min="1" onclick="add(${i})" onblur="add(${i})" class="col-1 text-center inputs" id="player${i}hole10"></input>
        <input type="number" min="1" onclick="add(${i})" onblur="add(${i})" class="col-1 text-center inputs" id="player${i}hole11"></input>
        <input type="number" min="1" onclick="add(${i})" onblur="add(${i})" class="col-1 text-center inputs" id="player${i}hole12"></input>
        <input type="number" min="1" onclick="add(${i})" onblur="add(${i})" class="col-1 text-center inputs" id="player${i}hole13"></input>
        <input type="number" min="1" onclick="add(${i})" onblur="add(${i})" class="col-1 text-center inputs" id="player${i}hole14"></input>
        <input type="number" min="1" onclick="add(${i})" onblur="add(${i})" class="col-1 text-center inputs" id="player${i}hole15"></input>
        <input type="number" min="1" onclick="add(${i})" onblur="add(${i})" class="col-1 text-center inputs" id="player${i}hole16"></input>
        <input type="number" min="1" onclick="add(${i})" onblur="add(${i})" class="col-1 text-center inputs" id="player${i}hole17"></input>
        <input type="number" min="1" onclick="add(${i})" onblur="add(${i})" class="col-1 text-center inputs" id="player${i}hole18"></input>
        <div class="col-1 text-center" id="player${i}in"></div>
      </div>`
        document.getElementById('cardStuff2').innerHTML += newPlayerHTML2

        let totalsDivHTML = `
      <div id="player${i}total" class="col-3"></div>
      <div id="player${i}final" class="col-3"></div>
      <div id="player${i}finalmessage" class="col-6"></div>`
      document.getElementById(`playerTotals`).innerHTML += totalsDivHTML
    }
    document.getElementById('courseName').innerHTML = course
    document.getElementById('names').remove();
}

function add(playerNum) { // The first three nested for loops all do the same thing: count each hole's number of tries, adds them, and outputs the number in a div.
    let playerTotals = [0, 0, 0, 0]
    for (let i = 0; i < playerCount; i++) {
        for (let j = 1; j <= 18; j++) {
            playerTotals[i] += Number(document.getElementById(`player${i}hole${j}`).value)
        }
        document.getElementById(`player${i}total`).innerHTML = `${players[i]}'s total: ${playerTotals[i]}`
    }

    let playerOuts = [0, 0, 0, 0]
    for (let i = 0; i < playerCount; i++) {
        for (let j = 1; j <= 9; j++) {
            playerOuts[i] += Number(document.getElementById(`player${i}hole${j}`).value)
        }
        document.getElementById(`player${i}out`).innerHTML = playerOuts[i]
    }

    let playerIns = [0, 0, 0, 0]
    for (let i = 0; i < playerCount; i++) {
        for (let j = 10; j <= 18; j++) {
            playerIns[i] += Number(document.getElementById(`player${i}hole${j}`).value)
        }
        document.getElementById(`player${i}in`).innerHTML = playerIns[i]
    }

    let ticker = 0 // Every time a new hole has a number put into it, this ticker goes up. Depending on how many players there is, it will reach a point that will 
    // eventually call the final function of the program (which displays messages to the players based on their scores).
    for (let i = 0; i < playerCount; i++) {
        for (let j = 1; j <= 18; j++) {
            if (Number(document.getElementById(`player${i}hole${j}`).value) > 0) ticker++
        }
        if (playerCount == 1) if (ticker == 18) endGame(playerCount, playerTotals)
        if (playerCount == 2) if (ticker == 36) endGame(playerCount, playerTotals)
        if (playerCount == 3) if (ticker == 54) endGame(playerCount, playerTotals)
        if (playerCount == 4) if (ticker == 72) endGame(playerCount, playerTotals)
    }
}


function endGame(playerCount, playerTotals) {
    for (let i = 0; i < playerCount; i++) {
        if (playerTotals[i] > parTotal) {
            document.getElementById(`player${i}final`).innerHTML = `Final: +${playerTotals[i] - parTotal}`
            document.getElementById(`player${i}finalmessage`).innerHTML = 'Better luck next time!'
        }
        if (playerTotals[i] == parTotal) {
            document.getElementById(`player${i}final`).innerHTML = `Final: 0`
            document.getElementById(`player${i}finalmessage`).innerHTML = 'Right on Par!'
        }
        if (playerTotals[i] < parTotal) {
            document.getElementById(`player${i}final`).innerHTML = `Final: ${playerTotals[i] - parTotal}`
            document.getElementById(`player${i}finalmessage`).innerHTML = 'On to the PGA!!!'
        }

    }
}