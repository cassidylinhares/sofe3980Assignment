const { expect } = require('chai');
const Canvas = require('../sketch');

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

