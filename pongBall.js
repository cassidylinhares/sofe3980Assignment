class Ball {
    constructor(screenWidth, screenHeight, x=-1, y=-1, xspeed=0, yspeed=null){
        this.width = screenWidth;
        this.height = screenHeight;
        this.xVar = x;
        this.yVar = y;
        this.xspeed = xspeed;
        this.yspeed = yspeed;

        // Location of where to build the ball
        this.x = x > -1 ? x : this.width / 2;
        this.y = y > -1 ? y : this.height / 2;
        
        // Properties of the ball
        this.xVel = xspeed != 0? xspeed : Math.random(3, 4); 
        this.yVel = yspeed != null? yspeed : Math.random(-3, 3);

        // The dimension of the ball
        this.r = 15;
    }

    reset(){
        this.x = this.xVar > -1 ? this.xVar :this.width / 2;
        this.y = this.yVar > -1 ? this.yVar :this.height / 2;
        
        this.xVel = this.xspeed != 0? this.xspeed : Math.random(2, 3);
        this.yVel = this.yspeed != null? this.yspeed : Math.random(-3, 3); 
        
        let goingLeft = Math.random(1) > .5;
        if (goingLeft) {
            this.xVel = -this.xVel;
        } 
    }

    hitPlayer(player){
        if((this.x - this.r) <= (player.x + player.width) && this.x > player.x){
            if(this.withinPaddleHeight(player)){
                this.xVel = -this.xVel;
            }
        }
    }

    hitBot(bot){
        if((this.x + this.r) >= (bot.x) && this.x <= (bot.x + bot.width)){
            if(this.withinPaddleHeight(bot)){
                this.xVel = -this.xVel;
            }
        }
    }

    withinPaddleHeight(paddle){
        return this.y >= paddle.y && this.y <= (paddle.y+paddle.height);
    }

    wallCollision(){
        // Check for collision on top or bottom
        if(this.y < this.r || this.y > (this.height - this.r)){
            this.yVel = -this.yVel;
        }

        // Check for goal
        if(this.x < this.r || this.x > (this.width + this.r)){
            this.reset();
        }
    }

    move(){
        this.wallCollision();

        this.x += this.xVel;
        this.y += this.yVel;
    }

    display(){
        fill(255);
        ellipse(this.x, this.y, this.r*2, this.r*2);
    }
}

module.exports = Ball;