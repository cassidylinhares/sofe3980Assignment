class Canvas{
    constructor(){
        this.width = 720;
        this.height = 480;
    }
}

let player, bot;

function setup() {
    canvas = new Canvas();
    createCanvas(canvas.width, canvas.height);
    player = new Paddle(27, this.height);
    bot = new Paddle(canvas.width-27-player.width, canvas.height)
}

function draw() {
    background(50);
    player.display();
    bot.display();
}


module.exports = Canvas;