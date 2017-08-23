process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();

describe('Sample Test', () => {
  it('should pass', (done) => {
    const sum = 1 + 2;
    sum.should.eql(3);
    sum.should.not.eql(4);
    done();
  });
});
