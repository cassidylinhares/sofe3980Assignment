class Paddle {
    constructor(x, screenHeight){
        // Location of where to build the paddle
        this.screenHeight = screenHeight;           //int: height of screeen
        this.x = x;                                 //int: x location for paddle
        this.y = parseInt(screenHeight / 3);        //int: y location for paddle - place in middle of height

        // The dimension of the paddle
        this.height = 100;                          //int: height of the paddle
        this.width = 20;                            //int: width of the paddle

        // Key press to move paddle
        this.pressedUp = false;                     //boolean: check if up arrow is pressed
        this.pressedDown = false;                   //boolean: check if down arrow is pressed
    }

    /*
    return: void
    params: ball: Ball object
    description: moves player's paddle with arrow Keys
    */
    move(){ // Can only be tested manually because keyboard event cannot be simulated in mocha
        if(this.pressedUp){ // Move up
            this.up(); 
        }
        if(this.pressedDown){ // Move down
            this.down();
        }
    }

    /*
    return: void
    params: ball: Ball object
    description: fake  AI for the bot paddle
    */
    moveBot(ball){
        let paddleCenter = (this.y + this.height)/2;

        if(ball.y < paddleCenter){ // Move up
            this.up();
        }
        if(ball.y > paddleCenter){ // Move down
            this.down();
        }
    }

    /*
    return: void
    params: 
    description: move paddle up
    */
    up(){
        if(this.y > 0){
            this.y -= 5;
            console.trace("Paddle's Y-loc", this.y, Error().lineNumber) //assignment#2 part 1: var 4
        }
    }

    /*
    return: void
    params: 
    description: move paddle down
    */
    down(){ 
        if(this.y < (this.screenHeight-this.height)){
            this.y += 5;
        }
    }

    /*
    return: void
    params: 
    description: renders paddle to the screen
    */
    display(){
        fill(255);
        rect(this.x, this.y, this.width, this.height);
    }
}

module.exports = Paddle;