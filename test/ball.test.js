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

describe('test Ball reset Function', () => {
    let b;
    before(function(){
        let w = 720, h = 480, x=100, y=200, xspeed=4, yspeed=4;
        b = new Ball(w, h, x, y, xspeed, yspeed);
        b.reset();
    });

    it('x should be 100', function(done){
        expect(b.x).to.be.equal(100);
        done();
    });

    it('y should be 200', function(done){
        expect(b.y).to.be.equal(200);
        done();
    });

    it('y Speed should be 4', function(done){
        expect(b.yVel).to.be.equal(4);
        done();
    });

    it('x Speed should be 4 or -4', function(done){
        expect(b.xVel).to.be.oneOf([-4, 4]);
        done();
    });
});

describe('test Ball Collision', () => {
    const tests = [
        //test y and yspeed
        {x: 200, y: 0, speedx:3, speedy:3, expcX: 200, expcY: 0, expcXspeed: [-3,3], expcYspeed: -3},
        {x: 200, y: 480, speedx:3, speedy:3, expcX: 200, expcY: 480, expcXspeed: [-3,3], expcYspeed: -3},
        {x: 200, y: 200, speedx:3, speedy:3, expcX: 200, expcY: 200, expcXspeed: [-3,3], expcYspeed: 3},
        {x: 0, y: 480, speedx:3, speedy:0, expcX: 0, expcY: 480, expcXspeed: [-3,3], expcYspeed: 0},
        //test x and xspeed
        {x: 0, y: 200, speedx:3, speedy:3, expcX: 0, expcY: 200, expcXspeed: [-3,3], expcYspeed: 3},
        {x: 740, y: 200, speedx:3, speedy:3, expcX: 740, expcY: 200, expcXspeed: [-3,3], expcYspeed: 3},
        {x: 100, y: 200, speedx:3, speedy:3, expcX: 100, expcY: 200, expcXspeed: 3, expcYspeed: 3},
        {x: 0, y: 200, speedx:3, speedy:3, expcX: 0, expcY: 200, expcXspeed: 'number', expcYspeed: 3},
    ];
    tests.forEach((c)=>{
        let b;
        before(function(){
            b = new Ball(720, 480, c.x, c.y, c.speedx, c.speedy);
            b.collision();
        });
        it(`x should be ${c.expcX}`, function(done){
            expect(b.x).to.be.equal(c.expcX);
            done();
        });
    
        it(`y should be ${c.expcY}`, function(done){
            expect(b.y).to.be.equal(c.expcY);
            done();
        });
    
        it(`x Speed should be one of ${c.expcXspeed}`, function(done){
            if(Array.isArray(c.expcXspeed)){
                expect(b.xVel).to.be.oneOf(c.expcXspeed);
            }else if(typeof c.expcXspeed == 'string'){
                expect(typeof b.xVel).to.be.a('string');
            }else{
                expect(b.xVel).to.be.equal(c.expcXspeed);
            }
            done();
        });
    
        it(`y Speed should be ${c.expcYspeed}`, function(done){
            expect(b.yVel).to.be.equal(c.expcYspeed);
            done();
        });

    });
});


