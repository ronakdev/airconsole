let buildTime = 15000//60000
let attackBuildTime = 7500//30000
let attackTime = 7500//30000
var currentPhaseTime = 0

function main() {
    // board has been created, players exist
    drawAll()
    
    var timePassed = 0
    phase = "build"
    setInterval(() => {
        currentPhaseTime = (phase == "build") ? buildTime : ((phase == "attack") ? attackTime : attackBuildTime)
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
                    keyCode = 88
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
        }
        // build phase
        let formattedTime = ((currentPhaseTime - timePassed) / 1000)
        document.getElementById("time").innerHTML = formattedTime.toFixed(2)
        document.getElementById("phase").innerHTML = phase
        document.getElementById("p1blocks").innerHTML = player1.blocksLeft
        document.getElementById("p2blocks").innerHTML = player2.blocksLeft
        
        if (timePassed >= currentPhaseTime) {
            nextPhase()
            timePassed = 0
        }
    }, 16.67)
}

function nextPhase() {
    phase  = (phase == "build") ? "attackbuild" : ((phase == "attack") ? "build" : "attack")
    
}
main()