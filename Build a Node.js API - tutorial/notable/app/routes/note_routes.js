const { globalLoc } = require("../../globals");
var ObjectId = require(globalLoc + 'mongodb').ObjectId;

module.exports = function(app, db){
  app.get('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = {'_id': new ObjectId(id)};
    db.collection('notes').findOne(details, (err, item) => {
      if (err) {
        res.send({ 'error': 'An error has occured' });
      } else {
        res.send(item);
      }
    });
  });

  app.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = {'_id': new ObjectId(id)};
    db.collection('notes').deleteOne(details, (err, item) => {
      if (err) {
        res.send({ 'error': 'An error has occured' });
      } else {
        res.send(`Note ${id} deleted!`);
      }
    });
  });

  app.put('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = {'_id': new ObjectId(id)};
    const note = { text: req.body.body, title: req.body.title };
    db.collection('notes').updateOne(details, { $set: note }, (err, item) => {
      if (err) {
        res.send({ 'error': 'An error has occured' });
      } else {
        /* Depracated
        res.send(item);
        */
        db.collection('notes').findOne(details, (err, item) => {
          if (err) {
            res.send({ 'error': 'An error has occured' });
          } else {
            res.send(item);
          }
        });
      }
    });
  });
  
  app.post('/notes', (req, res) => {
    const note = { text: req.body.body, title: req.body.title };
    db.collection('notes').insertOne(note, (err, result) => {
      if (err) {
        res.send({ 'error': 'An error has occured' });
      } else {
        /* Depracated
        res.send(result.ops[0]);
        */
        db.collection('notes').find({}).toArray((err, docs) => {
          res.send(docs);
        });
      }
    });
  });
};
