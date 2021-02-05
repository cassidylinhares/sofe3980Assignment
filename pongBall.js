class Ball {
    constructor(screenWidth, screenHeight){
        // Location of where to build the ball
        this.x = screenWidth / 2;
        this.y = screenHeight / 2; 

        // The dimension of the ball
        this.r = 15;
    }

    display(){
        //fill(255);
        ellipse(this.x, this.y, this.r*2, this.r*2);
    }
}

module.exports = Ball;