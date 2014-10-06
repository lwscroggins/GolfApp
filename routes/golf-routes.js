'use strict'

var Game = require('../models/game');

module.exports = function(app, jwtauth) {
  var baseUrl = '/api/v.0.0.1/game';

  app.get(baseUrl, jwtauth, function(req, res) {
    Game.find({'user_id': req.user._id}, function(err, game) {
      if(err) return res.status(500).json(err);
      return res.json(game)
    });
  });

  app.post(baseUrl, jwtauth, function(req, res) {
    var game = new Game(req.body);
    game.user_id = req.user.id;
    game.save(function(err, resGame) {
      if(err) return res.status(500).json(err);
      return res.send(resGame);
    });
  });

  app.put(baseUrl + '/:id', jwtauth, function(req, res) {
    var game = req.body;
    delete game._id;
    Game.findOneAndUpdate({'_id': req.params.id} function(err, resGame) {
      if(err) return res.status(500).json(err);
      return res.status(200).json(resGame);
    });
  });

  app.delete(baseUrl + '/:id', jwtauth, function(req, res) {
    Game.remove({'_id': req.params.id}, function(err, resGame) {
      if(err) return res.status(500).json(err);
      return res.status(200).json({'msg': 'deleted'});
    });
  });
};
