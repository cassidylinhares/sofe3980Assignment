
class Canvas{
    constructor(){
        this.width = 720;           //int: width of window
        this.height = 480;          //int: height of window
        this.player;                //Paddle object
        this.bot;                   //Paddle object
        this.ball;                  //Ball object
        this.playerScore;           //Score object: player's score
        this.botScore;              //Score object: bot's score
        this.paused = false;        //Boolean: checks if paused
    }
}

// Define all the objects
// setup is called by p5
function setup() {
    c = new Canvas();
    createCanvas(c.width, c.height);
    c.player = new Paddle(27, c.height);
    c.bot = new Paddle(c.width-27-c.player.width, c.height);
    c.ball = new Ball(c.width, c.height);
    c.playerScore = new Score(c.width/2-30);
    c.botScore = new Score(c.width/2+10);
}

// An infinite loop called by p5
function draw() {
    // Display
    background(50);
    c.player.display();
    c.bot.display();
    c.ball.display();
    c.playerScore.display();
    c.botScore.display();

    // Move
    c.player.move();
    c.ball.move();
    c.bot.moveBot(c.ball);

    // Collision & Score check
    c.ball.hitPlayer(c.player);
    c.ball.hitBot(c.bot);
    c.playerScore.checkPlayerScored(c.ball, c.botScore);
    c.botScore.checkBotScored(c.ball, c.playerScore);

    // Line in  middle of court
    stroke(255); // gives a white stroke
    line(width/2, 0, width/2, height);
}

// Checks for keyboard presses
//Cannot test this with automation becuase no way to simulate key press
function keyPressed() {
    if(keyCode == UP_ARROW){
        c.player.pressedUp = true;
    }
    if(keyCode == DOWN_ARROW){
        c.player.pressedDown = true;
    }

    if(keyCode == 80){ 
        if(this.paused){
            this.paused = false;
            loop();
        }else{
            this.paused = true;
            noLoop();
        }
    }
}

// Checks for keyboard release
//Cannot test this with automation becuase no way to simulate key press
function keyReleased() {
    if(keyCode == UP_ARROW){
        c.player.pressedUp = false;
    }
    if(keyCode == DOWN_ARROW){
        c.player.pressedDown = false;
    }
}


module.exports = Canvas;