var async = require("async");
var request = require("request");
var utils = require("../utils.js");

exports.getPhotos = function (req, photoset_id, callback) {
  var config = utils.config();

  var func = [];
  config.mode.forEach(function (mode) {
    if (mode == 1 || (mode != 1 && config.auth != null)) {
      func.push(function filter(callback) {
        getFiltered(req, photoset_id, mode, function (data) {
          callback(null, data);
        });
      });
    }
  });
  async.parallel(func, function merge(err, results) {
    var data = null;
    for (var i = 0; i < results.length; i++) {
      if (i > 0) {
        data.photoset.photo = data.photoset.photo.concat(
          results[i].photoset.photo
        );
      } else {
        data = results[i];
      }
    }
    callback(data);
  });
};
