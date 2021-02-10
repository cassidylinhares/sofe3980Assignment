class Paddle {
    constructor(x, screenHeight){
        // Location of where to build the paddle
        this.screenHeight = screenHeight;
        this.x = x;
        this.y = parseInt(screenHeight / 3); 

        // The dimension of the paddle
        this.height = 100;
        this.width = 20;

        // Key press to move paddle
        this.pressedUp = false;
        this.pressedDown = false;
    }

    move(){ // Can only be tested manually because keyboard event cannot be simulated in mocha
        if(this.pressedUp){ // Move up
            this.up(); 
        }
        if(this.pressedDown){ // Move down
            this.down();
        }
    }

    moveBot(ball){
        let paddleCenter = (this.y + this.height)/2;

        if(ball.y < paddleCenter){ // Move up
            this.up();
        }
        if(ball.y > paddleCenter){ // Move down
            this.down();
        }
    }

    display(){
        fill(255);
        rect(this.x, this.y, this.width, this.height);
    }

    up(){ // move paddle up
        if(this.y > 0){
            this.y -= 5;
        }
    }

    down(){ // move paddle down
        if(this.y < (this.screenHeight-this.height)){
            this.y += 5;
        }
    }
}

module.exports = Paddle;