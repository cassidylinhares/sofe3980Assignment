const { expect } = require('chai');
const Canvas = require('../sketch');
const Paddle = require('../paddle');

describe('test for main canvas', () => {
    let canvas;
    beforeEach(function(){
        canvas = new Canvas();
    });

    it('should be an object', function(done){
        expect(canvas).to.be.a('object');
        done();
    });

    it('should be an 720p x 480p', function(done){
        expect(canvas.width).to.be.equal(720);
        expect(canvas.height).to.be.equal(480);
        done();
    });

});

describe('integration test for paddles', () => {
    let c;
    before(function(){
        c = new Canvas();
        c.player = new Paddle(27, c.height);
        c.bot = new Paddle(c.width-27-c.player.width, c.height)
    });

    it('paddle 1 should be an object', function(done){
        expect(c.player).to.be.a('object');
        done();
    });

    it('paddle 2 should be an object', function(done){
        expect(c.bot).to.be.a('object');
        done();
    });

    it('paddle 1 width should be 25px', function(done){
        expect(c.player.width).to.be.equal(25);
        done();
    });

    it('paddle 2 width should be 25px', function(done){
        expect(c.bot.width).to.be.equal(25);
        done();
    });
});

