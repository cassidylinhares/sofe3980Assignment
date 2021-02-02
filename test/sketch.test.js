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
});
