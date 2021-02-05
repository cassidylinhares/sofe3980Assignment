class Canvas{
    constructor(){
        this.width = 720;
        this.height = 480;
        this.player;
        this.bot;
        this.ball;
    }
}

function setup() {
    c = new Canvas();
    createCanvas(c.width, c.height);
    c.player = new Paddle(27, c.height);
    c.bot = new Paddle(c.width-27-c.player.width, c.height);
    c.ball = new Ball(c.width, c.height);
}

function draw() {
    background(50);
    c.player.display();
    c.bot.display();
    c.ball.display();

    // Make the player paddle move up!
    if(c.player.pressedUp){ // Can only be tested manually because keyboard event cannot be simulated in mocha
        c.player.up();
    }
    if(c.player.pressedDown){
        c.player.down();
    }
}

function keyPressed() {
    if(keyCode == UP_ARROW){
        c.player.pressedUp = true;
    }
    if(keyCode == DOWN_ARROW){
        c.player.pressedDown = true;
    }
}

function keyReleased() {
    if(keyCode == UP_ARROW){
        c.player.pressedUp = false;
    }
    if(keyCode == DOWN_ARROW){
        c.player.pressedDown = false;
    }
}


module.exports = Canvas;