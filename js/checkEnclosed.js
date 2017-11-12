var setList = new Array(100);
var tempWallSet = new Set();
var setListIndex = -1;
var win = 0;
var orig = "";
var checkedOnce = false;
var extremes = new Array(4);
var origCheck = 0;
var p = "";
function checkEnclosed(player) {
    p = player
    for (var x = 0; x < 100; x++) {
        for (var y = 0; y < 60; y++) {
            if(board[x][y].includes("wall-player" + p)) {
                orig = board[x][y]
                setExtremes()
                checkNeighbors(x,y)
                if(win == 1) {
                    win = 0
                    tempWallSet = new Set()
                    setListIndex += 1
                    setList[setListIndex] = new Set()
                    for (var o = extremes[0]; o <= extremes[2]; o++) {
                        var wallSeen = 0
                        var wallPassed = false
                        for (var i = extremes[1]; i <= extremes[3]; i++) {
                            if(board[o][i].includes("wall-player"+p)){
                                if(!wallPassed){
                                    wallSeen += 1
                                }
                                wallPassed = true
                            }
                            else if(wallSeen % 2 != 0 && board[o][i].includes("empty")){
                                wallPassed = false
                                setList[setListIndex].add(board[o][i])
                            }
    
                        }
                    }
                }
            }
        }
    }
    return setList
}


function checkNeighbors(x, y){
  if(checkedOnce && String("empty-"+x+"-"+y).valueOf() == orig){
      win = 1
      return
  }
  checkedOnce = true
  tempWallSet.add(board[x][y])
  origCheck += 1
  if(x < extremes[0]){
      extremes[0] = x
  }
  if(x > extremes[2]){
      extremes[2] = x
  }
  if(y < extremes[1]){
      extremes[1] = y
  }
  if(y > extremes[3]){
      extremes[3] = y
  }
  var a = board[x][y-1]
  var b = board[x-1][y]
  var c = board[x][y+1]
  var d = board[x+1][y]
  if((a.includes("wall-player"+p) && !tempWallSet.has(a)) || (origCheck > 2 && a == orig)){
    checkNeighbors(x,y-1)
  }
  if((b.includes("wall-player"+p) && !tempWallSet.has(b)) || (origCheck > 2 && b == orig)){
    checkNeighbors(x-1,y)
  }
  if((c.includes("wall-player"+p) && !tempWallSet.has(c)) || (origCheck > 2 && c == orig)){
    checkNeighbors(x,y+1)
  }
  if((d.includes("wall-player"+p) && !tempWallSet.has(d)) || (origCheck > 2 && d == orig)){
    checkNeighbors(x+1,y)
  }
  if(origCheck > 2 && (x == parseInt(orig.split("-")[2]) && y == parseInt(orig.split("-")[3]))){
      win = 1
      return
  }
  return
}
function setExtremes(){
    extremes[0] = 10000000
    extremes[1] = 10000000
    extremes[2] = -1
    extremes[3] = -1
}

board.encloseStuff = () => {
    // get all the locations
    // set each board location to enclosed
    p = 1    
    var list = checkEnclosed("1")

    var counter = 0
    for (var i=0; i< list.length; i++){
        
        if (list[i]) {
            list[i].forEach((item) => {
                let splitItems = item.split("-")
                let x = parseInt(splitItems[1])
                let y = parseInt(splitItems[2])
                board[x][y] = "enclosedSpace-player1"
            })

        
        }
    }

    p = 2
    list = checkEnclosed("2")
    for (var i=0; i< list.length; i++){
        if (list[i]) {
            list[i].forEach((item) => {
                let splitItems = item.split("-")
                let x = parseInt(splitItems[1])
                let y = parseInt(splitItems[2])
                board[x][y] = "enclosedSpace-player2"
            })

        
        }
    }
    drawAll()
    
}