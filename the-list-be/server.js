import Koa from 'koa';
import Router from '@koa/router';
import { MongoClient, ObjectId } from 'mongodb';
import koaBody from 'koa-body';

const app = new Koa();
const router = new Router();

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);
const db = client.db('database');
const students = db.collection('students');

router.post('/students', async ctx => {
  const insertResult = await students.insertOne(ctx.request.body);
  ctx.body = `Insert documents => ${insertResult}, Request body => ${JSON.stringify(ctx.request.body)}`;
})

router.get('/students', async ctx => {
  const findResult = await students.find({}).toArray();
  ctx.body = findResult;
})

router.delete('/students/:id', async ctx =>{
    const studentDelete = await students.deleteOne({_id: new ObjectId(ctx.params.id)});
    ctx.body = studentDelete;
})

app.use(koaBody());

app
  .use(router.routes())
  .use(router.allowedMethods());


app.listen(4000);
