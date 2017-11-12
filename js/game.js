let buildTime = 10000//60000
let attackBuildTime = 10000//30000
let attackTime = 10000//30000
var currentPhaseTime = 0
var round = 1
function main() {
    // board has been created, players exist
    
    // add castle
    // board[20][10] = "castle-player1-20-10"
    // board[21][10] = "castle-player1-21-10"
    // board[20][11] = "castle-player1-20-11"
    // board[21][11] = "castle-player1-21-11"
    
    // board[10][50] = "mine-player1-10-50"
    // for (var x = 11; x < 16; x++) {
    //     for (var y = 50; y < 56; y++) {
    //         board[x][y] = "mine" + "-" + "player1"+ "-" x + "-" + y
    //     }
    // }
    
    // board[80][45] = "castle-player2-80-45"
    // board[81][45] = "castle-player2-81-45"
    // board[80][46] = "castle-player2-80-46"
    // board[81][46] = "castle-player2-81-46"
   
    // board[70][20] = "mine-player2-70-20"
    // for (var x = 71; x < 76; x++) {
    //     for (var y = 20; y < 26; y++) {
    //         board[x][y] = "mine" + "-" + "player2"+ "-" x + "-" + y
    //     }
    // }
    
    drawAll()
    
    var timePassed = 0
    phase = "build"
    setInterval(() => {
        currentPhaseTime = (phase == "build") ? buildTime : ((phase == "attack") ? attackTime : attackBuildTime)
        currentPhaseTime = 10000
        timePassed += 16.67

        if (commandsSent != "") {
            let player = commandsSent.split("-")[0]
            let command = commandsSent.split("-")[1]
            var keyCode = 0
            if (player == 0) {
                if (command == "up") {
                    keyCode = 87
                }
                else if (command == "left") {
                    keyCode = 65
                }
                else if (command == 'down') {
                    keyCode = 83
                }
                else if (command == 'right') {
                    keyCode = 68
                }
                else if (command == 'place') {
                    keyCode = 71
                }
            }
            else if (player == 1) {
                if (command == "up") {
                    keyCode = 38
                }
                else if (command == "left") {
                    keyCode = 37
                }
                else if (command == 'down') {
                    keyCode = 40
                }
                else if (command == 'right') {
                    keyCode = 39
                }
                else if (command == 'place') {
                    keyCode = 16
                }
            }
            commandsSent = ""
            check({keyCode: keyCode})
        }
        // build phase
        let formattedTime = ((currentPhaseTime - timePassed) / 1000)
        document.getElementById("time").innerHTML = formattedTime.toFixed(2)
        document.getElementById("phase").innerHTML = "Round " + round
        document.getElementById("p1blocks").innerHTML = player1.blocksLeft
        document.getElementById("p2blocks").innerHTML = player2.blocksLeft
        document.getElementById("p1space").innerHTML = player1.enclosedSpace
        document.getElementById("p2space").innerHTML = player2.enclosedSpace
        
        if (timePassed >= currentPhaseTime) {
            nextPhase()
            timePassed = 0
        }
    }, 16.67)
}

function nextPhase() {
    // phase  = (phase == "build") ? "attackbuild" : ((phase == "attack") ? "build" : "attack")
    round += 1
    board.encloseStuff()
    phase = "build"
}
main()