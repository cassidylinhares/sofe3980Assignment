class Canvas{
    constructor(){
        this.width = 720;
        this.height = 480;
        this.player;
        this.bot;
    }
}

function setup() {
    c = new Canvas();
    createCanvas(c.width, c.height);
    c.player = new Paddle(27, c.height);
    c.bot = new Paddle(c.width-27-c.player.width, c.height);
}

function draw() {
    background(50);
    c.player.display();
    c.bot.display();

    // Make the player paddle move up!
    c.player.up();
}


module.exports = Canvas;