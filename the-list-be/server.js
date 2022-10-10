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
      { $addToSet: { students: ctx.request.body._id } }
    );
  }
  if (ctx.request.body.action == 'remove') {
    await dailyAttendance.updateOne(
      { date: ctx.params.date },
      { $pull: { students: ctx.request.body._id } }
    );
  }
  const check = await dailyAttendance.findOne({ date: ctx.params.date });
  ctx.body = check;
});

router.get('/attendance/:date', async ctx => {
  const FindStudentsInDate = await dailyAttendance.findOne({
    date: ctx.params.date
  });
  ctx.body = FindStudentsInDate;
});

router.post('/students', async ctx => {
  const insertStudent = await students.insertOne(ctx.request.body);
  ctx.body = insertStudent;
});

router.get('/students', async ctx => {
  const findStudents = await students.find({}).toArray();
  ctx.body = findStudents;
});

router.delete('/students/:id', async ctx => {
  const deleteStudent = await students.deleteOne({
    _id: new ObjectId(ctx.params.id)
  });
  ctx.body = deleteStudent;
});

app.use(koaBody()).use(router.routes()).use(router.allowedMethods());

app.listen(4000);

function getTodayDate() {
  const todayDate = new Date();
  return (
    todayDate.getDate() +
    '.' +
    (todayDate.getMonth() + 1) +
    '.' +
    todayDate.getFullYear()
  );
}
