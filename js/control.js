window.addEventListener('keydown',this.check,false);
var phase = "build" // attackbuild, or attack

function drawPlayer() {
    let x1 = player1.cursor.x
    let y1 = player1.cursor.y
    drawSquare(player1.cursor.oldX,player1.cursor.oldY)
    drawCursor(x1,y1,purple)
    
    let x2 = player2.cursor.x
    let y2 = player2.cursor.y
    drawSquare(player2.cursor.oldX,player2.cursor.oldY)
    drawCursor(x2,y2,yellow)
}
function check(e) { //http://keycode.info/
    var code = e.keyCode
    var id = ""
    console.log("For key code: " + code + ". \n\nPlayer1 Data:\n")
    console.log("X: " + player1.cursor.x + ", Y: " + player1.cursor.y)
    console.log("oldX: " + player1.cursor.oldX+ ", oldY: " + player1.cursor.oldY)

    console.log("\n\nPlayer2 Data:\n")
    console.log("X: " + player2.cursor.x + ", Y: " + player2.cursor.y)
    console.log("oldX: " + player2.cursor.oldX+ ", oldY: " + player2.cursor.oldY)

    switch (code) {
        case 87: // player 1 up -> 'w'
            //if(player1.direction == "horizontal") {
                player1.cursor.oldX = player1.cursor.x
            //}
            player1.direction = "vertical"
            player1.cursor.oldY = player1.cursor.y
            player1.cursor.y -= 1; break;
        case 65: // player 1 left -> 'a'
            //if (player1.direction == "vertical") {
                player1.cursor.oldY = player1.cursor.y
           //}
            player1.cursor.direction = "horizontal"
            player1.cursor.oldX = player1.cursor.x
            player1.cursor.x -= 1; break;
        case 83: //player 1 down -> 's'
            //if(player1.direction == "horizontal") {
                player1.cursor.oldX = player1.cursor.x
            //}
            player1.direction = "vertical"
            player1.cursor.oldY = player1.cursor.y
            player1.cursor.y += 1; break;
        case 68: //player 1 right -> 'd'
           //if (player1.direction == "vertical") {
                player1.cursor.oldY = player1.cursor.y
            //}
            player1.cursor.direction = "horizontal"
            player1.cursor.oldX = player1.cursor.x
            player1.cursor.x += 1; break;
        case 71: // g - place
            id = board[player1.cursor.x][player1.cursor.y];
            if (phase == "build") {
                if ((id.includes("empty") || id.includes("enclosedSpace")) && player1.blocksLeft >= 1){
                    board[player1.cursor.x][player1.cursor.y] = "wall-player1-"+player1.cursor.x+"-"+player1.cursor.y;
                    player1.blocksLeft -= 1
                    player1.wallsPlaced += 1
                }
            }
            else if (phase == "attackbuild") {
                if (id.includes("enclosedSpace")) {
                    // check if you can even put something here
                }
            }
            else if (phase == "attack") {
                if (id.includes("wall") || id.includes("castle")) {
                    if (!id.includes("player1")) {
                        // launch bullet, make sure you track it's projectory and where it will end up hitting
                    }
                }
            }
            
            drawSquare(player1.cursor.x, player1.cursor.x)
            document.getElementById("p1blocks").innerHTML = player1.blocksLeft

            break;
            
        case 38: // player 2 up
            //if(player2.direction == "horizontal") {
                player2.cursor.oldX = player2.cursor.x
            //}
            player2.direction = "vertical"
            player2.cursor.oldY = player2.cursor.y
            player2.cursor.y -= 1; break;
        case 37: // player 2 left
            //if (player2.direction == "vertical") {
                player2.cursor.oldY = player2.cursor.y
            //}
            player2.cursor.direction = "horizontal"
            player2.cursor.oldX = player2.cursor.x
            player2.cursor.x -= 1; break;
        case 40: //player 2 down
            //if(player2.direction == "horizontal") {
                player2.cursor.oldX = player2.cursor.x
            //}
            player2.direction = "vertical"
            player2.cursor.oldY = player2.cursor.y
            player2.cursor.y += 1; break;
        case 39: //player 2 right
            //if (player2.direction == "vertical") {
                player2.cursor.oldY = player2.cursor.y
            //}
            player2.cursor.direction = "horizontal"
            player2.cursor.oldX = player2.cursor.x
            player2.cursor.x += 1; break;
        case 16:
            id = board[player2.cursor.x][player2.cursor.y];
            if (phase == "build") {
                if ((id.includes("empty") || id.includes("enclosedSpace")) && player2.blocksLeft >= 1){
                    let eks2 = player2.cursor.x
                    let why2 = player2.cursor.y
                    board[eks2][why2] = "wall-player2-"+eks2+"-"+why2;
                    player2.blocksLeft -= 1
                    player2.wallsPlaced += 1
                }
            }
            else if (phase == "attackbuild") {
                if (id.includes("enclosedSpace")) {
                    // check if you can even put something here
                }
            }
            else if (phase == "attack") {
                if (id.includes("wall") || id.includes("castle")) {
                    if (!id.includes("player2")) {
                        // launch bullet, make sure you track it's projectory and where it will end up hitting
                    }
                }
            }
            
            drawSquare(player2.cursor.x, player2.cursor.x)
            document.getElementById("p2blocks").innerHTML = player2.blocksLeft
            break;
        
        default:
            break;
            // code
    }
    
    console.log("After Switch: " + code + ". \n\nPlayer1 Data:\n")
    console.log("X: " + player1.cursor.x + ", Y: " + player1.cursor.y)
    console.log("oldX: " + player1.cursor.oldX+ ", oldY: " + player1.cursor.oldY)

    console.log("\n\nPlayer2 Data:\n")
    console.log("X: " + player2.cursor.x + ", Y: " + player2.cursor.y)
    console.log("oldX: " + player2.cursor.oldX+ ", oldY: " + player2.cursor.oldY)

    drawPlayer()
    // player 2 = wasd shift
    
}