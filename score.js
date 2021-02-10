class Score {
    constructor(x){
        // Location of where to build the paddle
        this.x = x;
        this.y = 30;

        // Point
        this.pt = 0;
    }

    checkWin(otherPlayer){
        if(this.pt >= 11){
            this.pt = 0;
            otherPlayer.pt = 0;
        }
    }

    checkPlayerScored(ball, botScore){
        if(ball.x > (ball.width + ball.r)){
            this.pt++;
        }
        this.checkWin(botScore);
    }

    checkBotScored(ball, playerScore){
        if(ball.x < ball.r){
            this.pt++;
        }
        this.checkWin(playerScore);
    }

    display(){
        textSize(32);
        fill(250);
            text(this.pt.toString(), this.x, this.y);
    }
}

module.exports = Score;