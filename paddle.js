class Paddle {
    constructor(x, screenHeight){
        //location of where to build the paddle
        this.x = x;
        this.y = parseInt(screenHeight / 3); 
        //the dimension of the paddle
        this.height = 90;
        this.width = 25;
    }

    display(){
        fill(255);
        rect(this.x, this.y, this.width, this.height);
    }
}

module.exports = Paddle;