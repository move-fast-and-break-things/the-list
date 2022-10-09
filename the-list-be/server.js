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

router.put('/attendance/:date', async ctx => {
  await dailyAttendance.updateOne(
    { date: ctx.params.date },
    { $addToSet: { students: ctx.request.body._id } },
    { upsert: true }
  );
  const check = await dailyAttendance.find({}).toArray();
  ctx.body = check;
});

router.get('/attendance/:date', async ctx => {
  const FindStudentsInDate = await dailyAttendance.find({date: ctx.params.date}).toArray();
  ctx.body = FindStudentsInDate;
});

router.post('/student', async ctx => {
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
