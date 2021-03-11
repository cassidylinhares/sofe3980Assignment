// Keeps track of a paddle's score
class Score {
    constructor(x){
        // Location of where to build the paddle
        this.x = x;             //int: x location of texts
        this.y = 30;            //int: y location of texts

        // Point
        this.pt = 0;            //int: current score of paddle
    }

    /*
    return: void
    params: otherPlayer: Score object
    desc: checks if the player win and then resets score
    */
    checkWin(otherPlayer){
        if(this.pt >= 11){
            this.pt = 0;
            otherPlayer.pt = 0;
        }
    }

    /*
    return: void
    params: ball: Ball object, botScore: Score object
    desc: checks if ball made it past the right side of screen and checks for win
    */
    checkPlayerScored(ball, botScore){
        if(ball.x > (ball.width + ball.r)){
            this.pt++;
        }
        this.checkWin(botScore);
    }

    /*
    return: void
    params: ball: Ball object, playerScore: Score object
    desc: checks if ball made it past the right side of screen and checks for win
    */
    checkBotScored(ball, playerScore){
        if(ball.x < ball.r){
            this.pt++;
            console.trace("bot point", this.pt) //assignment#2 part 1: var 5
        }
        this.checkWin(playerScore);
    }

    /*
    return: void
    params: 
    desc: draws text to screen
    */
    display(){
        textSize(32);
        fill(250);
            text(this.pt.toString(), this.x, this.y);
    }
}

module.exports = Score;