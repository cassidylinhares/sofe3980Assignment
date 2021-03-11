class Ball {
    constructor(screenWidth, screenHeight, x=null, y=-1, xspeed=0, yspeed=null){
        this.width = screenWidth;                                                       //int: screen Width
        this.height = screenHeight;                                                     //int: screen Height
        this.xVar = x;                                                                  //int: x location for ball *TESTING PURPOSES ONLY*
        this.yVar = y;                                                                  //int: y location for ball *TESTING PURPOSES ONLY*
        this.xspeed = xspeed;                                                           //int or float: x Speed for ball *TESTING PURPOSES ONLY*
        this.yspeed = yspeed;                                                           //int or float: y Speed for ball *TESTING PURPOSES ONLY*

        // Location of where to build the ball
        this.x = this.xVar != null ? this.xVar :this.width / 2;                         //int: actual x location of ball - middle of screen width
        this.y = this.yVar > -1 ? this.yVar :this.height / 2;                           //int: actual y location of ball - middle of screen height
        
        // Properties of the ball
        this.xVel = this.xspeed != 0 ? this.xspeed : Math.random() * (2.5 - 2) + 2;     //int or float: actual x speed of ball - random number between (2,2.5)
        this.yVel = this.yspeed != null? this.yspeed : Math.random() * (3 + 3) - 3;     //int or float: actual y speed of ball - random number between (-3,3)

        // The dimension of the ball
        this.r = 15;                                                                    //int: radius of ball
    }

    /*
    return: void
    params: 
    desc: resets ball to center of screen and randomly picks whether to go left or right
    */
    reset(){
        this.x = this.xVar != null ? this.xVar :this.width / 2;
        this.y = this.yVar > -1 ? this.yVar :this.height / 2;
        
        this.xVel = this.xspeed != 0 ? this.xspeed : Math.random() * (2.5 - 2) + 2;
        this.yVel = this.yspeed != null? this.yspeed : Math.random() * (3 + 3) - 3; 
        
        //randomly decide if ball should go left or right
        let goingLeft = Math.random() < .5;
        if (goingLeft) {
            this.xVel = -this.xVel;
        } 
    }

    /*
    return: void
    params: player: Paddle object
    desc: handles collision with paddle on left side of screen
    */
    hitPlayer(player){
        if((this.x - this.r) <= (player.x + player.width) && this.x-this.r >= player.x){
            if(this.withinPaddleHeight(player)){
                this.x = player.x + player.width+this.r;
                this.xVel = -this.xVel; //change horizontal directions
                console.trace("Ball & Player Collision- Ball's X-vel: ", this.xVel) //assignment#2 part 1: var 1
            }
        }
    }

    /*
    return: void
    params: bot: Paddle object
    desc: handles collision with paddle on right side of screen
    */
    hitBot(bot){
        if((this.x + this.r) >= bot.x && this.x <= (bot.x + bot.width)){
            if(this.withinPaddleHeight(bot)){
                this.x = bot.x - this.r;
                this.xVel = -this.xVel; //change horizontal directions
                console.trace("Ball & Bot Collision- Ball's X-loc: ",this.x) //assignment#2 part 1: var 2
            }
        }
    }

    /*
    return: boolean
    params: paddle: Paddle object
    desc: checks if ball is within the paddle's height
    */
    withinPaddleHeight(paddle){
        return this.y+this.r >= paddle.y && this.y+this.r <= (paddle.y+paddle.height);
    }

    /*
    return: void
    params: 
    desc: handles collision with walls/boards of screen
    */
    wallCollision(){
        // Check for collision on top or bottom
        if(this.y < this.r || this.y > (this.height - this.r)){
            this.yVel = -this.yVel;
            console.trace("Ball & Wall Collision- Ball's y-loc", this.yVel) //assignment#2 part 1: var 3
        }

        // Check for goal
        if(this.x < this.r || this.x > (this.width + this.r)){
            this.reset();
        }
    }

    /*
    return: void
    params: 
    desc: checks for wall collision and moves ball
    */
    move(){
        this.wallCollision();

        this.x += this.xVel;
        this.y += this.yVel;
    }

    /*
    return: void
    params: 
    desc: draws ball to screen
    */
    display(){
        fill(255);
        ellipse(this.x, this.y, this.r*2, this.r*2);
    }
}

module.exports = Ball;