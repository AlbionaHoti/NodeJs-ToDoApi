const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5ba1f9cbfc99232ccd5ea103';
// if(!ObjectID.isValid(id)) {
//   console.log('ID not valid')
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

var userId = '5ba0f25f861a76f2267fd062'

User.findById(userId).then((user) => {
  if(!user) {
    return console.log('ID not valid.')
  }
  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
}); 