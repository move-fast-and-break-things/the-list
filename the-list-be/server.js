import Koa from 'koa';
import Router from '@koa/router';

const app = new Koa();
const router = new Router();

router.get('/', async ctx => {
  ctx.body = 'Hello World';
});

router.get('/hello/:name', async ctx => {
  ctx.body = `Hello ${ctx.params.name}`;
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(4000);
