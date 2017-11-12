if (!String.prototype.includes) {
    alert()
    String.prototype.includes = function() {
        'use strict';
        return String.prototype.indexOf.apply(this, arguments) !== -1;
    };
}

var board = new Array(100) // board[x][y] with a max x of 100 and a max y of 60

for (var o = 0; o < 100; o++) {
    board[o] = new Array(60)
    for (var i = 0; i < 60; i++) {
        board[o][i] = "empty-"+o+"-"+i
    }
}

board.checkEnclosed = () => {
    // super complicated method
}
var player1 = {
    cursor: {
        direction: 'none',
        x: 30, y: 30,
        oldX: 30, oldY: 30
    },
    blocksLeft: 40,
    id: "player2"
} //
var player2 = {
    cursor: {
        direction: 'none',
        x: 90, y: 30,
        oldX: 90, oldY: 30
    },
    blocksLeft: 40,
    id: "player2"
} //