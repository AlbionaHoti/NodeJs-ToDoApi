const {ObjectID} = require('mongodb');
var express = require('express');
var bodyParser = require('body-parser');


var {mongoose} = require('./db/mongoose')

var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text,
    completed: req.body.completed,
    completedAt: req.body.completedAt
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  })
});

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    res.status(404).send();
  }
  
    Todo.findById(id).then((todo) => {
      if(!todo) {
        return res.status(404).send();
      }

    res.send({todo});
    }).catch((e) => {
      res.status(400).send()
    });
});

app.listen(3001, () => {
  console.log('Started on port 3001');
});

module.exports = {app}