const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Clothes
      .find(req.query)
      .sort({ _id: 1 })
      .limit(12)
      .then(result => res.render("index", { off: result }))
      .catch(err =>  res.json(err));
  },
  findById: function(req, res) {
    db.Clothes
      .findById(req.params.id)
      .populate("comments")
      .then(data => res.render("comments", { article: data })) 
      .catch(err => res.json(err));
  },
  create: function(req, res) {
    db.offWhiteComment
      .create(req.body)
      .then(result => { return db.Clothes.findOneAndUpdate({_id: req.params.id }, {$push:{ comments: result._id }}, { new: true }) 
        .then(dbArticle => res.json(dbArticle))
        .catch(err => res.json(err));
      });
  },
  remove: function(req, res) {
    db.offWhiteComment
    .findById({ _id: req.params.id })
    .then(function(dbModel)  {dbModel.remove()})
    .then(function(dbModel) {res.json(dbModel)})
    .catch(function(err) {res.status(422).json(err)})
  },
  remove: function(req, res) {
    db.Clothes
      .findById({ _id: req.params.id })
      .then(function(dbModel)  {dbModel.remove()})
      .then(function(dbModel) {res.json(dbModel)})
      .catch(function(err) {res.status(422).json(err)})
  }
};
