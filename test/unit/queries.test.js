process.env.NODE_ENV = 'test';

const sinon = require('sinon');
const chai = require('chai');
const should = chai.should();

const queries = require('../../src/server/db/queries/movies.js');
const data = require('../fixtures');

console.log(data)

// describe('queries : movies', () => {
//
//   describe('getAllMovies()', () => {
//     it('should return all movies', (done) => {
//       // const movies = sinon.stub(queries, 'getAllMovies').returns(Promise.resolve(data));
//
//       console.log(movies);
//       movies.length.should.eql(4);
//       movies[0].name = 'Star Wars';
//     });
//   });
//
// });
