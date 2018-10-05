const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({
//     _id: '5bb75a8dbfeb9f043213093c'
//   }).then((todo) => {
  
// });

Todo.findByIdAndRemove('5bb75a8dbfeb9f043213093c').then((todo) => {
  console.log(todo);
});