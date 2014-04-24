'use strict';

var async = require('async')
  , Mongo = require('./mongo')
  , app = require('./app');

module.exports.start = function(options, cb){
  Mongo.connect(options, function(err) {
    if (err) return cb(err);

    app.start(function(err, expressApp){
      if(err) return cb(err);
      console.log('Ready to transac with U ...');
      cb(null, expressApp);
    });
  });
}
