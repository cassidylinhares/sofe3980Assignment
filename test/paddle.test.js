const { expect } = require('chai');
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
        expect(p.width).to.be.equal(25);
        expect(p.height).to.be.equal(90);
        done();
    });
});
