const {
  MongoClient,
  ObjectID,
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to Mongodb server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany (remove meny docs)
  // db.collection('Todos').deleteMany({
  //   text: "MongoDB course"
  // }).then((result) => {
  //   console.log(result);
  // });

  // deleteOne (one doc)

  // db.collection('Todos').deleteOne({
  //   text: "MongoDB Course"
  // }).then((result) => {
  //   console.log(result);
  // })

  // findOneAndDelete

  // db.collection('Todos').findOneAndDelete({
  //   completed: false
  // }).then((result) => {
  //   console.log(result);
  // })


  db.collection('Users').deleteMany({
    name: 'Hoti'
  });

  // db.collection('Users').findAndDelete({
  //   _id: new ObjectID('5b994e99c4db826cbaca0986')
  // }).then((result) => {
  //   console.log(JSON.stringify(results, undefined, 2)); 
  // })

  // db.close();
});