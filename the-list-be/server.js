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
const dailyAttendance = db.collection('dailyAttendance');

router.patch('/attendance/:date', async ctx => {
  if (ctx.request.body.action == 'add') {
    await dailyAttendance.updateOne(
      { date: ctx.params.date },
      { $addToSet: { students: ctx.request.body._id } },
      { upsert: true }
    );
  } else if (ctx.request.body.action == 'remove') {
    await dailyAttendance.updateOne(
      { date: ctx.params.date },
      { $pull: { students: ctx.request.body._id } }
    );
  } else {
    ctx.throw(400, 'Неправильный запрос. Введите "add" или "remove"');
  }
  const updatedAttendance = await dailyAttendance.findOne({
    date: ctx.params.date
  });
  ctx.body = updatedAttendance;
});

router.get('/attendance/:date', async ctx => {
  const attendanceInDate = await dailyAttendance.findOne({
    date: ctx.params.date
  });
  ctx.body = attendanceInDate;
});

router.post('/students', async ctx => {
  const insertBody = ctx.request.body;
  const name = insertBody.name;
  // @ts-ignore
  ctx.assert(name, 418, "Как дела на фронте?");
  const insertResult = await students.insertOne({"name": name});
  ctx.body = insertResult;
})

router.get('/students', async ctx => {
  const allStudents = await students.find({}).toArray();
  ctx.body = allStudents;
});

router.delete('/students/:id', async ctx => {
  const deleteStudentResult = await students.deleteOne({
    _id: new ObjectId(ctx.params.id)
  });
  ctx.body = deleteStudentResult;
});

app.use(koaBody()).use(router.routes()).use(router.allowedMethods());

app.listen(4000);
