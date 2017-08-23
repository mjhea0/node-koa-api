const Router = require('koa-router');

const data = require('../data.json');
const router = new Router();
const BASE_URL = `/api/v1/movies`;

router.get(BASE_URL, async (ctx) => {
  ctx.body = {
    status: 'success',
    data: data
  };
})

router.get(`${BASE_URL}/:id`, async (ctx) => {
  const movie = data.filter((el) => {
    return el.id === parseInt(ctx.params.id);
  });
  ctx.body = {
    status: 'success',
    data: movie
  };
})

router.post(`${BASE_URL}`, async (ctx) => {
  const newMovie = ctx.request.body;
  newMovie.id = data.length + 1;
  data.push(newMovie)
  const movie = data.filter((el) => {
    return el.id === parseInt(newMovie.id);
  });
  ctx.status = 201;
  ctx.body = {
    status: 'success',
    data: movie
  };
})

router.delete(`${BASE_URL}/:id`, async (ctx) => {
  const movie = data.filter((el) => {
    return el.id === parseInt(ctx.params.id);
  });
  data.splice(data.indexOf(movie[0]), 1);
  ctx.body = {
    status: 'success',
    data: movie
  };
})

module.exports = router;
