class Paddle {
    constructor(x, screenHeight){
        // Location of where to build the paddle
        this.x = x;
        this.y = parseInt(screenHeight / 3); 

        // The dimension of the paddle
        this.height = 90;
        this.width = 25;

        // Key press to move paddle
        this.pressedUp = false;
        this.pressedDown = false;
    }

    display(){
        fill(255);
        rect(this.x, this.y, this.width, this.height);
    }

    up(){
        this.y -= 5;
    }

    down(){
        this.y += 5;
    }
}

module.exports = Paddle;