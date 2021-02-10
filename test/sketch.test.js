const { expect } = require('chai');
const Canvas = require('../sketch');
const Paddle = require('../paddle');
const Ball = require('../pongBall');
const Score = require('../score');

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
        expect(c.player.width).to.be.equal(20);
        done();
    });

    it('paddle 2 width should be 25px', function(done){
        expect(c.bot.width).to.be.equal(20);
        done();
    });
});

describe('integration test for ball', () => {
    let c;
    before(function(){
        c = new Canvas();
        c.ball = new Ball(c.width, c.height);
    });

    it('ball should be an object', function(done){
        expect(c.ball).to.be.a('object');
        done();
    });

    it('ball radius should be 15px', function(done){
        expect(c.ball.r).to.be.equal(15);
        done();
    });
});

describe('integration test for score', () => {
    let c;
    before(function(){
        c = new Canvas();
        c.playerScore = new Score(c.width/2-30);
    });

    it('score should be an object', function(done){
        expect(c.playerScore).to.be.a('object');
        done();
    });

    it('pt should start at 0', function(done){
        expect(c.playerScore.pt).to.be.equal(0);
        done();
    });
});