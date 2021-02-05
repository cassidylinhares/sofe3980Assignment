const { expect, assert } = require('chai');
const Ball = require('../pongBall');

describe('test cases for Ball Class', () => {
    let b;
    beforeEach(function(){
        let screenWidth = 720, screenHeight = 480;
        b = new Ball(screenWidth, screenHeight);
    });

    it('mock ball x should be width/2 px, y should be height/2 of main canvas', function(done){
        expect(b.x).to.be.equal(360);
        expect(b.y).to.be.equal(240);
        done();
    }); 

    it('radius should be 15px', function(done){
        expect(b.r).to.be.equal(15);
        done();
    });
});

// describe('test Paddle Class Movement', () => {
//     let p;
//     before(function(){
//         let x = 26, screenHeight = 480, i=0;
//         p = new Paddle(x, screenHeight);
//         while(i<200){
//             p.up();
//             i++;
//         }
//     });

//     it('y location should decrease to move up', function(done){
//         assert.isBelow(p.y, 160, 'y loc is less than 160');
//         assert.isBelow(p.y, 25, 'y loc is less than 25');
//         expect(p.y).to.be.equal(0);
//         done();
//     });

//     let p1;
//     before(function(){
//         let x = 26, screenHeight = 480, i=0;
//         p1 = new Paddle(x, screenHeight);
//         while(i<200){
//             p1.down();
//             i++
//         }
//     });

//     it('y location should increase to move down', function(done){
//         assert.isAbove(p1.y, 160, 'y loc is more than 160');
//         assert.isAbove(p1.y, 200, 'y loc is more than 200');
//         expect(p1.y).to.be.equal(p1.screenHeight - p1.height);
//         done();
//     });
// });


