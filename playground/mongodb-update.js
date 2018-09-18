const {
  MongoClient,
  ObjectID
} = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, db) => {
    if (err) {
      return console.log("Unable to connect to Mongodb server");
    }
    console.log("Connected to MongoDB server");

    // db.collection("Todos")
    //   .findOneAndUpdate(
    //     {
    //       _id: new ObjectID("5b995d092ee760a0543dc379")
    //     },
    //     {
    //       $set: {
    //         completed: true
    //       }
    //     },
    //     {
    //       returnOriginal: false
    //     }
    //   )
    //   .then(result => {
    //     console.log(result);
    //   });

    db.collection("Users")
      .findOneAndUpdate({
        _id: new ObjectID("5b994cad52c7af6c40eb4058")
      }, {
        $set: {
          name: "Albiona Hoti"
        },
        $inc: {
          age: 1
        }
      }, {
        returnOriginal: false
      })
      .then(result => {
        console.log(result);
      });
    // db.close();
  }
);