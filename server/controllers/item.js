const Item = require('../models/itmes');

var model = {}

model.addItem = function(req, res){
  let body = req.body
  Item.create(body, (err, result)=>{
    if(err){
      res.status(500).send({
        msg: 'Error on Database!',
        error: err
      })
    } else {
      res.send({
        msg: 'success create on database',
        res: result
      })
    }
  })
}

model.showAll = function(req, res){
  Item.find({}, (err, result)=>{
    if(err){
      res.status(500).send({
        msg: 'Error on Database!',
        error: err
      })
    } else {
      res.send(result)
    }
  })
}

model.getItem = function(req, res){
  Item.findById(req.params.id, (err, result)=>{
    if(err){
      res.status(500).send({
        msg: 'Error on Database',
        error: err
      })
    } else {
      res.send(result)
    }
  })
}

model.getItemBySearch = function(req, res){
  let name = req.params.name
  Item.find({
    name: new RegExp(name, "i")
  }, (err, result)=>{
    if(err){
      res.status(500).send({
        msg: 'Error on Database',
        error: err
      })
    } else {
      res.send(result)
    }
  })
}

model.getItemByCategory = function(req, res){
  let category = req.params.category
  Item.find({
    category: new RegExp(category)
  }, (err, result)=>{
    if(err){
      res.status(500).send({
        msg: 'Error on Database',
        error: err
      })
    } else {
      res.send(result)
    }
  })
}

module.exports = model;
