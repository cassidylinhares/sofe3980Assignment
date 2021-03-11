function timeFunc(str, func) {
    console.time(str);
    func()
    console.timeEnd(str)
}

// 1. Test check win
let s = new Score(100)
let s2 = new Score(200)
timeFunc("Score.checkWin(otherPlayersScore)", 
    function(){return s2.checkWin(s)}
)

// 2. Test reset ball
b = new Ball(720, 480)
timeFunc("Ball.reset()", 
    function(){return b.reset()}
)

// 3. Test Wall Collision with ball
b = new Ball(720, 480, -5, -1)
timeFunc("Ball.wallCollision()", 
    function(){return b.wallCollision()}
)

// 4. Test Move Paddle Up
let p = new Paddle(20, 480)
timeFunc("Paddle.up()", 
    function(){return p.up()}
)

// 5. Test ball in contact with Player's Paddle
b = new Ball(720, 480, 19, 250)
p = new Paddle(20, 480)
timeFunc("Ball.hitPlayer(paddle)", 
    function(){return b.hitPlayer(p)}
)