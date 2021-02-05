const { expect, assert } = require('chai');
const Paddle = require('../paddle');

describe('test cases for paddle Class', () => {
    let p;
    beforeEach(function(){
        let x = 26, screenHeight = 480;
        p = new Paddle(x, screenHeight);
    });

    it('mock paddle x should be 26px, y should be 1/3 of main canvas', function(done){
        expect(p.x).to.be.equal(26);
        expect(p.y).to.be.equal(160);
        done();
    }); 

    it('width of paddle should be 25, height of paddle should be 90', function(done){
        expect(p.width).to.be.equal(20);
        expect(p.height).to.be.equal(100);
        done();
    });
});

describe('test Paddle Class Movement', () => {
    let p;
    before(function(){
        let x = 26, screenHeight = 480, i=0;
        p = new Paddle(x, screenHeight);
        while(i<200){
            p.up();
            i++;
        }
    });

    it('y location should decrease to move up', function(done){
        assert.isBelow(p.y, 160, 'y loc is less than 160');
        assert.isBelow(p.y, 25, 'y loc is less than 25');
        expect(p.y).to.be.equal(0);
        done();
    });

    let p1;
    before(function(){
        let x = 26, screenHeight = 480, i=0;
        p1 = new Paddle(x, screenHeight);
        while(i<200){
            p1.down();
            i++
        }
    });

    it('y location should increase to move down', function(done){
        assert.isAbove(p1.y, 160, 'y loc is more than 160');
        assert.isAbove(p1.y, 200, 'y loc is more than 200');
        expect(p1.y).to.be.equal(p1.screenHeight - p1.height);
        done();
    });
});


