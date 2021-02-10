const { expect, assert } = require('chai');
const Ball = require('../pongBall');
const Score = require('../score');

describe('checkWin Function: p1 wins', () => {
    let p1, p2;//, b;
    before(function(){
        // let screenWidth = 720, screenHeight = 480;
        // b = new Ball(screenWidth, screenHeight, 740, 200, 3, 3);
        p1 = new Score(100);
        p2 = new Score(400)
        p1.pt = 11;
        p2.pt = 7;
        p1.checkWin(p2)
    });

    it('expect p1 and p2 score to reset after win', function(done){
        expect(p1.pt).to.be.equal(0);
        expect(p2.pt).to.be.equal(0);
        done();
    }); 
});

describe('checkWin Function: p2 wins', () => {
    let p1, p2;//, b;
    before(function(){
        //let screenWidth = 720, screenHeight = 480;
        // b = new Ball(screenWidth, screenHeight, -16, 200, -3, 3);
        p1 = new Score(100);
        p2 = new Score(400)
        p1.pt = 3;
        p2.pt = 11;
        p2.checkWin(p1)
    });

    it('expect p1 and p2 score to reset after win', function(done){
        expect(p1.pt).to.be.equal(0);
        expect(p2.pt).to.be.equal(0);
        done();
    }); 
});

describe('p1 scores a point', () => {
    tests = [
        {x:740, y:200, xspeed:3, yspeed:3, ansP1:4, ansP2:1},
        {x:200, y:200, xspeed:3, yspeed:3, ansP1:3, ansP2:1},
    ];

    tests.forEach(c => {
        let p1, p2, b;
        before(function(){
            let screenWidth = 720, screenHeight = 480;
            b = new Ball(screenWidth, screenHeight, c.x, c.y, c.xspeed, c.yspeed);
            p1 = new Score(100);
            p2 = new Score(400)
            p1.pt = 3;
            p2.pt = 1;
            p1.checkPlayerScored(b, p2)
        });

        it(`expect p1 to be ${c.ansP1} and p2 to be ${c.ansP2}`, function(done){
            expect(p1.pt).to.be.equal(c.ansP1);
            expect(p2.pt).to.be.equal(c.ansP2);
            done();
        }); 
    });
});

describe('p2 scores a point', () => {
    tests = [
        {x:-16, y:200, xspeed:-3, yspeed:3, ansP1:2, ansP2:3},
        {x:200, y:200, xspeed:-3, yspeed:3, ansP1:2, ansP2:2},
    ];

    tests.forEach(c => {
        let p1, p2, b;
        before(function(){
            let screenWidth = 720, screenHeight = 480;
            b = new Ball(screenWidth, screenHeight, c.x, c.y, c.xspeed, c.yspeed);
            p1 = new Score(100);
            p2 = new Score(400)
            p1.pt = 2;
            p2.pt = 2;
            p2.checkBotScored(b, p1)
        });

        it(`expect p1 to be ${c.ansP1} and p2 to be ${c.ansP2}`, function(done){
            expect(p1.pt).to.be.equal(c.ansP1);
            expect(p2.pt).to.be.equal(c.ansP2);
            done();
        }); 
    });
});