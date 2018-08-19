// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('Uanble to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5b78fcc174cdb8454c07dec6')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err)=>{
  //   console.log('Unable to fetch todos', err);
  // })

  // db.collection('Todos').find().count().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  //   console.log('Todos Count : ' + docs);
  // }, (err)=>{
  //   console.log('Unable to fetch todos', err);
  // })

  db.collection('Todos').find({name:'Chaowalit'}).toArray().then((docs)=>{
    console.log(JSON.stringify(docs,undefined,2));
  })

  // db.close();
});
